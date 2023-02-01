const Employee = require("./Employee.class");

class Engineer extends Employee {

    constructor(nameParam, idParam, emailParam, githubParam){
        // console.log("Engineer Created!");

        //Parent Variables
        const name = nameParam;
        const id = idParam;
        const email = emailParam;

        super(name, id, email);

        this.engineerName = nameParam;
        this.engineerId = idParam;
        this.engineerEmail = emailParam;
        this.engineerGithub = githubParam

    }

    //Not Required. Satisfied by prompt structure in prompts.js
    getRole(){
    return 'Engineer';
    }

    //Not Required. Satisfied by prompt structure in prompts.js
    getGithub(){

    }

}

module.exports = Engineer;

