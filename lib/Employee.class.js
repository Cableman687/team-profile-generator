class Employee {
    constructor(name, id, email){
        // console.log("Employee Created!");

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return "";
    };

    getId(){
        return "";
    };

    getEmail(){
        return "";
    };

    //Superceded by role types in child class definitions
    getRole(){
    return 'Employee';
    };
    
}

module.exports = Employee;

