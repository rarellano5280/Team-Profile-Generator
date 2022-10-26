const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern')
const createTeam = require("./dist/renderHTML.js");


const empArray = [];

function initApp () {

    function empTeam() {
        inquirer.prompt([{
            type: 'list',
            message: "Please select the type of employee you will be adding",
            name: "role",
            choices:['Manager', 'Engineer', 'Intern', 'Team is complete']
        }]).then(function(roleChoice){
            switch (roleChoice.role) {
                case 'Manager':
                    managerRole();
                    break;
                case 'Engineer':
                    engineerRole();
                    break;
                case 'Intern':
                    internRole();
                    break;

                default:
                    buildHtml();
            }
        })
    }

 function managerRole() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'Please choose gender',
            name : 'managerGender',
            choices: ['Male' , 'Female' , 'Non-Bianary']
        },
        {
            type: 'input',
            message: "Please enter the manager's name",
            name: 'managerName'
        },
        {
            type: 'input',
            message:"Please enter the manager's ID.",
            name: 'managerId'
        },
        {
            type: 'input',
            message: "Please enter the manager's email",
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: "Please enter the manager's office phone number",
            name: 'managerOfficeNumber'
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerGender, answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
        empArray.push(manager);
        empTeam();
    });
 }

 function engineerRole() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please choose gender',
            name : 'engineerGender',
            choices: ['Male' , 'Female' , 'Non-Bianary']
        },
        {
            type: 'input',
            message: "Please enter the engineer's name",
            name: 'engineerName'
        },
        {
            type: 'input',
            message:"Please enter the engineer's ID.",
            name: 'engineerId'
        },
        {
            type: 'input',
            message: "Please enter the engineeer's email",
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: "Please enter the engineer's GitHub username",
            name: 'engineerGithub'
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerGender, answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        empArray.push(engineer)
        empTeam();
    });
 }

 function internRole() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please choose gender',
            name : 'internGender',
            choices: ['Male' , 'Female' , 'Non-Bianary']
        },
        {
            type: 'input',
            message: "Please enter the intern name",
            name: 'internName'
        },
        {
            type: 'input',
            message:"Please enter the intern ID.",
            name: 'internId'
        },
        {
            type: 'input',
            message: "Please enter the intern email",
            name: 'internEmail'
        },
        {
            type: 'input',
            message: "Please enter the shcool that the intern attends",
            name: 'internSchool'
        }
    ]).then(answers => {
        const intern = new Intern(answers.internGender, answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        empArray.push(intern)
        empTeam();
    });
 }

 function buildHtml () {
    console.log("Sucessfully created team!")

    fs.writeFileSync("index.html", createTeam(empArray), "utf-8")
 }

empTeam();

}

initApp();