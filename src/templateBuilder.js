const templateBuilder=(cards) => {
   
    var managerCard=(manager) => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <ul>
    <li>ID: ${manager.id}</li>
    <li>OFFICE NUMBER: ${manager.officeNumber}</li>
    </ul>
    <a href="#" class="card-link">EMAIL: ${manager.email}</a>
  </div>
</div>
        `
    }
    var engineerCard=(engineer) => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <ul>
    <li>ID: ${engineer.id}</li>
    <a href="#" class="card-link">EMAIL: ${engineer.email}</a>
    <a href="#" class="card-link">GITHUB: ${engineer.github}</a>
    </ul>
  </div>
</div>
        `
    }
    var internCard=(intern) => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <ul>
    <li>ID: ${intern.id}</li>
    <li>SCHOOL: ${intern.school}</li>
    </ul>
    <a href="#" class="card-link">EMAIL: ${intern.email}</a>
  </div>
</div>
        `
    };

    const cardArray= [];

    cardArray.push(cards
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
    );
    cardArray.push(cards
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
      .join("")
    );
    cardArray.push(cards
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
      .join("")
    );
    
    return cardArray.join("");
    };

var generatePage = function (cards){
    return
};

    module.exports = (cards) => {
        return `
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

      <div class="pt-5">
        <div class="container">
        <div class="row">
        ${templateBuilder(cards)}
        </div>
        </div>
        </div>
    
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>
<link rel="stylesheet" href="style.css">
        `
    }
