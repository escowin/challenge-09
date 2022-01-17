// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'title:',
    'description:',
    'installation:',
    'usage:',
    'credits:',
    'license:',
    'badges:',
    'features:',
    'contributors:',
    'github username:'
]
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./${fileName}.md`, data, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'readme generated.'
            });            
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: title => {
                if(title) {
                    return true;
                } else {
                    console.log('enter project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: questions[1],
            validate: title => {
                if(title) {
                    return true;
                } else {
                    console.log('enter project description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: questions[2],
            validate: title => {
                if(title) {
                    return true;
                } else {
                    console.log('enter project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: questions[3],
            validate: title => {
                if(title) {
                    return true;
                } else {
                    console.log('enter project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: questions[4],
            validate: title => {
                if(title) {
                    return true;
                } else {
                    console.log('enter project name.');
                    return false;
                }
            }
        }
    ])
    .then(projectData => {
        return generateMarkdown(projectData)
    })
    .then(markdownData => {
        return writeToFile("READMEtest", markdownData)
    })
}

// Function call to initialize app
init();
