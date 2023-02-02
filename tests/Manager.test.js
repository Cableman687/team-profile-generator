const Manager = require('../lib/Manager.class');

describe("Manager", () => {
    describe("Initialisation", () => {
        it("Should create a child-class with  'managerName', 'managerId', 'managerEmail', 'managerOffice; properties, and method 'getRole()' when called with the 'new' keyword", () => {
            //Arrange
            const nameParam = "Henry";
            const idParam = "7";
            const emailParam = "Henry@gmail.com";
            const officeParam = "3";

            //Act
            const manager = new Manager(nameParam, idParam, emailParam, officeParam);

            //Assert
            expect(manager.managerName).toEqual(nameParam);
            expect(manager.managerId).toEqual(idParam);
            expect(manager.managerEmail).toEqual(emailParam);
            expect(manager.managerOffice).toEqual(officeParam);
            expect(manager.getRole()).toBe('Manager');

        })
    })
})