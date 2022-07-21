// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// to do: conditionally render usage, collabs, installation, etc. use if statements.

// user & project questions
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'enter name',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('enter your name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'username',
      message: 'enter github username',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('enter github username');
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

    // project inquiries
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
      name: 'liveurl',
      message: 'enter live URL',
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
    // confirm installation
    {
      type: 'confirm',
      name: 'confirmInstallation',
      message: 'does the project require installation?',
      default: true
    },
    {
      type: 'input',
      name: 'installation',
      message: 'enter installation instructions',
      when: ({ confirmInstallation }) => confirmInstallation
    },
    // confirm collaboration
    {
      type: 'confirm',
      name: 'confirmCollaboration',
      message: 'is the project a collaboration?',
      default: false
    },
    {
      type: 'input',
      name: 'collaboration',
      message: 'enter project collaborators',
      when: ({ confirmCollaboration }) => confirmCollaboration
    },
    // confirm license
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'does the project use an open source license?',
      default: false
    },
    {
      type: 'list',
      name: 'license',
      choices: ['Apache 2.0', 'BSD 2', 'BSD 3', 'GPL 2.0', 'GPL 3.0', 'LGPL 2.1', 'MIT', 'Microsoft Public'],
      when: ({ confirmLicense }) => confirmLicense
    },
    // confirm usage & contributing guidelines
    {
      type: 'confirm',
      name: 'confirmUsageAndContribution',
      message: 'include usage information and contributing guidelines?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'enter usage information',
      when: ({ confirmUsageAndContribution }) => confirmUsageAndContribution
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'enter contributing guidelines',
      when: ({ confirmUsageAndContribution }) => confirmUsageAndContribution
    },
    // confirm test
    {
      type: 'confirm',
      name: 'confirmTest',
      message: 'can tests be run on the project?',
      default: true
    },
    {
      type: 'input',
      name: 'test',
      message: 'enter test instructions',
      when: ({ confirmTest }) => confirmTest
    },
    // confirm table of contents
    {
      type: 'confirm',
      name: 'table',
      message: 'include table of contents?',
      default: true
    }
]

// logic: write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// logic: initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./READMEtest.md", data);
    });
  }

// Function call to initialize app
init();
