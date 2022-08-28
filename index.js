const mysql = require('mysql2');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Barnabas1005!',
  database: 'employeeManager_db',
});

connection.connect(function (err) {
  if (err) throw err;
});

const inquirer = require('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');

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
      name: 'choice',
    },
  ])
  .then((init) => {
    console.log(init);
    console.log(init.choice);
    switch (init.choice) {
      case 'Add Department':
        addDepartment();
        break;
      case 'Add Role':
        addRole();
        break;
      case 'Add Employee':
        addEmployee();
        break;
      case 'View Departments':
        viewDepartments();
        break;
      case 'View Roles':
        viewRoles();
        break;
      case 'View Employees':
        viewEmployees();
        break;
      case 'Update Employee Role':
        updateRole();
        break;
    }
  });

const addDepartment = () => {
  console.log('you tried to add a department');
};
module.exports = connection;
