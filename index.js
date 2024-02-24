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
        name: "actions",
        message: "Please select a license for your project.",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View all Roles", "Add Role", "View All Departments", "Add Department"],
      },
])

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});