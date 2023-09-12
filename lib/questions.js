const { validate } = required("../utils/helpers");
const prompts = {
  user: [
    {
      type: "input",
      name: "name",
      message: "enter your name:",
      validate: (input) => validate(input, "name")
    },
    {
      type: "input",
      name: "username",
      message: "enter github username:",
      validate: (input) => validate(input, "username")
    },
    {
      type: "input",
      name: "email",
      message: "enter email address:",
      validate: (input) => validate(input, "email")
    },
  ],
  app: [
    {
      type: "input",
      name: "title",
      message: "enter app name:",
      validate: (input) => validate(input, "app name")
    },
    {
      type: "input",
      name: "liveurl",
      message: "enter live URL:",
    },
    {
      type: "input",
      name: "description",
      message: "enter description:",
      validate: (input) => validate(input, "description")
    },
    {
      type: "input",
      name: "features",
      message: "enter features",
    },
    {
      type: "checkbox",
      name: "languages",
      message: "select languages used:",
      choices: ["HTML", "CSS", "Javascript", "Ruby", "SQL", "GraphQL"],
    },
    {
      type: "confirm",
      name: "frameworks_used",
      message: "were any frameworks used?",
      default: true,
    },
    {
      type: "checkbox",
      name: "frameworks",
      message: "select frameworks:",
      choices: ["React", "Node", "Express", "Jest", "Ruby on Rails"],
      when: (answers) => answers.frameworks_used,
    },
    {
      type: "confirm",
      name: "libraries_used",
      message: "were any libraries used?",
      default: true,
    },
    {
      type: "checkbox",
      name: "libraries",
      message: "select libraries:",
      choices: [
        "bcrypt",
        "Handlebars",
        "inquirer",
        "jQuery",
        "Mongoose",
        "Redux",
        "Sequelize",
        "Webpack",
        "Other"
      ],
      when: (answers) => answers.libraries_used,
    },
    {
      type: "confirm",
      name: "database_used",
      message: "does this project use a database?",
      default: true,
    },
    {
      type: "list",
      name: "database",
      message: "select database:",
      choices: ["mongoDB", "mySQL", "postgresQL", "SQLite"],
      when: (answers) => answers.database_used,
    },
    {
      type: "input",
      name: "installation",
      message: "enter command line to install",
    },
    {
      type: "input",
      name: "test",
      message: "enter command line to test",
    },
    {
      type: "input",
      name: "usage",
      message: "enter command line to use",
    },
    {
      type: "list",
      name: "license",
      choices: ["Apache", "BSD", "GPL", "LGPL", "MIT", "Microsoft", "None"],
    },
  ],
};

module.exports = { prompts };
