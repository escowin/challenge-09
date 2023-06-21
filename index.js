// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { questions } = require("./lib/questions");

// runs welcome screen & inquirer prompts. the answers object is then passed as an argument for writeToFile.
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

// writes README file to dist directory with data plugged into markdown template literal
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

// call to initialize app
init();