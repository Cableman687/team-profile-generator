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

    <div id="result-card" class="flex-column p-4 card display-flex m-4">
      <h2 id="name" class=".card-header">${object.managerName}</h2>
      <h3 id="role">Manager <i class="fa fa-coffee"></i></h3>         
      <h4 id="id" class="body-card">ID: ${object.managerId}</h4>
      <h4 id="email" class="body-card">Email: <a href="mailto:${object.managerEmail}">${object.managerEmail}</a></h4>
      <h4 id="officeNumber" class="body-card">Office Number: ${object.managerOffice}</h4>         
    </div>

  `
  }

  function generateEngineer(object){
    return `

    <div id="result-card" class="flex-column p-4 card display-flex m-4">
      <h2 id="name">${object.engineerName}</h2>
      <h3 id="role">Engineer <i class="fa-solid fa-glasses"></i></i></h3>
      <h4 id="id" class="body-card">ID: ${object.engineerId}</h4>
      <h4 id="email" class="body-card">Email: <a href="mailto:${object.engineerEmail}">${object.engineerEmail}</a></h4>
      <h4 id="Github" class="body-card">Github: <a href="https://github.com/${object.engineerGithub}">https://github.com/${object.engineerGithub}</a></h4>
    </div> 

  `
  }

  function generateIntern(object){
    return `

    <div id="result-card" class="flex-column p-4 card display-flex m-4">  
      <h2 id="name">${object.internName}</h2>
      <h3 id="role">Intern <i class="fa-solid fa-user-graduate"></i></h3>
      <h4 id="id" class="body-card">ID: ${object.internId}</h4>
      <h4 id="email" class="body-card">Email: <a href="mailto:${object.internEmail}">${object.internEmail}</a></h4>
      <h4 id="School" class="body-card">School: ${object.internSchool}</h4>
    </div> 

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