const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown.js')
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your First and Last Name?'
    },
    {
        type: 'input',
        name: 'year',
        message: 'What is the year?'
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'what command should be used to install dependencies? Default is:',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this repo being used? Default is:',
        default: 'Run npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should I use to test? Default is:',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will this project have?',
        choices: ['MIT','Mozilla Public License 2.0', 'Apache license 2.0', 'Do What The F*ck You Want To Public License', 'BSD 3-Clause license', 'GNU General Public License version 3']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does user need to know about contributing? Default is:',
        default: 'Make a pull request'
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw  err;
    })
}

function init() {
    inquirer
        .prompt(questions)
        .then(async answers => {
            const markdown = await generateMD(answers);
            writeToFile('generatedREADME.md', markdown)
        })
}

init();
