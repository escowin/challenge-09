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
- [Code](#code)
- [Test](#test)
- [Screenshots](#screenshots)
${renderLicenseLink(data.license)}
- [Author](#author)

## Installation
Run the following command to install necessary dependencies:
\`\`\`
$ ${data.installation}
\`\`\`

## Code
- Languages: ${data.languages.join(", ")}
${data.frameworks_used ? `- Frameworks: ${data.frameworks.join(", ")}` : ""}
${data.libraries_used ? `- Libraries: ${data.libraries.join(", ")}` : ""}
${data.database_used ? `- Database: ${data.database.join(", ")}` : ""}

## Test
Run the following command to run tests:
\`\`\`
${data.test}
\`\`\`

## Screenshots
![mobile](insert relative path)

![tablet](insert relative path)

![desktop](insert relative path)

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
