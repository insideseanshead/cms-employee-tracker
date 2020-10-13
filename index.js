// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var consolelog = require("console.log")

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_dp"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  mainMenu();
});

// Function mainMenu
// ==============================================
// Inquire what the user wants to do.
    // Add Departments, roles, employees.
    // View departments, roles, emplyees.
    // Update employee roles.

// Inquirer ADD
    // Department
    // role
    // employee

// Inquirer View 
    // Departments
    // roles
    // employees

// Inquirer Update
    // employee roles


// Function ADD
// ===============================================
// function addDepartment()



// function addRole()



// function addEmployee()



// Function View
// ===============================================
// function view()



// Function UPDATE
// ===============================================
// function update()