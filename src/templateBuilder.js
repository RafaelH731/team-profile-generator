const templateBuilder=(cards) => {
   
    var managerCard=(manager) => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="card-text">${manager.name}</p>
    <a href="#" class="card-link">ID: ${manager.id}</a>
    <a href="#" class="card-link">EMAIL: ${manager.email}</a>
    <a href="#" class="card-link">OFFICE NUMBER: ${manager.officeNumber}</a>
  </div>
</div>
        `
    }
    var engineerCard=(engineer) => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <p class="card-text">${engineer.name}</p>
    <a href="#" class="card-link">ID: ${engineer.id}</a>
    <a href="#" class="card-link">EMAIL: ${engineer.email}</a>
    <a href="#" class="card-link">GITHUB: ${engineer.github}</a>
  </div>
</div>
        `
    }
    var internCard=(intern) => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">${intern.name}</p>
    <a href="#" class="card-link">ID: ${intern.id}</a>
    <a href="#" class="card-link">EMAIL: ${intern.email}</a>
    <a href="#" class="card-link">SCHOOL: ${intern.school}</a>
  </div>
</div>
        `
    }
}