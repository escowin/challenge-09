// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
    {
      type: 'checkbox',
      name: 'languages',
      message: 'project language(s) used:',
      choices: ['HTML', 'CSS', 'JavaScript', 'ES6', 'Bootstrap', 'jQuery', 'Node.js', 'Express.js', 'GraphQL', 'Handlebars.js', 'MongoDB', 'MySQL', 'NoSQL', 'React.js', 'Redux'],
    },
    // reconfigure above: if JS/ES6 is selected, ask which frameworks/libraries were used (jQuery, Moment, etc.) using when
    {
      type: 'input',
      name: 'installation',
      message: 'enter command line installation instructions'
    },
    {
      type: 'list',
      name: 'license',
      choices: ['Apache', 'BSD', 'GPL', 'LGPL', 'MIT', 'Microsoft', 'None']
    },
    {
      type: 'input',
      name: 'usage',
      message: 'enter usage information'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'enter contributing guidelines'
    },
    {
      type: 'input',
      name: 'test',
      message: 'enter command line test instructions',
    }
]

// logic: write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log(`
        file saved to this directory:
      
        ./READMEtest.md

······································
·       readme-generator fin         ·
·····································`);
    }
  });
}

// logic: initialize app to user via CLI
function init() {
    console.log(`
·······································
·                                     ·
·        readme-generator v1.5        ·
·          © 2022 escowin             ·
·                                     ·
·······································
`);

    inquirer.prompt(questions).then((data) => {
        writeToFile("./READMEtest.md", data);
        console.log(`
        writing file...`);
    });
  }

// Function call to initialize app
init();
