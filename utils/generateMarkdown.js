// Function that returns a license badge based on which license is passed in
// If no license, returns an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `* [License](https://img.shields.io/badge/license-${license}-blue.svg)
    `;
  }
  return '';
}

// logic |  render table of contents links
function renderInstallationLink(installation) {
  if (installation !== '') {
    return `\n  * [Installation](#installtion)\n`;
  }
  return '';
}

function renderUsageLink(usage) {
  if (usage !== '') {
    return `\n  * [Usage](#usage)\n`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n  * [License](#license)\n`;
  }
  return '';
}

function renderContributingLink(contributing) {
  if (contributing !== '') {
    return `\n  * [Contributing](#contributing)\n`;
  }
  return '';
}

function renderTestLink(test) {
  if (test !== '') {
    return `\n  * [Test](#test)\n`;
  }
  return '';
}

// logic | render sections
function renderTableOfContents(table) {
  if (table === true) {
    return `
  ## TABLE OF CONTENTS
    ${renderInstallationLink(table.installation)}
    ${renderUsageLink(table.usage)}
    ${renderLicenseLink(table.license)}
    ${renderContributingLink(table.contributing)}
    ${renderTestLink(table.test)}
    
  * [Author](#author)
  `
  }
}

function renderInstallationSection(installation) {
  if (installation !== '') {
    return `## Installation

    Run the following command to install necessary dependencies:

    \`\`\`
    ${installation}
    \`\`\`
    `;
  }
  return '';
}

function renderUsageSection(usage) {
  if (usage !== '') {
    return `## USAGE
    ${usage}
    `;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return '';
}

function renderContributingSection(contributing) {
  if (contributing === true) {
    return `## Contributing
    ${contributing}
    `;
  }
  return '';
}

function renderTestSection(test) {
  if (test !== '') {
    return `## Tests
    Run the following command to run tests:
    \`\`\`
    ${test}
    \`\`\`
    `;
  }
  return '';
}

// Function generates markdown for README
function generateMarkdown(data) {
  // MARKDOWN FORMAT
  return `
  # ${data.title}
  * [Repo](https://github.com/${data.username}/${data.title})
  * [Live URL](${data.liveurl})
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ${renderTableOfContents(data.table)}
  ${renderInstallationSection(data.installation)}
  ${renderUsageSection(data.usage)}
  ${renderLicenseSection(data.license)}
  ${renderContributingSection(data.contributing)}
  ${renderTestSection(data.test)}
  ## Author
  ${data.name}
  * [Email](mailto:${data.email})
  * [GitHub](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
