import { exec } from 'child_process';
import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';

// Helper function to execute shell commands
const execCommand = (command: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const proc = exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error.message);
        return;
      }
      if (stderr) {
        console.log(stderr);
      }
      console.log(stdout);
      resolve();
    });

    proc.stdout?.pipe(process.stdout);
    proc.stderr?.pipe(process.stderr);
  });
};

// Helper function to prompt for user input
const prompt = (question: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

// Helper function to safely modify package.json
const modifyPackageJsonBuildScript = (packageJsonPath: string, year: string, folder: string) => {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    if (!packageJson.scripts) {
      console.error(`No scripts field found in ${packageJsonPath}`);
      return;
    }

    // Update the "build" script with the new paths based on the year and folder
    const newBuildScript = `slidev build --base /${year}/${folder}/ --out ../../dist/${year}/${folder}/`;
    packageJson.scripts['build'] = newBuildScript;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`Successfully updated "build" script in package.json to "${newBuildScript}"`);
  } catch (error) {
    console.error(`Error modifying package.json: ${error.message}`);
  }
};

const main = async () => {
  try {
    // Step 1: Run 'npm init slidev@latest'
    console.log('Initializing Slidev project...');
    await execCommand('npm init slidev@latest');

    // Step 2: Locate package.json
    const packageJsonPath = path.join(process.cwd(), 'package.json');

    if (!fs.existsSync(packageJsonPath)) {
      console.error(`package.json not found in the current directory: ${packageJsonPath}`);
      return;
    }

    // Step 3: Prompt user for the year and folder name
    const year = await prompt('Enter the year (e.g., "2024"): ');
    const folder = await prompt('Enter the folder name (e.g., "test"): ');

    // Step 4: Modify the package.json "build" script
    modifyPackageJsonBuildScript(packageJsonPath, year, folder);

  } catch (error) {
    console.error('Error:', error);
  }
};

main();
