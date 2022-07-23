// logic |  render Live URL & License Badge lines
function renderLiveUrl(liveurl) {
  if (liveurl !== '') {
    return `* [Live URL](${liveurl})`
  }
  return '';
}

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `* [License](https://img.shields.io/badge/license-${license}-blue.svg)
    `;
  }
  return '';
}

// logic |  render table of contents links, removed (learn to remove empty return strings)
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// logic | render sections, removed (see above)

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

    This project is licensed under the ${license} license.`;
  }
  return '';
}

// Function generates markdown for README
function generateMarkdown(data) {
  // MARKDOWN FORMAT
  return `
# ${data.title}

  * [Repo](https://github.com/${data.username}/${data.title})

  ${renderLiveUrl(data.liveurl)}
  ${renderLicenseBadge(data.license)}
## Description

  ${data.description}

## Languages

  ${data.languages.join(', ')}

## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [License](#license)

  * [Contributing](#contributing)

  * [Test](#test)

  * [Author](#author)

## Installation

  Run the following command to install necessary dependencies:

  \`\`\`
  ${data.installation}
  \`\`\`

## Usage

  ${data.usage}

${renderLicenseSection(data.license)}
## Contributing

  ${data.contributing}

## Test
  
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
