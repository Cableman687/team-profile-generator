const Employee = require("./Employee.class");

class Intern extends Employee {

    constructor(nameParam, idParam, emailParam, schoolParam){
        // console.log("Intern Created!");

        //Parent Variables
        const name = nameParam;
        const id = idParam;
        const email = emailParam;

        super(name, id, email);

        this.internName = nameParam;
        this.internId = idParam;
        this.internEmail = emailParam;
        this.internSchool = schoolParam;

    }

    //Not Required. Satisfied by prompt structure in prompts.js
    getRole(){
        return 'Intern';
    }

    //Not Required. Satisfied by prompt structure in prompts.js
    getSchool(){
        return this.internSchool;
    }
    
}

module.exports = Intern;