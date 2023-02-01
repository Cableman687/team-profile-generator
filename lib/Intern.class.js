const Employee = require("./Employee.class");

class Intern extends Employee {

    constructor(nameParam, idParam, emailParam){
        // console.log("Intern Created!");

        //Parent Variables
        const name = nameParam;
        const id = idParam;
        const email = emailParam;

        super(name, id, email);

        this.nameParam = nameParam;
        this.idParam = idParam;
        this.emailParam = emailParam;

        //Intern-Specific Child Variables
        const school = "";

    }

    getRole(){
        // return Intern;
    }

    getSchool(){

    }
    
}

module.exports = Intern;