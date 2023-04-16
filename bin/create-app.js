#!/usr/bin/env node

const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs');
const packageJson = require('../package.json');

async function runCmd(command) {
    try {
        const { stdout, stderr } = await exec(command);
        console.log(stdout);
        console.log(stderr);
    } catch {
        (error) => {
            console.log('\x1b[31m', error, '\x1b[0m');
        };
    }
}

if (process.argv.length < 3) {
    console.log('You have to provide a name to your app.');
    console.log('For example :');
    console.log('    npx create-my-boilerplate my-app');
    process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/archimonde92/create-my-boilerplate.git";

try {
    fs.mkdirSync(projectPath);
} catch (err) {
    if (err.code === 'EEXIST') {
        console.log(`The file ${projectName} already exist in the current directory, please give it another name.`);
    } else {
        console.log(error);
    }
    process.exit(1);
}

async function main() {
    try {
        console.log('Downloading files...');
        runCmd(`git clone --depth 1 ${git_repo} ${projectPath}`);

        process.chdir(projectPath);

        console.log('Installing dependencies...');
        runCmd('npm install');

        console.log('Removing useless files');
        runCmd('npx rimraf ./.git');

        fs.unlinkSync(path.join(appPath, 'LICENSE.MD'));
        fs.rmdirSync(path.join(appPath, 'bin'), { recursive: true });
        fs.unlinkSync(path.join(appPath, 'package.json'));

        buildPackageJson(packageJson, folderName);

        console.log(
            '\x1b[32m',
            'The installation is done, this is ready to use !',
            '\x1b[0m'
        );
        console.log();

        console.log('\x1b[34m', 'You can start by typing:');
        console.log(`    cd ${folderName}`);
        console.log('    npm start', '\x1b[0m');
        console.log();
        console.log('Check Readme.md for more informations');
        console.log();

    } catch (error) {
        // console.log(error);
    }
}
main();