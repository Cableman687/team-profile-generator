// Team Member Card Generation
async function generateCard(resultArr){

  var managerOutput = [];
  var engineerOutput = [];
  var internOutput = [];


  console.log("generateCard fired!");

  resultArr.forEach((objectArr) => {
    objectArr.forEach((object) => {

      var keys = Object.keys(object);
      // console.log(keys);

      if(keys[3] == "managerName"){
        managerOutput.push(generateManager(object));

      } else if (keys[3] == "engineerName"){
        engineerOutput.push(generateEngineer(object));

      } else if (keys[3] == "internName"){
        internOutput.push(generateIntern(object));

      } else {
        console.log("Card Generation Failure!")
      }
    })
  }) 

  // Generate a card for each employee type using template literals

  function generateManager(object){
    return `
    <section class="flex-row align-top flex-start bg-light ">
    <div class="flex-column p-5 col">
      <div id="result-card">
        <h2 id="name">${object.managerName}</h2>
        <h3 id="role">Manager</h3>
        <ul id="infoList">
          <li id="id">${object.managerId}</li>
          <li id="email">${object.managerEmail}</li>
          <li id="officeNumber">${object.managerOffice}</li>
        </ul>
      </div>  
    </div>     
  </section>
  `
  }

  function generateEngineer(object){
    return `
    <section class="flex-row align-top flex-start bg-light ">
    <div class="flex-column p-5 col">
      <div id="result-card">
        <h2 id="name">${object.engineerName}</h2>
        <h3 id="role">Engineer</h3>
        <ul id="infoList">
          <li id="id">${object.engineerId}</li>
          <li id="email">${object.engineerEmail}</li>
          <li id="Github">https://github.com/${object.engineerGithub}</li>
        </ul>
      </div>  
    </div>     
  </section>
  `
  }

  function generateIntern(object){
    return `
    <section class="flex-row align-top flex-start bg-light ">
    <div class="flex-column p-5 col">
      <div id="result-card">
        <h2 id="name">${object.internName}</h2>
        <h3 id="role">Intern</h3>
        <ul id="infoList">
          <li id="id">${object.internId}</li>
          <li id="email">${object.internEmail}</li>
          <li id="School">${object.internSchool}</li>
        </ul>
      </div>  
    </div>     
  </section>
  `
  }

  // And return the cards as a card array

  var masterOutput = `
  ${managerOutput}
  ${engineerOutput}
  ${internOutput}
  `

  return masterOutput;

    
}

module.exports = {generateCard};