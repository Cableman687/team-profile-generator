const Engineer = require('../lib/Engineer.class');

describe("Engineer", () => {
    describe("Initialisation", () => {
        it("Should create a child-class with  'engineerName', 'engineerId', 'engineerEmail', 'engineerGithub' properties, and methods 'getRole()' and 'getGithub' when called with the 'new' keyword", () => {
            //Arrange
            const nameParam = "Henry";
            const idParam = "7";
            const emailParam = "Henry@gmail.com";
            const githubParam = "TestProfile";

            //Act
            const engineer = new Engineer(nameParam, idParam, emailParam, githubParam);

            //Assert
            expect(engineer.engineerName).toEqual(nameParam);
            expect(engineer.engineerId).toEqual(idParam);
            expect(engineer.engineerEmail).toEqual(emailParam);
            expect(engineer.engineerGithub).toEqual(githubParam);
            expect(engineer.getRole()).toEqual('Engineer');
            expect(engineer.getGithub()).toBeNull();

        })
    })
})