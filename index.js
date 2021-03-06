//connecting inquirer & fs
//adding depencencies aswell
const inquirer = require("inquirer")
const fs = require("fs");
const templateBuilder = require("./src/templateBuilder")
//adding all employees
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee")



//Array for answers
var teamMemberData = [];


//manager prompt, always add manager first
inquirer
.prompt([
    {
        type: "input",
          name: "name",
          message: "What is the manager's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the manager's ID:",},
          {
         
          type: "input",
          name: "email",
          message: "What is the manager's Email?",
          },
          {
          type: "input",
          name: "number",
          message: "What is the manager's office number:",
    
          }])
          .then(function(answers){
              let manager = new Manager(answers.name, answers.id, answers.email, answers.number)
              teamMemberData.push(manager)
              nextQuestion()
          });


//will ask next for managers team          
function nextQuestion(){
    inquirer
    .prompt([
      {
    type:"list",
    name:"employeeChoice",
    message: "Please choose from options below",
    choices: ["Engineer","Intern","CompleteTeam"],
      }
            ])
              .then((answers) => {
                if(answers.employeeChoice === "Engineer") {
                  engineerRole();
                } else if (answers.employeeChoice === "Intern") {
                  internRole();
                }
                else{
                  finalTeam();
                }
        });
};

function engineerRole(){
    inquirer
.prompt([
    {
        type: "input",
          name: "name",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's ID:",},
          {
         
          type: "input",
          name: "email",
          message: "What is the engineer's Email?",
          },
          {
          type: "input",
          name: "github",
          message: "What is the engineer's GitHub username?",
    
          }])
          .then(function(answers){
              let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
              teamMemberData.push(engineer)
              nextQuestion()
          });
}

function internRole(){
    inquirer
.prompt([
    {
        type: "input",
          name: "name",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the intern's ID:",},
          {
         
          type: "input",
          name: "email",
          message: "What is the intern's Email?",
          },
          {
          type: "input",
          name: "school",
          message: "What is the intern's school?",
    
          }])
          .then(function(answers){
              let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
              teamMemberData.push(intern)
              nextQuestion()
          });
}

function finalTeam(){
    fs.writeFileSync(
        "./index.html", templateBuilder(teamMemberData), "utf-8"
    );
}




//you're gonna have inquirer ask some questions for manager first, or employee first
// const questions = [
//     {
//         type: "input",
//         message: "Enter the employee's name",
//         name: "employeeName"
//     },
//     {
//         type: "input",
//         message: "Enter the employee's email",
//         name: "employeeEmail"
//     },
//     {
//         type: "input",
//         message: "Enter the employee's ID number",
//         name: "employeeId"
//     },
//     {
//         type: "list",
//         message: "Enter the employee's role",
//         name: "employeeRole",
//         choices: ["Engineer", "Intern", "Manager"]
//     },
// ];
// //Questions for the specific roles
// //maybe add if statement if role selected to these parts to ask specific questions
// if (questions.employeeRole == "Engineer") {
    
//     ([
//         {
//         type: "input",
//         name: "employeeGithub",
//         message: "Enter the engineer's GitHub username",
//         validate: employeeGithub => {
//             if (employeeGithub) {
//                 return true;
//             }else{
//                 console.log("Require GitHub username for engineers");
//                 return false;
//             }
//         }
//         }
//     ])
//     const engineer = new Engineer(
//         answers.name,
//         answers.id,
//         answers.email,
//         engineerQuestions.employeeGithub,
//     );
//     teamMemberData.push(engineer);

// } else if (questions.role == "Intern"){
    
//     ([
//         {
//         type: "input",
//         name: "school",
//         message: "Enter the intern's school",
//         validate: school => {
//             if (school) {
//                 return true;
//             }else{
//                 console.log("Require school for interns");
//                 return false;
//             }
//         }
//         }
//     ])
//     const intern = new Intern(
//         answers.name,
//         answers.id,
//         answers.email,
//         internQuestions.school,
//     );
//     teamMemberData.push(internQuestions);

// } else if (questions.role == "Manager"){
    
//     ([
//         {
//         type: "input",
//         name: "officeNumber",
//         message: "Enter the manager's office number",
//         validate: officeNumber => {
//             if (officeNumber) {
//                 return true;
//             }else{
//                 console.log("Require office number for managers");
//                 return false;
//             }
//         }
//         }
//     ])
//     const manager = new Manager(
//         answers.name,
//         answers.id,
//         answers.email,
//         managerQuestions.officeNumber,
//     );
//     teamMemberData.push(managerQuestions);
// };
// //end of if statement

// async function addNewEmployeeQuestion(){
//     await questions()
    
//     const addnewEmployee = await inquirer
//     .prompt ([
//         {
//             name: "addEmployee",
//             type: "confirm",
//             message: "Would you like to add another team member?",
//             choices: ["Yes, add new employee", "No, create team please"]
//         }
//     ])
//     if (addnewEmployee.addEmployee == "Yes, add new employee") {
//         return promptQuestions()
//     } return generateTeam();
// }

// //promptQuestions();

// function writeToFile(fileName, data) {
    
//     fs.writeFile(fileName, data ,function(error){
//         if(error) console.error(error);
//     })
// }

// function init() {

//     inquirer.prompt(questions).then(function(response){
//         response.name

//         writeToFile('./dist/index.html',templateBuilder(response))
//     })
    

// }

// // Function call to initialize app 
// init();



// //create a function to ask if user wants to add another  employee

// // then you'll have some options for like, add new employee here
// // and itll be like a list
// // and if they choose mengineer, pop up only the engineer questions 