function generateMarkdown(data) {
  // markdown template literal
  return `
# ${data.title}

## Description
[Repo](https://github.com/${data.username}/${data.title})
${renderLiveUrl(data.liveurl)}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Features]
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Author](#author)

## Installation
Run the following command to install necessary dependencies:
\`\`\`
$ ${data.installation}
\`\`\`

## Test
Run the following command to run tests:
\`\`\`
${data.test}
\`\`\`

## Usage
![mobile](./assets/images/small/${data.title}.jpg)

![tablet](./assets/images/medium/${data.title}.jpg)

![desktop](./assets/images/desktop/${data.title}.jpg)

## Credits
- Languages: ${data.languages.join(", ")}
### Third-party assets
${data.frameworks_used ? `- Frameworks: ${data.frameworks.join(", ")}` : ""}
${data.libraries_used ? `- Libraries: ${data.libraries.join(", ")}` : ""}
${data.database_used ? `- Database: ${data.database}` : ""}

${renderLicenseSection(data.license)}

## Features

## Author
### ${data.name}
- [Email](mailto:${data.email})
- [GitHub](https://github.com/${data.username})
`;
}

// render sections
// - title
function renderLiveUrl(liveurl) {
  if (liveurl !== "") {
    return `* [Live URL](${liveurl})`;
  }
  return "";
}

// - table of contents
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// - license
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

    This project is licensed under the [${license}](https://img.shields.io/badge/license-${license}-blue.svg) license.`;
  }
  return "";
}

module.exports = generateMarkdown;
