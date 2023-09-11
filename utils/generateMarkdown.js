function generateMarkdown(data) {
  // markdown template literal
  return `
# ${data.title}

## Description
[Repo](https://github.com/${data.username}/${data.title}) ${renderLiveUrl(data.liveurl)}
${data.description}

## Table of Contents
- [Installation](#installation)
- [Test](#test)
- [Usage](#usage)
- [Features](#features)
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
$ ${data.test}
\`\`\`

## Usage
Run the following command to run app:
\`\`\`
$ ${data.usage}
\`\`\`

![mobile](./assets/images/small/${data.title}.jpg)

![tablet](./assets/images/medium/${data.title}.jpg)

![desktop](./assets/images/large/${data.title}.jpg)

## Features
${data.features}

## Credits
- Languages: ${data.languages.join(", ")}
${data.frameworks_used ? `- Frameworks: ${data.frameworks.join(", ")}` : ""}
${data.libraries_used ? `- Libraries: ${data.libraries.join(", ")}` : ""}
${data.database_used ? `- Database: ${data.database}` : ""}

${renderLicenseSection(data.license)}

## Author
### ${data.name}
- [Email](mailto:${data.email})
- [GitHub](https://github.com/${data.username})
`;
}

// render sections
// - title
function renderLiveUrl(liveurl) {
  return (liveurl !== "") ? `| [Live URL](${liveurl})` : ""
}

// - table of contents
function renderLicenseLink(license) {
  return (license !== "None") ?  `- [License](#license)`: "";
}

// - license
function renderLicenseSection(license) {
  return (license !== "None") ? `## License
This project is licensed under the [${license}](https://img.shields.io/badge/license-${license}-blue.svg) license.`
  : ""
}

function renderDetail(value, key) {
  if (!value || !key) {
    console.error("missing parameters")
    return ""
  }

  let template = ""
  switch (key) {
    case "liveurl":
      template = `| [Live URL](${value})`
      break;
    default:
      template = ""
  }
  return template
}

module.exports = {generateMarkdown, renderDetail};
