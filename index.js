const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

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


inquirer.prompt([
    {
        type: "list",
        name: "action",
        message: "Please select a license for your project.",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View all Roles", "Add Role", "View All Departments", "Add Department"],
      },
]).then((answers) => {
  if (answers.action === "View All Employees") {
    db.query('SELECT emp.first_name, emp.last_name, r.title, r.salary, d.department_name, emp2.first_name as manager_first_name, emp2.last_name as manager_last_name FROM employeeData_db.employee as emp LEFT JOIN employeeData_db.roles as r ON emp.role_id = r.id LEFT JOIN employeeData_db.department as d ON r.department_id = d.id LEFT JOIN employeeData_db.employee as emp2 ON emp.manager_id = emp2.id', function (err, results) {
      console.table(results);
    });

  } else if (answers.action === "Add Employee") {

  }else if (answers.action === "Update Employee Role") {
 
  } else if (answers.action === "View all Roles") {


    db.query('SELECT r.title, r.salary, d.department_name as department FROM employeeData_db.roles as r LEFT JOIN employeeData_db.department as d ON r.department_id = d.id', function (err, results) {
      console.table(results);
    });
  } else if (answers.action === "Add Role") {
    
  } else if (answers.action === "View All Departments") {
    db.query('SELECT id, department_name as department FROM department', function (err, results) {
      console.table(results);
    });
  } else if (answers.action === "Add Department") {
    
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});