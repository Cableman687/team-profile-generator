const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const generateCard = require('./src/generateCard');

//Include Classes
const Engineer = require("./lib/Engineer.class");
const Intern = require("./lib/Intern.class");
const Manager = require("./lib/Manager.class");

//Include Prompts
const prompts = require("./src/prompts");

const engineer = new Engineer();
const intern = new Intern();
const manager = new Manager();

engineer;
intern;
manager;


//-------------------------------Master Prompts / Request Team Details------------------------------------


let teamResponse;
let managerResponse;
let engineerResponse;
let internResponse;

const managerArray = [];
const engineerArray = [];
const internArray = [];

async function typeAsk(){

    // Request team member type
    teamResponse = await prompts.teamPrompts();

    if(teamResponse.teamType.teamType == 'Engineer'){
        //If response is 'engineer', ask the engineer-specific prompts
        console.log("Engineer Called!")
        engineerResponse = await prompts.engineerPrompts();

        engineerArray.push(engineerResponse);

        typeAsk();
        // return engineerResponse;
        
    } else if (teamResponse.teamType.teamType == 'Intern') {
        //If response is 'intern', ask the intern-specific prompts
        console.log("Intern Called")
        internResponse =  await prompts.internPrompts();

        internArray.push(internResponse);

        typeAsk();
        // return internResponse;
        

    } else if (teamResponse.teamType.teamType == 'I dont want to add any more team members'){
        // If the user does not want to add any more answers, return the results of the user entries.
        console.log("Entries Finished!");

        console.log([
            managerArray,
            engineerArray,
            internArray,
        ])

        const promptResult = [
            managerArray,
            engineerArray,
            internArray,
        ]

        const cardOutput = await generateCard.generateCard(promptResult);

        const htmlOutput = await generateHTML.generateHTML(cardOutput);

        writeToFile(htmlOutput);
   
    } 
}

 
async function masterPrompts() {
    console.log("MasterPrompts Fired!");

    // Collect manager info
    managerResponse = await prompts.managerPrompts();
    managerArray.push(managerResponse)
    // Collect Remaining Info
    let typeAnswer = await typeAsk();

    return typeAnswer;


}

//-----------------------------------Write to File-----------------------------------

async function writeToFile(data){
    fs.writeFile('index.html', data, (err) => 
    err ? console.error(err) : console.log("Success!"))
   }


//-----------------------------------Initiate Application-----------------------------------

async function init(){
    console.log("Init fired!");

    // Run all prompts in correct sequence
    masterPrompts();


}

init();










