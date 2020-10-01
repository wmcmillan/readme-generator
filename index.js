//npm initialization
//install my dependencies- inquirer

//require all the dependencies I'll need- inquirer, fs
var inquirer = require("inquirer");
var fs = require("fs");
//create an array of questions to ask the user
const questions = [
    "What is your Github username?",
    "What is your project title?",
    "Describe your project.",
    "Any special installation instructions?",
    "Usage information?",
    "Contribution guidelines?",
    "Test instructions?"
];

//write a README in a markdown file to generate a template
    //then copy/paste that template

//function that will generate my readme template

//use inquirer to prompt users with questions

//use answers that come back from inquirer - pass those into my generate readme function

//write file using template generated from readme function
function writeToFile(fileName, data) {
    
}

//function to initialize program
function init() {

}

//function call to initialize program
init();