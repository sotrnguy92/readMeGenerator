const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown.js')
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your First and Last Name'
    },
    {
        type: 'input',
        name: 'year',
        message: 'What is the year?'
    }

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
