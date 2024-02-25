const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Wooden',
    database: 'employeeData_db'
  },
  console.log(`Connected to the employeeData_db database.`)
);

db.connect();

function startPrompt() {
  inquirer.prompt([
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View all Roles", "Add Role", "View All Departments", "Add Department"],
      },
]).then((answers) => {
  if (answers.action === "View All Employees") {
    const empTabQ = `SELECT emp.first_name, emp.last_name, r.title as role, r.salary, d.department_name, emp2.first_name as manager_first_name, emp2.last_name as manager_last_name 
                     FROM employeeData_db.employee as emp LEFT JOIN employeeData_db.roles as r ON emp.role_id = r.id 
                     LEFT JOIN employeeData_db.department as d ON r.department_id = d.id 
                     LEFT JOIN employeeData_db.employee as emp2 ON emp.manager_id = emp2.id`;

    db.query(empTabQ, function (err, results) {
      console.table(results);

      startPrompt();
    });

  } else if (answers.action === "Add Employee") {

  }else if (answers.action === "Update Employee Role") {
 
  } else if (answers.action === "View all Roles") {
const empRolQ = `SELECT r.title, r.salary, d.department_name as department 
                 FROM employeeData_db.roles as r 
                 LEFT JOIN employeeData_db.department as d ON r.department_id = d.id`;

    db.query(empRolQ, function (err, results) {
      console.table(results);
      startPrompt();
    });
  } else if (answers.action === "Add Role") {
    db.query('SELECT department_name FROM department', function (error, results) {
const departments = results.map(row => row.department_name);

      inquirer.prompt([
        {
          type: "input",
          name: "newRole",
          message: "What is the name of the role you would like to add?",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary for the new role?",
        },
        {
          type: "list",
          name: "roleDept",
          message: "What department does the new role belong to?",
          choices: departments
        },
      ]).then((answers) => {

        db.query(`SELECT id FROM department WHERE department_name = '${answers.roleDept}'`, (err, results) => {
          let roleId = results[0].id;
    
        
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${answers.newRole}', '${answers.salary}', ${roleId})`, (err, results) => {
          if (err) {
            console.log(err);
          }
          console.log(`${answers.newRole} role added to the roles table`);
          startPrompt();
        })
        })
      })
    })
    
  } else if (answers.action === "View All Departments") {
    db.query('SELECT id, department_name as department FROM department', function (err, results) {
      console.table(results);
      startPrompt();
    });
  } else if (answers.action === "Add Department") {
    inquirer.prompt([
      {
        type: "input",
        name: "newDepartment",
        message: "What is the name of the department you would like to add?",
      },
    ]).then((answers) => {
      const dept = answers.newDepartment;
      db.query(`INSERT INTO department (department_name) VALUES ('${dept}')`, function (err, results) {

        if (err) {
          console.log(err);
        }
        console.log(`${dept} department added to the department table`);
        startPrompt();
      });
    })
  }
})
}

startPrompt();



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});