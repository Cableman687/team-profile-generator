const Employee = require("./Employee.class");

class Manager extends Employee {

    constructor(nameParam, idParam, emailParam, officeParam){
        // console.log("Manager Created!");

        //Parent Variables
        const name = nameParam;
        const id = idParam;
        const email = emailParam;

        super(name, id, email);

        this.managerName = nameParam;
        this.managerId = idParam;
        this.managerEmail = emailParam;
        this.managerOffice = officeParam;
    }
    
    //Not Required. Satisfied by prompt structure in prompts.js
    getRole(){
    return 'Manager';
    }
}

module.exports = Manager;