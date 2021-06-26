// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [

  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide your project description",
    name: "description",
  },
  {
    type: "input",
    message: "Are there any Depedencies?",
    name: "depedencies",
  },
  {
    type: "input",
    message: "Please provide installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage of your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "Did anyone contribute to your project?",
    name: "contributor_name",
  },
  {
    type: "input",
    message: "Provide contributor's github username",
    name: "contributor_github",
  },
  {
    type: "input",
    message: "Provide contributor's email address",
    name: "contributor_email",
    validate: (email) => {
      isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      if (isValid) {
        return true;
      } else {
        console.log("Please enter a valid email")
        return false;
      }
    }
  },
  {
    type: "input",
    message: "Provide instructions to run tests",
    name: "tests",
  },
  {
    type: "rawlist",
    message: "Select an appropriate license for your project",
    name: "license",
    choices: ["Apache", "MPL", "MIT"],
  },
  {
    type: "input",
    message: "Provide your name for copy right",
    name: "copy_right_name",
  },
];

function showQuestions() {
  inquirer
    .prompt(questions)
    .then((response) => {
      // call writeToFile function with response data
      console.log(response);
      writeToFile("./files/README.md", { ...response });
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // convert data into html string for readme file
  let markDown = generateMarkdown(data);
  // use fs to write readme file
  fs.writeFileSync(path.join(process.cwd(), fileName), markDown);
}

// TODO: Create a function to initialize app
function init() {
  showQuestions();
}

// Function call to initialize app
init();
