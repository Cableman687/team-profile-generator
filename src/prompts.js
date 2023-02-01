const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require("./utils/generateMarkdown");

//-----------------------------Team Prompt-------------------------------------

// A function containing the team composition prompt
async function teamPrompts() {

    let teamData;
    
    await inquirer.prompt([

        {
            type: 'list',
            name: 'teamType',
            message: 'What type of team member would you like to add? Please select from the below: ',
            choices: [
                'I dont want to add any more team members',
                'Engineer',
                'Intern',
            ],
            default: 'I dont want to add any more team members'     
        },
    ])
    .then((teamType) => {

        const data = {
            teamType,
        }

        teamData = data;

        // const final = generateMarkdown(data);
        // writeToFile(final);
    }

    
)
return Promise.resolve(teamData);
}

//-----------------------------Manager Prompts-------------------------------------

// A function containing manager-specific prompts
async function managerPrompts() {

    let managerData;
    
    await inquirer.prompt([
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
            // validate: function(email)
            // {
            //     // Regex mail check (return true if valid mail)
            //     return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            // }
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "managerOffice",
        },
    ])
    .then(({managerName, managerId, managerEmail, managerOffice}) => {

        const data = {
            managerName,
            managerId,
            managerEmail,
            managerOffice,
        }

        managerData = data;
        

        // const final = generateMarkdown(data);
        // writeToFile(final);
    }

    

    
)
return Promise.resolve(managerData);
}



//-----------------------------Engineer Prompts-------------------------------------

// A function containing engineer-specific prompts
async function engineerPrompts() {

    let engineerData;
    
    await inquirer.prompt([
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

        engineerData = data;

        

        // const final = generateMarkdown(data);
        // writeToFile(final);
    }
)
return Promise.resolve(engineerData);
}

//-----------------------------Intern Prompts-------------------------------------

// A function containing intern-specific prompts
async function internPrompts() {

    let internData;
    
    await inquirer.prompt([
        {
            type: "input",
            message: "What is your interns name?",
            name: "internName",
        },
        {
            type: "input",
            message: "What is your interns id?",
            name: "internId",
        },
        {
            type: "input",
            message: "What is your interns email?",
            name: "internEmail",
        },
        {
            type: "input",
            message: "What is your interns School?",
            name: "internSchool",
        },
    ])
    .then(({internName, internId, internEmail, internSchool,}) => {

        const data = {
            internName,
            internId,
            internEmail,
            internSchool,
        }

        internData = data;

        

        // const final = generateMarkdown(data);
        // writeToFile(final);
    }
)
return Promise.resolve(internData);
}



//Exports
module.exports = {teamPrompts,managerPrompts, engineerPrompts, internPrompts};

