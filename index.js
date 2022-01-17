// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = (projectName, githubName) => {
    return `
        Project: ${projectName}
        GitHub: ${githubName}
    `;
};

// TODO: Create an array of questions for user input
const questions = [
    'project title:',
    'project description:',
    'installation instructions:',
    'information usage:',
    'test instructions:',
    'github username:'
]
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        if(err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'readme generated.'
        });
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
