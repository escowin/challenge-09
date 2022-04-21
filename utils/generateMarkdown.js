// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if(!license){
  //   return " ";
  // } else if (license === "MIT") {
  //   return `![MIT](https://img.shields.io/badge/license-MIT-green)`;
  // } else if (license === "GNU") {
  //   return `[GNU](https://img.shields.io/badge/license-GNU-green)`;
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (!license) {
  //   return " ";
  // } else if (license === "MIT") {
  //   return `[MIT](https://opensource.org/licenses/MIT)`;
  // } else if (license === "GNU") {
  //   return `[GNU](https://www.gnu.org/licenses/licenses.en.html)`;
  // }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if (!license) {
  //   return " ";
  // } else if (license === "MIT") {
  //   return mitLicense;
  // } else if (license === "GNU") {
  //   return gnuLicense;
  // }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
