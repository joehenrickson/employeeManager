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

const question = () => {
  inquirer
    .prompt([
      {
        message: 'What would you like to do?',
        type: 'list',
        choices: [
          'Add Department',
          'Add Role',
          'Add Employee',
          'View Departments',
          'View Roles',
          'View Employees',
          'Update Employee Role',
          'Nothing',
        ],
        name: 'choice',
      },
    ])
    .then((init) => {
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
        case 'Nothing':
          console.log('Have a great day!');
          break;
      }
    });
};

const addDepartment = () => {
  console.log('You are adding a department!');
  inquirer
    .prompt([
      {
        message: 'What is the name of the department you would like to add?',
        type: 'input',
        name: 'name',
      },
    ])
    .then((department) => {
      console.log(department);
      connection.query('INSERT INTO departments SET ?', department, (err) => {
        if (err) {
          console.log(err);
        }
      });
      console.log('Department added!');
      question();
    });
};

const addRole = () => {
  console.log('You are adding a role!');
  inquirer
    .prompt([
      {
        message: 'What is the role you would like to add?',
        type: 'input',
        name: 'title',
      },
      {
        message: 'What is the salary of this role?',
        type: 'input',
        name: 'salary',
      },
      {
        message: 'What is the id of the department?',
        type: 'input',
        name: 'department_id',
      },
    ])
    .then((role) => {
      console.log(role);
      connection.query('INSERT INTO roles SET ?', role, (err) => {
        if (err) {
          console.log(err);
        }
      });
      console.log('Role added!');
      question();
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        message: 'What is the first name of the employee?',
        type: 'input',
        name: 'first_name',
      },
      {
        message: 'What is the last name of the employee?',
        type: 'input',
        name: 'last_name',
      },
      {
        message: 'What is the role id of the employee?',
        type: 'input',
        name: 'role_id',
      },
      {
        message: 'Is the employee a manager?',
        type: 'list',
        choices: ['Yes', 'No'],
        name: 'managerBoolean',
      },
    ])
    .then((employee) => {
      console.log(employee);
      if (employee.managerBoolean === 'Yes') {
        console.log('You are adding a manager!');
        delete employee.managerBoolean;
        console.log(employee);
        connection.query('INSERT INTO employees SET ?', employee, (err) => {
          if (err) {
            console.log(err);
          }
        });
        console.log('Employee added!');
        question();
      } else if (employee.managerBoolean === 'No') {
        inquirer
          .prompt([
            {
              message: 'What is the id of the employees manager?',
              type: 'input',
              name: 'manager_id',
            },
          ])
          .then((associate) => {
            console.log(employee);
            console.log(associate);

            delete employee.managerBoolean;
            let newEmployee = {
              ...employee,
              ...associate,
            };
            connection.query(
              'INSERT INTO employees SET ?',
              newEmployee,
              (err) => {
                if (err) {
                  console.log(err);
                }
              }
            );
            console.log('Employee added!');
            question();
          });
      }
    });
};

const updateRole = () => {
  inquirer
    .prompt([
      {
        message: 'What is the id of he employee you would like to update?',
        type: 'input',
        name: 'id',
      },
      {
        message:
          'What is the id of the role that the employee should be updated to?',
        type: 'input',
        name: 'role_id',
      },
    ])
    .then((employee) => {
      let newRole = {
        role_id: employee.role_id,
      };
      connection.query(
        `UPDATE employees SET ? WHERE id = ${employee.id}`,
        employee,
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      console.log('Employee updated!');
      question();
    });
};

const viewDepartments = () => {
  connection.query('SELECT * FROM departments', (err, departments) => {
    if (err) {
      console.log(err);
    }
    console.table(departments);
  });
  question();
};

question();
