// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// questions about the user & application
const questions = [
  // - user
  {
    type: "input",
    name: "name",
    message: "enter your name",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("enter your name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "username",
    message: "enter github username",
    validate: (input) => {
      if (!input) {
        console.log("username required");
        return false;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "enter email address",
    validate: (input) => {
      if (!input) {
        console.log("email address required");
        return false;
      }
      return true;
    },
  },

  // - application
  {
    type: "input",
    name: "title",
    message: "enter application name",
    validate: (input) => {
      if (!input) {
        console.log("application name required");
        return false;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "liveurl",
    message: "enter live URL",
  },
  {
    type: "input",
    name: "description",
    message: "enter application description",
    validate: (input) => {
      if (!input) {
        console.log("application description required");
        return false;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "features",
    message: "enter features of this application",
  },
  {
    type: "checkbox",
    name: "languages",
    message: "select project languages:",
    choices: ["HTML", "CSS", "Javascript", "Ruby", "SQL"],
  },
  {
    type: "confirm",
    name: "frameworks_used",
    message: "were any frameworks used?",
    default: true,
  },
  {
    type: "checkbox",
    name: "frameworks",
    message: "select frameworks:",
    choices: ["React", "Node", "Express", "Jest", "Ruby on Rails"],
    when: (answers) => answers.frameworks_used,
  },
  {
    type: "confirm",
    name: "libraries_used",
    message: "were any libraries used?",
    default: true,
  },
  {
    type: "checkbox",
    name: "libraries",
    message: "select libraries:",
    choices: [
      "Bootstrap",
      "bcrypt",
      "Handlebars",
      "inquirer",
      "jQuery",
      "Mongoose",
      "Redux",
      "Sequelize",
      "Webpack",
    ],
    when: (answers) => answers.libraries_used,
  },
  {
    type: "confirm",
    name: "database_used",
    message: "does this project use a database?",
    default: true,
  },
  {
    type: "list",
    name: "database",
    message: "select database:",
    choices: ["graphQL", "mongoDB", "mySQL", "postgresQL", "SQLite"],
    when: (answers) => answers.database_used,
  },
  {
    type: "input",
    name: "installation",
    message: "enter command line to install",
  },
  {
    type: "input",
    name: "test",
    message: "enter command line to test",
  },
  {
    type: "input",
    name: "usage",
    message: "enter command line to use",
  },
  {
    type: "list",
    name: "license",
    choices: ["Apache", "BSD", "GPL", "LGPL", "MIT", "Microsoft", "None"],
  },
];

// logic: initialize app to user via CLI
function init() {
  let date = new Date().getFullYear();

  console.log(`
·················································
·                                               ·
·              readme-generator v1.6            ·
·            © ${date} edwin m. escobar            ·
·  https://github.com/escowin/readme-generator  ·
·                                               ·
·················································
`);

  inquirer
    .prompt(questions)
    .then((answers) => writeToFile("README.md", answers));
}

// logic: write README file
function writeToFile(fileName, data) {
  const path = "./dist/";
  fs.writeFile(`${path}${fileName}`, generateMarkdown(data), (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(`wrote file to ${path}${fileName}`);
    }
  });
}

// Function call to initialize app
init();