const express = require('express');
const inquirer = require('inquirer');



inquirer.prompt([
    {
        type: "list",
        name: "actions",
        message: "Please select a license for your project.",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View all Roles", "Add Role", "View All Departments", "Add Department"],
      },
])