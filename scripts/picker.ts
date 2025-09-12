import process from 'node:process'
import path from 'node:path'
import { execa } from 'execa'
import prompts from 'prompts'
import fg from 'fast-glob'

async function main() {
  try {
    const args = process.argv.slice(2)
    await startPicker(args)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

async function startPicker(args: string[]) {
  // Find all presentations
  const pattern = 'slides/*/src'
  const presentations = await fg(pattern, { onlyDirectories: true })
  
  if (presentations.length === 0) {
    console.log('No presentations found. Create one with `pnpm new` first.')
    process.exit(0)
  }

  const folders = presentations
    .map(f => path.dirname(f))
    .map(f => path.basename(f))
    .sort((a, b) => -a.localeCompare(b))

  console.log('[ ', folders.length, 'presentations found ]\n')
  // console.log('Found presentations:', folders)

  const result = await prompts([
    {
      type: 'select',
      name: 'folder',
      message: 'Pick a presentation',
      choices: folders.map(folder => ({ title: folder, value: folder })),
    }
  ], {
    onCancel: () => {
      process.exit(0)
    }
  })

  if (result.folder) {
    const srcDir = path.join(process.cwd(), 'slides', result.folder, 'src')
    console.log(`Opening presentation in ${srcDir}...`)
    
    // Use env variable to suppress npm output
    const env = { ...process.env, npm_config_loglevel: 'silent' }
    
    await execa('pnpm', args, {
      cwd: srcDir,
      stdio: 'inherit',
      env
    })
  }
}

main().catch(console.error)
