const Employee = require("./Employee.class");

class Engineer extends Employee {

    constructor(nameParam, idParam, emailParam){
        // console.log("Engineer Created!");

        //Parent Variables
        const name = nameParam;
        const id = idParam;
        const email = emailParam;

        super(name, id, email);

        this.nameParam = nameParam;
        this.idParam = idParam;
        this.emailParam = emailParam;

        //Engineer-specific Child Variables
        const github = "";

    }

    getRole(){
        // return Engineer;
    }

    getGithub(){

    }

}

module.exports = Engineer;

