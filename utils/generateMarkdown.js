function generateMarkdown(data) {
  const { user, app } = data
  return `
# ${app.title}

## Description
[Repo](https://github.com/${user.username}/${app.title}) ${renderDetail(
  app.liveurl,
    "liveurl"
  )}

${app.description}

## Table of Contents
- [Installation](#installation)
- [Test](#test)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)${renderDetail(app.license, "licenseLink")}
- [Author](#author)

## Installation
Run the following command to install necessary dependencies:
\`\`\`
$ ${app.installation}
\`\`\`

## Test
Run the following command to run tests:
\`\`\`
$ ${app.test}
\`\`\`

## Usage
Run the following command to run app:
\`\`\`
$ ${app.usage}
\`\`\`

![mobile](./assets/img/${app.title}-sm.jpg)

![tablet](./assets/img/${app.title}-md.jpg)

![desktop](./assets/img/${app.title}-lg.jpg)

## Features
${app.features}

## Credits
- Languages: ${app.languages.join(", ")}
${app.frameworks_used ? renderDetail(app.frameworks, "frameworks") : ""}
${app.libraries_used ? renderDetail(app.libraries, "libraries") : ""}
${app.database_used ? renderDetail(app.database, "database") : ""}
${renderDetail(app.license, "license")}
## Author
### ${user.name}
- [Email](mailto:${user.email})
- [GitHub](https://github.com/${user.username})
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
