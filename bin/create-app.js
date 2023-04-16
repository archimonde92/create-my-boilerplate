#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
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
        fs.unlinkSync(path.join(appPath, 'package.json'));

        console.log('Build package.json ...')
        buildPackageJson()
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
      author: '',
      scripts: {
        start:
          'npm run clean && parcel serve public/index.html --dist-dir development -p 3000',
        build:
          'rimraf ./build && parcel build public/*.html --dist-dir build --public-url ./',
        test: 'jest',
        clean: 'rimraf ./development && rimraf ./.parcel-cache',
        prettify: 'npx prettier --write ./src/',
      },
      devDependencies: {
        '@parcel/transformer-sass': '^2.0.0-beta.2',
        '@testing-library/dom': '^7.30.3',
        '@testing-library/jest-dom': '^5.11.10',
        '@testing-library/react': '^11.2.6',
        autoprefixer: '^10.2.5',
        'babel-preset-react-app': '^10.0.0',
        jest: '^26.6.3',
        'jest-cli': '^26.6.3',
        parcel: '^2.0.0-beta.2',
        prettier: '2.2.1',
      },
      dependencies: {
        babel: '^6.23.0',
        'jest-styled-components': '^7.0.3',
        'normalize.css': '^8.0.1',
        'prop-types': '^15.7.2',
        react: '^17.0.2',
        'react-dom': '^17.0.2',
        'react-router-dom': '^5.2.0',
        rimraf: '^3.0.2',
        'styled-components': '^5.2.3',
      },
      postcss: {
        plugins: {
          autoprefixer: {
            overrideBrowserslist: ['> 1%', 'last 4 versions', 'ie >= 9'],
          },
        },
      },
    });
  
    fs.writeFileSync(
      `${process.cwd()}/package.json`,
      JSON.stringify(newPackage, null, 2),
      'utf8'
    );
  }