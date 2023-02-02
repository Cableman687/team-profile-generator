class Employee {
    constructor(name, id, email){
        // console.log("Employee Created!");

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    //Superceded by role types in child class definitions
    getRole(){
    return 'Employee';
    };
    
}

module.exports = Employee;

