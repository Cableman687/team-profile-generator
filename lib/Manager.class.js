const Employee = require("./Employee.class");

class Manager extends Employee {

    constructor(nameParam, idParam, emailParam){
        // console.log("Manager Created!");

        //Parent Variables
        const name = nameParam;
        const id = idParam;
        const email = emailParam;

        super(name, id, email);

        this.nameParam = nameParam;
        this.idParam = idParam;
        this.emailParam = emailParam;

        //Engineer-specific Child Variables
        const officeNumber = "";
    }
    
    getRole(){
        // return Manager;
    }
}

module.exports = Manager;