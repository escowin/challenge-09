// Function that returns a license badge based on which license is passed in
// If no license, returns an empty string
function renderLicenseBadge(license) {
    // streamline if statement: 
    // if license DOES NOT equal N/A, link is returned. Licenses follow a similar BASE + license + COLOR.svg naming convention.
  if (license !== 'N/A') {
    return `* [License](https://img.shields.io/badge/license-${license}-blue.svg)
    `;
  }
  return '';
}

// Function returns the license link
// If no license, returns an empty string
function renderLicenseLink(license) {
  if (license !== 'N/A') {
    return `\n  * [License](#license)\n`;
  } else {
    return '';
  }
}

// Function returns the license section of README
// If no license, returns an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `
    ## LICENSE
    ${license}.
    `;
  }
  return '';
}

function renderTableOfContents(table) {
  if (table === true) {
    return `
  ## TABLE OF CONTENTS
  * [Installation](#installation)

  * [Usage](#usage)
  ${renderLicenseLink()}
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
  ## INSTALLATION
  ${data.installation}

  ## USAGE
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## CONTRIBUTING
  ${data.contributing}

  ## TESTS  
  ${data.test}

  ## Author
  ${data.name}
  * [Email](mailto:${data.email})
  * [GitHub](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
