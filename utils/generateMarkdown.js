function generateMarkdown(data) {
  return `
# ${data.title}

## Description
[Repo](https://github.com/${data.username}/${data.title}) ${renderDetail(
    data.liveurl,
    "liveurl"
  )}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Test](#test)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)${renderDetail(data.license, "licenseLink")}
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

![mobile](./assets/img/${data.title}-sm.jpg)

![tablet](./assets/img/${data.title}-md.jpg)

![desktop](./assets/img/${data.title}-lg.jpg)

## Features
${data.features}

## Credits
- Languages: ${data.languages.join(", ")}
${data.frameworks_used ? renderDetail(data.frameworks, "frameworks") : ""}
${data.libraries_used ? renderDetail(data.libraries, "libraries") : ""}
${data.database_used ? renderDetail(data.database, "database") : ""}
${renderDetail(data.license, "license")}
## Author
### ${data.name}
- [Email](mailto:${data.email})
- [GitHub](https://github.com/${data.username})
`;
}

// render details
function renderDetail(value, key) {
  let template = "";

  if (!value || !key || value === "None") {
    return template;
  }

  switch (key) {
    case "database":
      template = `- Database: ${value}`;
    case "libraries":
      template = `- Libraries: ${value.join(", ")}`;
      break;
    case "frameworks":
      template = `- Frameworks: ${value.join(", ")}`;
      break;
    case "license":
      template = `\n## License\nThis project is licensed under the [${value}](https://img.shields.io/badge/license-${value}-blue.svg) license.\n`;
      break;
    case "licenseLink":
      template = `\n- [License](#license)`;
      break;
    case "liveurl":
      template = `| [Live URL](${value})`;
      break;
    default:
      template = "";
  }
  return template;
}

module.exports = { generateMarkdown, renderDetail };
