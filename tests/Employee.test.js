const Employee = require('../lib/Employee.class');

describe("Employee", () => {
    describe("Initialisation", () => {
        it("Should create a child-class  with  'name', 'id', 'email' properties, and 'getName()', 'getId', 'getEmail' and 'getRole' properties when called with the 'new' keyword", () => {
            //Arrange
            const nameParam = "Henry";
            const idParam = "7";
            const emailParam = "Henry@gmail.com"

            //Act
            const employee = new Employee(nameParam, idParam, emailParam);

            //Assert
            expect(employee.name).toEqual(nameParam);
            expect(employee.id).toEqual(idParam);
            expect(employee.email).toEqual(emailParam);

            expect(employee.getRole()).toBe('Employee');
            expect(employee.getName()).toEqual(nameParam);
            expect(employee.getId()).toEqual(idParam);
            expect(employee.getEmail()).toEqual(emailParam);
            


        })
    })
})