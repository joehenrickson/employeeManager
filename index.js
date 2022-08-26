const mysql = require('mysql2');

const db = mysql.createConnection(
  'mysql://root:rootroot@localhost:3306/employeeManager_db'
);

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      message: 'What would you like to do?',
      type: 'list',
      choices: [
        'Add Department',
        'Add Role',
        'Add Employee',
        'View Department',
        'View Roles',
        'View Employees',
        'Update Employee Role',
      ],
      name: 'init',
    },
  ])
  .then((init) => {
    console.log(init);
  });
