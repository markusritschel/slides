import { execa } from 'execa'
import prompts from 'prompts'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const author = "Markus Ritschel";

async function main() {
  try {
    const response = await prompts([
      {
        type: 'text',
        name: 'date',
        message: 'Enter date (YYYY-MM-DD)',
        // validate: d => /^\d{4}-\d{2}-\d{2}$/.test(d)
        validate: d => isValidDate(d) ? true : 'Invalid date'
      },
      {
        type: 'text',
        name: 'name',
        message: 'Enter presentation name',
        validate: n => n.length > 0 ? true : 'Name cannot be empty'
      }
    ], {
      onCancel: () => {
        process.exit(0)
      }
    })

    await createPresentation(response)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

function isValidDate(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with hyphens
    .replace(/[^\w-]/g, '')      // Remove all non-word chars
    .replace(/--+/g, '-')        // Replace multiple hyphens with single ones
    .replace(/^-+|-+$/g, '')     // Trim hyphens from start and end
}

function replacePlaceholders(content: string, replacements: Record<string, string>): string {
  return Object.entries(replacements).reduce(
    (acc, [key, value]) => acc.replace(new RegExp(`{{${key}}}`, "g"), value),
    content
  );
}

async function copyTemplateDir(
  srcDir: string,
  destDir: string,
  replacements: Record<string, string>
) {
  await fs.mkdir(destDir, { recursive: true });
  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);

    // Replace placeholders in file/folder names
    const destName = replacePlaceholders(entry.name, replacements);
    const destPath = path.join(destDir, destName);

    if (entry.isDirectory()) {
      await copyTemplateDir(srcPath, destPath, replacements);
    } else if (entry.isFile()) {
      const content = await fs.readFile(srcPath, "utf-8");
      const replaced = replacePlaceholders(content, replacements);
      await fs.writeFile(destPath, replaced, "utf-8");
    }
  }
}


async function createPresentation({ date, name }: { date: string; name: string }) {
  const slug = slugify(name)
  const dir = path.join(process.cwd(), 'slides', `${date}_${slug}`)
  const srcDir = path.join(dir, 'src')
  
  await fs.mkdir(srcDir, { recursive: true })
  const replacements = {
    author_name: author,
    presentation_name: name,
    presentation_date: date,
    presentation_dir: `${date}_${slug}`
  }
  await copyTemplateDir("./template", dir, replacements);

  // Install dependencies with exact versions
  console.log('Installing dependencies...')
  await execa('pnpm', ['add', '-E', '@slidev/cli@latest', '@slidev/theme-default@latest'], { 
    cwd: srcDir,
    stdio: 'inherit'
  })

  const rel_dir: string = path.relative(process.cwd(), dir);
  console.log(`\nPresentation created in ${rel_dir}`)
  console.log('To start working on it, either run')
  console.log('$ pnpm dev')
  console.log('and choose the presentation from the list. Or run:')
  console.log(`$ cd ${rel_dir}/src`)
  console.log('$ pnpm dev')
}

main().catch(console.error)
