const objects = require('./prompts');
const fs = require('fs');
const data = require('./generateCard');

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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="dist/style.css" />
<!-- API LINKS-->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    />
  </head>

  <body>

    <header class="text-center bg-dark p-1">
      <h1 class="text-primary">My Team</h1>
    </header>

    ${data}

    <!-- SCRIPT -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" 
    crossorigin="anonymous"
    ></script>

    <script src="./index.js"></script>
  </body>
  `;
  }
  
module.exports = {generateHTML};