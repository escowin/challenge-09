// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { generateMarkdown } = require("./utils/generateMarkdown");
const { prompts } = require("./lib/questions");
const { mockData } = require("./lib/mockData");

// runs welcome screen & inquirer prompts. the answers object is then passed as an argument for writeToFile.
function init() {
  let date = new Date().getFullYear();
  return Promise.resolve(
    console.log(`·················································
·                                               ·
·              readme-generator v1.6.1          ·
·            © ${date} edwin m. escobar            ·
·  https://github.com/escowin/readme-generator  ·
·                                               ·
·················································
`)
  );
}

function userPrompts() {
  console.log(`\n·  USER DETAILS                                 ·\n`)
  return inquirer.prompt(prompts.user);
}

function appPrompts(userData) {
  // let data = userData;
  // console.log(data);
  console.log(`\n·  APP DETAILS                                  ·\n`)
  inquirer.prompt(prompts.app).then(answers => console.log(answers));
}

// writes README file to dist directory with data plugged into markdown template literal
function writeToFile(fileName, data) {
  const path = "./dist/";
  fs.writeFile(`${path}${fileName}`, generateMarkdown(data), (err) => {
    err ? console.error(err) : console.log(`wrote file to ${path}${fileName}`);
  });
}

// call to initialize app
init()
  // .then(userPrompts)
  // .then(appPrompts)
  .then(() => appPrompts(mockData))
  // .then((answers) => writeToFile("README.md", answers))
  .catch((err) => console.log(err));
