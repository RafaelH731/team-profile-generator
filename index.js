//connecting inquirer & fs
//adding depencencies aswell
const inquirer = require("inquirer")
const fs = require("fs");
const templateBuilder = require("./src/templateBuilder")
//adding all employees
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Array for answers
var teamMemberData = [];

//you're gonna have inquirer ask some questions for manager first, or employee first
const questions = [
    {
        type: "input",
        message: "Enter the employee's name",
        name: "employeeName"
    },
    {
        type: "input",
        message: "Enter the employee's email",
        name: "employeeEmail"
    },
    {
        type: "input",
        message: "Enter the employee's ID number",
        name: "employeeId"
    },
    {
        type: "list",
        message: "Enter the employee's role",
        name: "employeeRole",
        choices: ["Engineer", "Intern", "Manager"]
    },
]
//Questions for the specific roles
engineerQuestions = [
    {
        type: "input",
        name: "employeeGithub",
        message: "Enter the engineer's GitHub username",
        validate: employeeGithub => {
            if (employeeGithub) {
                return true;
            }else{
                console.log("Require GitHub username for engineers");
                return false;
            }
        }
    }
]

internQuestions = [
    {
        type: "input",
        name: "school",
        message: "Enter the intern's school",
        validate: school => {
            if (school) {
                return true;
            }else{
                console.log("Require school for interns");
                return false;
            }
        }
    }
]

ManagerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            }else{
                console.log("Require office number for managers");
                return false;
            }
        }
    }
]
// then you'll have some options for like, add new employee here
// and itll be like a list
// and if they choose mengineer, pop up only the engineer questions 