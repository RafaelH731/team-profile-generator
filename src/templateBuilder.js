module.exports = function templateBuilder(data){
    let setOfEmployees = ''
    for(element of data){
        let card = `
        <div>Role: ${element.role}</div>

        ...more info here`
        finalSetOfEmployees+=card
    }
    let finalHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>

<body>

    <div class="jumbotron jumbotron-fluid jumbotron text-center">
        <div class="container">
          <h1 class="display-4">My Team</h1>
          <p class="lead">Team Members are listed below</p>
        </div>
      </div>

    <div class="card " style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">Employee Role</h6>
          <h6 class="card-subtitle mb-2 text-muted">ID Number</h6>
          <h6 class="card-subtitle mb-2 text-muted">Office Number</h6>
          <a href="#" class="card-link">Email Link</a>
          <a href="#" class="card-link">GitHub Link</a>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>
<link rel="stylesheet" href="style.css">

</html>
<link rel="stylesheet" href="style.css">
    // <head>
    // <style></style>
    // <link rel="stylesheet" href='./style.css'</head>
    // <bod>
    // <div>Here's our employee roster
    
    // ${setOfEmployees}
    
    // </div>
    // </body>
    `
    fs.writeFile('./index.html',finalHTML,function(err){
        console.error(err)
    })
    //fs.writeFile of the HTML to a new HTML file in dist
    return finalHTML

}