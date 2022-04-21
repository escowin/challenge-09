// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// QUESTIONS ARRAY
const questions = [
    // USER-BASED
    {
        type: 'input',
        name: 'github',
        message: 'enter github username',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('enter username');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter email address',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('enter email');
              return false;
            }
          }
    },

    // PROJECT-BASED
    {
        type: 'input',
        name: 'title',
        message: 'enter project title',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('enter project title');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'description',
        message: 'enter project description',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('enter description');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'enter project installation instructions'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'enter project collaborators (if applicable) '
    },
    {
        // 2021 TOP LICENSES
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'GPL 2.0', 'LGPL 2.1', 'BSD 3', 'BSD 2', 'Microsoft Public', 'Eclipse 1.0', 'N/A']
    },

    {
        type: 'input',
        name: 'usage',
        message: 'enter usage information'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'enter future contributions guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'enter test instructions'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs pu
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./READMEtest.md", data);
    });
  }

// Function call to initialize app
init();
