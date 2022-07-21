// Function that returns a license badge based on which license is passed in
// If no license, returns an empty string
function renderLicenseBadge(license) {
  if (license !== 'N/A') {
    return `* [License](https://img.shields.io/badge/license-${license}-blue.svg)
    `;
  }
  return '';
}

// logic |  rendering ToC links
function renderInstallationLink(installation) {
  if (installation === true) {
    return `\n * [Installation](#installtion)\n`;
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license !== 'N/A') {
    return `\n * [License](#license)\n`;
  } else {
    return '';
  }
}

// logic | render sections below ToC
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `
    ## LICENSE
    ${license}.
    `;
  }
  return '';
}

function renderUsageSection(usage) {
  if (usage === true) {
    return `
    ## USAGE
    ${usage}
    `;
  } else {
    return '';
  }
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
  * [Usage](#usage)
  ${renderLicenseLink(table.license)}
  * [Contributing](#contributing)

  * [Tests](#tests)

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
