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
    'github username:',
    'contributors:'
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
    console.log(`
    =================
    Add a New Project
    =================
    `);

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
            name: 'description',
            message: questions[1],
            validate: description => {
                if(description) {
                    return true;
                } else {
                    console.log('enter project description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: installation => {
                if(installation) {
                    return true;
                } else {
                    console.log('enter installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[3],
            validate: usage => {
                if(usage) {
                    return true;
                } else {
                    console.log('enter usage information.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: questions[4],
            validate: license => {
                if(license) {
                    return true;
                } else {
                    console.log('enter project license.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'badges',
            message: questions[5],
            validate: badges => {
                if(badges) {
                    return true;
                } else {
                    console.log('enter badges.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'features',
            message: questions[6],
            validate: features => {
                if(features) {
                    return true;
                } else {
                    console.log('enter project features.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: questions[7],
            validate: username => {
                if(username) {
                    return true;
                } else {
                    console.log('enter github username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: questions[8],
            validate: contributors => {
                if(contributors) {
                    return true;
                } else {
                    console.log('enter github contributors.');
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
