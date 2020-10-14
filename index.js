// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
const { allowedNodeEnvironmentFlags } = require("process");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_db"
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
function mainMenu() {
    inquirer.prompt(
    {
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add department, role or employee",
            "View departments, roles or employees",
            "Update roles",
            "Quit"
        ]
    }
    ).then(function(response){ 
        console.log(response);
        switch (response.choice) {
            case "Add department, role or employee":
                addMenu();
                break;

            case "View departments, roles or employees":
                viewMenu();
                break;

            case "Update roles":
                updateRoles();
                break;

            case "Quit":
                connection.end()
                break;
        }
    })
}

// Inquirer ADD
function addMenu(){
    inquirer.prompt(
        {
            name: "choice",
            type: "list",
            message: "Would you like to add a department, role or employee?",
            choices: [
                "Department",
                "Role",
                "Employee",
                "Return to main menu"
            ]
        }
    ).then(function(response){
        console.log(response);
        switch (response.choice) {
            case "Department":
                addDepartment();
                break;
                
            case "Role":
                addRole();
                break;

            case "Employee":
                addEmployee();
                break;

            case "Return to main menu":
                mainMenu();
                break;
        }
    })
}

// Inquirer View 
function viewMenu(){
    inquirer.prompt(
        {
            name: "choice",
            type: "list",
            message: "Would you like to view a department, role or employee?",
            choices: [
                "Department",
                "Role",
                "Employee",
                "Return to main menu"
            ]
        }
    ).then(function(response){
        console.log(response);
        switch (response.choice) {
            case "Department":
                connection.query("SELECT * FROM employee_db.department", function(err,data) {
                    if (err) {
                        throw err;
                    }
                    console.table(data);
                    mainMenu();
                })
                break;
                
            case "Role":
                connection.query("SELECT * FROM employee_db.role", function(err,data){
                    if(err){
                        throw err;
                    }
                    console.table(data);
                    mainMenu();
                })
                break;

            case "Employee":
                connection.query("SELECT * FROM employee_db.employee", function(err,data){
                    if(err){
                        throw err;
                    }
                    console.table(data);
                    mainMenu();
                })
                break;

            case "Return to main menu":
                mainMenu();
                break;
        }
    })
}
    
// Function ADD
// ===============================================
// function addDepartment()
function addDepartment(){
    inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'What would you like to name your department?'
    }).then(function (response) {
        connection.query("INSERT INTO department SET ?", { name: response.name }, function (err) {
                if (err) throw err;
                mainMenu();
            })
    })
}

// function addRole()
function addRole(){
    console.log('add role')
    mainMenu();
}

// function addEmployee()
function addEmployee(){
    console.log('add employee')
    mainMenu();
}


// Function UPDATE Role
// ===============================================

function updateRoles(){
    console.log('update role')
    mainMenu();
}