const Intern = require('../lib/Intern.class');

describe("Intern", () => {
    describe("Initialisation", () => {
        it("Should create a child-class with  'internName', 'internId', 'internEmail', 'internSchool' properties, and methods 'getRole()' and 'getSchool()' when called with the 'new' keyword", () => {
            //Arrange
            const nameParam = "Henry";
            const idParam = "7";
            const emailParam = "Henry@gmail.com";
            const schoolParam = "Glencoe College";

            //Act
            const intern = new Intern(nameParam, idParam, emailParam, schoolParam);

            //Assert
            expect(intern.internName).toEqual(nameParam);
            expect(intern.internId).toEqual(idParam);
            expect(intern.internEmail).toEqual(emailParam);
            expect(intern.internSchool).toEqual(schoolParam);

            expect(intern.getRole()).toBe('Intern');
            expect(intern.getSchool()).toEqual(schoolParam);

        })
    })
})
