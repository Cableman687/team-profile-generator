// Create a function to generate markdown for README
async function generateHTML(data) {

  console.log("generateHTML fired!");

    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <title>Team Profile Generator</title>

    <link rel="stylesheet" href="dist/style.css" />
    <link rel="stylesheet" href="dist/jass.css" />
    
    <!-- FontAwesomeAPI -->
    <script src="https://kit.fontawesome.com/8b1ac55e94.js" crossorigin="anonymous"></script>

    <!-- Bootstrap API -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
        
  </head>

  <body>

    <header class="text-center bg-danger p-4">
      <h1 class="text-primary text-white ">My Team</h1>
    </header> 
  
    <section class="flex-row align-top flex-center bg-light  ">

    ${data}
      
    </section>

    <script src="./index.js"></script>
  </body>
  `
  }
  
module.exports = {generateHTML};