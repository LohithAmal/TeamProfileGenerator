// variable declaration for all required files 
const inquirer = require('inquirer');
// variable declaration for own-relative files
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site');

// team emtpy arrays here

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern};

// function call for terminal question using inquirer

function Prompt() {
  return inquirer 
  .prompt([
    {
   type: 'list',
   name: 'role',
   message: 'Enter a position of the Employee',
   choices: ['Manager', 'Engineer', 'Intern']
  },
  {
   type : 'text',
   name: 'employee',
   message: 'Enter your Employee Name(Required)'
  },
  {
    type: 'text',
    name: 'id',
    message: 'Enter Employee ID (Required)'
  },
  {
    type: 'text',
    name : 'email',
    message : 'Enter Employee email address (Required)'
  }
])
.then(({employee, id, email, role}) => {
  if (role === "Manager") {
      return inquirer
          .prompt([{
              type:'text',
              name: 'office',
              message:"What is the Manager's office number?"
          },
          {
              type:'confirm',
              name:'anotherEntry',
              message: "What you like to add another employee?",
              default: false
          }])
          .then(({office, anotherEntry}) => {
              manager.push(new Manager(employee, id, email, office))
              
              if (anotherEntry) {
                  return Prompt();
              }
          })
  } else if (role === "Engineer") {
      return inquirer
          .prompt([{
              type: 'text',
              name: 'github',
              message: "What is the Engineer's Github username?"
          },
          {
              type:'confirm',
              name:'anotherEntry',
              message: "What you like to add another employee?",
              default: false
          }])
          .then(({github, anotherEntry}) => {
              engineer.push(new Engineer(employee, id, email, github))
              
              if (anotherEntry) {
                  return Prompt();
              }
          })
  } else if (role === 'Intern') {
       return inquirer
          .prompt([{
              type:'text',
              name:'school',
              message: "What is the Intern's school?"
          },
          {
              type:'confirm',
              name:'anotherEntry',
              message: "What you like to add another employee?",
              default: false
          }])
          .then(({school, anotherEntry}) => {
              intern.push(new Intern(employee, id, email, school))
             
              if (anotherEntry) {
                  return Prompt();
              }
          })
  }
})
};

Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })






