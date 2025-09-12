import { execa } from 'execa'
import prompts from 'prompts'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

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

async function createPackageJson(dir: string, date: string, slug: string) {
  // const outPath = path.join(process.cwd(), "/dist/${date}_${slug}")
  const relRoot = path.relative(dir, process.cwd())
  const pkg = {
    "private": true,
    "type": "module",
    "scripts": {
      "dev": "slidev --open",
      "build": `slidev build --base /${date}_${slug}/ --out ${relRoot}/dist/${date}_${slug}`,
      "export": `slidev export --per-slide --output ../${date}_${slug}.pdf`
    },
    "dependencies": {
      "@slidev/cli": "latest",
      "@slidev/theme-default": "latest"
    }
  }
  
  await fs.writeFile(
    path.join(dir, 'package.json'),
    JSON.stringify(pkg, null, 2)
  )
}

async function createInitialSlides(dir: string, name: string) {
  const slidesContent = `---
theme: default
title: ${name}
---

# ${name}

---

# Agenda

1. First Point
2. Second Point
3. Third Point`

  await fs.writeFile(path.join(dir, 'slides.md'), slidesContent)
}

async function createReadme(dir: string, date: string, name: string) {
    const readmeContent = `# ${name}

Presentation given on ${date}

To start the slide show:

- \`pnpm install\`
- \`pnpm dev\`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).
`
  await fs.writeFile(path.join(dir, 'README.md'), readmeContent)
}

async function createPresentation({ date, name }: { date: string; name: string }) {
  const slug = slugify(name)
  const dir = path.join(process.cwd(), 'slides', `${date}_${slug}`)
  const srcDir = path.join(dir, 'src')
  
  await fs.mkdir(srcDir, { recursive: true })
  await createPackageJson(srcDir, date, slug)
  await createInitialSlides(srcDir, name)
  await createReadme(dir, date, name)

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
