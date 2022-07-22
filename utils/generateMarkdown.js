// Function that returns a license badge based on which license is passed in
// If no license, returns an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `* [License](https://img.shields.io/badge/license-${license}-blue.svg)
    `;
  }
  return '';
}

// logic |  render installation link & section
function renderInstallationLink(installation) {
  if (installation !== '') {
    return `\n * [Installation](#installtion)\n`;
  } else {
    return '';
  }
}

// function renderInstallationSection(installation) {
//   if (installation !== '') {
//     return `\n * `
//   }
//   return '';
// }

// logic | render license link & section
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n * [License](#license)\n`;
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// logic  | render usage link & section
function renderUsageSection(usage) {
  if (usage !== '') {
    return `
    ## USAGE
    ${usage}
    `;
  }
  return '';
}

function renderContributingSection(contributing) {
  if (contributing === true) {
    return `
    ## CONTRIBUTORS
    ${contributing}
    `;
  } else {
    return '';
  }
}


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
  ## Installation

  Run the following command to install necessary dependencies:
  \`\`\`
  ${data.installation}
  \`\`\`

  ${renderUsageSection(data.usage)}
  ${renderLicenseSection(data.license)}
  ${renderContributingSection(data.contributing)}

  ## Tests
  Run the following command to run tests:
  \`\`\`
  ${data.test}
  \`\`\`

  ## Author
  ${data.name}
  * [Email](mailto:${data.email})
  * [GitHub](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
