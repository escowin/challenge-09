// TODO: Include packages needed for this application
const generateReadMe = (projectName, githubName) => {
    return `
        Project: ${projectName}
        GitHub: ${githubName}
    `;
};
console.log(generateReadMe('esco', 'escowin'));



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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
