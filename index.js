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

  } else if (answers.action === "Add Employee") {

  }else if (answers.action === "Update Employee Role") {
 
  } else if (answers.action === "View all Roles") {

  } else if (answers.action === "Add Role") {
    
  } else if (answers.action === "View All Departments") {
    
  } else if (answers.action === "Add Department") {
    
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});