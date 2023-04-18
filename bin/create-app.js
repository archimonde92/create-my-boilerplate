#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const packageJson = require('../package.json');
const fs = require('fs');

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
        execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

        process.chdir(projectPath);

        console.log('Installing dependencies...');
        execSync('npm install');

        console.log('Removing useless files');
        execSync('npx rimraf ./.git');
        fs.rm(path.join(projectPath, 'bin'), { recursive: true });
        fs.unlinkSync(path.join(projectPath, 'package.json'));

        console.log('Build package.json ...')
        buildPackageJson(packageJson, projectName)
        console.log('The installation is done, this is ready to use !');

    } catch (error) {
        console.log(error);
    }
}
main();

function buildPackageJson(packageJson, folderName) {
    const {
        bin,
        keywords,
        license,
        homepage,
        repository,
        bugs,
        ...newPackage
    } = packageJson;

    Object.assign(newPackage, {
        name: folderName,
        version: '1.0.0',
        description: '',
        author: 'archimonde92',
        scripts: {
            "scripts": "node script.mjs",
            "test": "ts-node src/test/index.ts",
            "build": "rm -rf dist && tsc",
            "start": "node dist/index.js",
            "dev": "ts-node src/index.ts",
            "dep": "docker-compose -f docker-compose.yml up --build -d",
            "dep:log": "docker-compose -f docker-compose.yml up --build"
        },
        "devDependencies": {
            "dotenv": "^16.0.3",
            "nodemon": "^2.0.20",
            "ts-node": "^10.9.1",
            "typescript": "^4.9.5"
        },
        "dependencies": {
            "@sentry/node": "^7.37.1",
            "apollo-server": "^3.11.1",
            "bignumber.js": "^9.1.1",
            "cron": "^2.2.0",
            "ioredis": "^5.3.1",
            "mongodb": "^5.0.1",
            "telegraf": "^4.11.2",
            "@fastify/swagger": "^8.3.1",
            "@fastify/swagger-ui": "^1.8.0",
            "fastify": "^4.15.0",
            "web3": "^1.8.2"
        },
    });

    fs.writeFileSync(
        `${process.cwd()}/package.json`,
        JSON.stringify(newPackage, null, 2),
        'utf8'
    );
}