const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require("./utils/generateMarkdown");

//-----------------------------Team Prompt-------------------------------------

// A function containing the team composition prompt
function teamPrompt() {
    
    inquirer.prompt([

        {
            type: 'list',
            name: 'teamType',
            message: 'What type of team member would you like to add? Please select from the below: ',
            choices: [
                'Engineer',
                'Intern',
                'I dont want to add any more team members'
            ],
            default: 'I dont want to add any more team members'     
        },
    ])
    .then((teamType) => {

        const data = {
            teamType,
        }

        // const final = generateMarkdown(data);
        // writeToFile(final);
    }
)}

//-----------------------------Manager Prompts-------------------------------------

// A function containing manager-specific prompts
function managerPrompts() {
    
    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "managerId",
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "managerOffice",
        },
        {
            type: 'list',
            name: 'teamType',
            message: 'What type of team memeber would you like to add? Please select from the below: ',
            choices: [
                'Engineer',
                'Intern',
                'I dont want to add any more team members'
            ],
            default: 'I dont want to add any more team members'     
        },
    ])
    .then(({managerName, managerId, managerEmail, managerOffice, teamType}) => {

        const data = {
            managerName,
            managerId,
            managerEmail,
            managerOffice,
            teamType,
        }

        // const final = generateMarkdown(data);
        // writeToFile(final);
    }
)}

//-----------------------------Engineer Prompts-------------------------------------

// A function containing engineer-specific prompts
function engineerPrompts() {
    
    inquirer.prompt([
        {
            type: "input",
            message: "What is your engineers name?",
            name: "engineerName",
        },
        {
            type: "input",
            message: "What is your engineers id?",
            name: "engineerId",
        },
        {
            type: "input",
            message: "What is your engineers email?",
            name: "engineerEmail",
        },
        {
            type: "input",
            message: "What is your engineers Github username?",
            name: "engineerGithub",
        },
    ])
    .then(({engineerName, engineerId, engineerEmail, engineerGithub}) => {

        const data = {
            engineerName,
            engineerId,
            engineerEmail,
            engineerGithub
        }

        // const final = generateMarkdown(data);
        // writeToFile(final);
    }
)}

//-----------------------------Intern Prompts-------------------------------------

// A function containing intern-specific prompts
function InternPrompts() {
    
    inquirer.prompt([
        {
            type: "input",
            message: "What is your interns name?",
            name: "InternName",
        },
        {
            type: "input",
            message: "What is your interns id?",
            name: "InternId",
        },
        {
            type: "input",
            message: "What is your interns email?",
            name: "InternEmail",
        },
        {
            type: "input",
            message: "What is your interns School?",
            name: "InternSchool",
        },
    ])
    .then(({InternName, InternId, InternEmail, InternGithub}) => {

        const data = {
            InternName,
            InternId,
            InternEmail,
            InternGithub
        }

        // const final = generateMarkdown(data);
        // writeToFile(final);
    }
)}