import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the date (YYYY-MM-DD): ', (date) => {
    rl.question('Enter the talk name: ', (talkName) => {
        const dirName = `${date}_${talkName}`;
        const dirPath = path.join(process.cwd(), dirName);
        const srcPath = path.join(dirPath, 'src');

        // Create the sub-directory
        fs.mkdirSync(dirPath, { recursive: true });

        // Initialize slidev in the src directory
        execSync('npm create slidev@latest src', { cwd: dirPath, stdio: 'inherit' });

        // Remove netlify.toml, vercel.json, .gitignore, and .npmrc
        const filesToRemove = ['netlify.toml', 'vercel.json', '.gitignore', '.npmrc'];
        filesToRemove.forEach(file => {
            const filePath = path.join(srcPath, file);
            if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            }
        });
        // Move README.md one directory up
        const readmePath = path.join(srcPath, 'README.md');
        const newReadmePath = path.join(dirPath, 'README.md');
        if (fs.existsSync(readmePath)) {
            fs.renameSync(readmePath, newReadmePath);
        }

        // Modify package.json
        const packageJsonPath = path.join(srcPath, 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
        const year = date.split('-')[0];
        packageJson.scripts.build = `slidev build --base /${year}/${talkName}/ --out ../../dist/${year}/${talkName}/`;
        packageJson.scripts.export = `slidev export --per-slide --output ../${date}-${talkName}.pdf`;
        console.log(`Successfully updated "build" and "export" script in package.json. You may want to adjust these.`);

        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

        console.log(`Project initialized in ${dirPath}`);
        rl.close();
    });
});