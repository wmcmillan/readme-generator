//npm initialization
//install my dependencies- inquirer
//require all the dependencies I'll need- inquirer, fs
var inquirer = require("inquirer");
var fs = require("fs");
//write a README in a markdown file to generate a template
//then copy/paste that template
//function that will generate my readme template
function mdTemplate(userResponse) {
  return `# ${userResponse.title}
## Contents 
1. [ Description ](#description)
2. [ Installation ](#installation)
3. [ Usage ](#usage)
4. [ Contributors ](#contributing)
5. [ Tests ](#tests)
6. [ License ](#license)
7. [ Questions ](#questions)
<br>
<a name="intro"></a>
## 1. Description
${userResponse.description}
<a name="install"></a>
### 2. Installation
${userResponse.installation}
<a name="usage"></a>
### 3. Usage
${userResponse.usage}
<a name="contributing"></a>
### 4. Contributors
${userResponse.guidelines}
<a name="tests"></a>
### 5. Tests
${userResponse.testInstructions}
<a name="license"></a>
### 6. License
${userResponse.license}
<a name="questions"></a>;
### 7. If you have any questions direct them to...
${userResponse.username} + ${userResponse.repo}`;
}

//use inquirer to prompt users with questions
//create an array of questions to ask the user
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your github username?",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter a valid Github username.");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "repo",
      message: "What is the name of your Github repository?",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter a valid Github repository.");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter a valid project title.");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project.",
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("Please enter a valid project description.");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Any special installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message:
        "Any instructions or examples of the project to demonstrate usage?",
    },
    {
      type: "input",
      name: "guidelines",
      message:
        "Any guidelines on how other developers can contribute to your project?",
    },
    {
      type: "input",
      name: "testInstructions",
      message: "Any instructions for a test?",
    },
    {
      type: "input",
      name: "license",
      message: "What type of license are you issuing for the project?",
    },
  ])
  .then(function (response) {
    console.log(response);
    const mdCreate = mdTemplate(response);
    
        fs.writeFile("README.md", mdCreate, function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Wrote a README!");
          }
        });
  });


//use answers that come back from inquirer - pass those into my generate readme function

//write file using template generated from readme function
function writeToFile(fileName, data) {}

//function to initialize program
function init() {}

//function call to initialize program
init();
