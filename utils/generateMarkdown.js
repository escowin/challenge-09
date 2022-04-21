// Function that returns a license badge based on which license is passed in
// If no license, returns an empty string
function renderLicenseBadge(license) {
    // streamline if statement: 
    // if license DOES NOT equal N/A, link is returned. Licenses follow a similar BASE + license + COLOR.svg naming convention.
  if (license !== 'N/A') {
    return `https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  // 
  return '';
}

// Function returns the license link
// If no license, returns an empty string
function renderLicenseLink(license) {
  if (license !== 'N/A') {
    return `\n  * [License](#LICENSE)\n`;
  }
  return '';
}

// Function returns the license section of README
// If no license, returns an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `## LICENSE
    This application is covered under ${license}.`;
  }
  return '';
}

// Function generates markdown for README
function generateMarkdown(data) {
  // MARKDOWN FORMAT
  return `
  # ${data.title}
  Repo | https://github.com/${data.username}/${data.title}
  ${renderLicenseBadge(data.license)}

  ## DESCRIPTION
  ${data.description}
  
  ## TABLE OF CONTENTS
  * [Installation](#INSTALLATION)

  * [Usage](#USAGE)
  ${renderLicenseLink(data.license)}
  * [Contributing](#CONTRIBUTING)

  * [Tests](#TESTS)

  * [Questions](#QUESTIONS)
  
  ## INSTALLATION
  ${data.installation}

  ## USAGE
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## CONTRIBUTING
  ${data.contributing}

  ## TESTS
  ${data.test}

  ## QUESTIONS (CONTACT)
  * E-mail | ${data.email}
  * GitHub | https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
