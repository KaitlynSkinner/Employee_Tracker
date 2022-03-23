// Include packages for application
const inquirer = require('inquirer');
// Require figlet for console.log text
const figlet = require('figlet');
// Require console.table to display mySQL tables
const cTable = require('console.table');
// Require connection.js file
const db = require('./db/connection');

console.log(figlet.textSync('Employee Tracker!', {
    font: 'Invita',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    optionMenu();
});

// Begin the app function
const optionMenu = () => {
    inquirer
    .prompt([
        //Begin This Application, or not 
        {
            type: 'input',
            name: 'start',
            message: 'Please hit "RETURN/ENTER" to generate an Employee team. If you wish to exit please hit "Ctrl+C".',
        },
        // options on what user would like to do when commencing application 
        {
            type: 'list',
            name: 'begin',
            message: 'What would you like to do?',
            choices: [ 'View all Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit' ]
        }
    ])
    .then(res => {
        console.log(res.begin);
        if (res.begin === 'View all Employees') {
            viewAllEmployees();
        } else if (res.begin === 'Add Employee') {
            addEmployee();
        } else if (res.begin === 'Update Employee Role') {
            updateEmployeeRole();
        } else if (res.begin === 'View All Roles') {
            viewAllRoles();
        } else if (res.begin === 'Add Role') {
            addRole();
        } else if (res.begin === 'View All Departments') {
            viewAllDepartments();
        } else if (res.begin === 'addDepartment') {
            addDepartment();
        } else if (res.begin === 'Quit') {
            quitApp();
        }
    });
}

// ---------------------------------------
// EMPLOYEES
// ---------------------------------------
// a) user selects View All Employees option:
const viewAllEmployees = (cTable) => {
    const query = `SELECT E.id AS id, E.first_name AS first_name, E.last_name AS last_name, role_title AS role, department_name AS department, salary AS salary, 
                CONCAT(E.first_name, " ", E.last_name) AS manager
                FROM employee AS E
                LEFT JOIN roles AS R ON E.role_id = R.id
                LEFT JOIN department AS D ON R.department_id = D.id
                LEFT JOIN employee AS M ON E.manager_id = M.id
                GROUP BY id ORDER BY id ASC;`
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        optionMenu();
    });
};

// b) user selects Add Employee option
const addEmployee = () => {
    inquirer.prompt([
        // employee's first name
        {
            type: 'input',
            name: 'firstName',
            message: "What is the employee's first name?",
            validate: firstName => {
                if (firstName) {
                    return true;
                } else {
                    console.log("Please enter the employee's first name!");
                    return false;
                }
            }
        },
        // employee's last name
        {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name?",
            validate: lastName => {
                if (lastName) {
                    return true;
                } else {
                    console.log("Please enter the employee's last name!");
                    return false;
                }
            }
        },
        // employee's role
        {
            type: 'input',
            name: 'employeeRole',
            message: "What is the employee's role?",
            validate: employeeRole => {
                if (employeeRole) {
                    return true;
                } else {
                    console.log("Please enter the employee's role!");
                    return false;
                }
            }
        },
        //manager id
        {
            type: 'input',
            name: 'employeeRole',
            message: "What is the employee's role?",
            validate: employeeRole => {
                if (employeeRole) {
                    return true;
                } else {
                    console.log("Please enter the employee's role!");
                    return false;
                }
            }
        },
        // take back to main menu
        ])
        .then(answers => {
            let employee = new Employee(answers.firstName, answers.lastName, answers.employeeRole);
            addEmployee.push(employee);
            optionMenu();
        })
}

// c) user selects Update Employee Role option
const updateEmployeeRole = () => {
    inquirer.prompt([
        // which employee 
        {
            type: 'input',
            name: 'selectedEmployee',
            message: "Which employee's role do you want to update?",
            validate: selectedEmployee => {
                if (selectedEmployee) {
                    return true;
                } else {
                    console.log("Please enter the employee's role you wish to update !");
                    return false;
                }
            }
        },
        // new role
        {
            type: 'input',
            name: 'selectedEmployeeRole',
            message: 'Which role do you want to assign the selected employee?',
            validate: selectedEmployeeRole => {
                if (selectedEmployeeRole) {
                    return true;
                } else {
                    console.log('Please enter the role you wish to assign the selected employee!');
                    return false;
                }
            }
        },
        // take back to main menu
        ])
        .then(answers => {
            let employee = new Employee(answers.selectedEmployee, answers.selectedEmployeeRole);
            updateEmployeeRoleArr.push(employee);
            optionMenu();
        })
}

// ---------------------------------------
// ROLES
// ---------------------------------------
// d) user selects View All Roles option
const viewAllRoles = (cTable) => {
    const query = `SELECT R.id AS id, role_title AS role, salary AS salary, department_name AS department
                FROM roles AS R
                LEFT JOIN department AS D ON R.department_id = D.id
                GROUP BY id ORDER BY id ASC;`
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table('View All Roles', res);
        optionMenu();
    });
};

// e) user selects Add Role option
const addRole = () => {
    inquirer.prompt([
        // Role name
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the role?',
            validate: roleName => {
                if (roleName) {
                    return true;
                } else {
                    console.log('Please enter the name of the role!');
                    return false;
                }
            }
        },
        // Salary of the Role
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary of the role?',
            validate: roleSalary => {
                if (roleSalary) {
                    return true;
                } else {
                    console.log('Please enter the salary of the role!');
                    return false;
                }
            }
        },
        // options ofor which department the role belongs to
        {
            type: 'list',
            name: 'roleDepartment',
            message: 'Which department does the role belong to?',
            choices: [ 'Engineering', 'Finance', 'Legal', 'Sales', 'Service' ]
        }
        // take back to main menu
        ])
        .then(answers => {
            let role = new Role(answers.roleName, answers.roleSalary, answers.roleDepartment);
            addRoleArr.push(role);
            optionMenu();
        })
}

// ---------------------------------------
// DEPARTMENTS
// ---------------------------------------
// f) user selects View All Departmetns option
const viewAllDepartments = (cTable) => {
    const query = `SELECT * FROM department`;
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table('View All Departmetns', res);
        optionMenu();
    });
}

// g) user selects Add Department option
const addDepartment = () => {
    inquirer.prompt([
        // Department name
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?',
            validate: departmentName => {
                if (departmentName) {
                    return true;
                } else {
                    console.log('Please enter the name of the department!');
                    return false;
                }
            }
        }
        // confirmation message? do I need to include - does system include?

        // take back to main menu
        ])
        .then(answers => {
            let department = new Department(answers.department, answers.departmentName);
            addDepartmentArr.push(departmentName);
            optionMenu();
        });
}

// h) user selects to Quit Application
const quitApp = () => {
    console.log(figlet.textSync('Goodbye!', {
        font: 'Invita',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
    connection.end();
};

// call function


// Try to add some additional functionality to your application, 
// such as the ability to do the following:

//Update employee managers.

//View employees by manager.

//View employees by department.

//Delete departments, roles, and employees.

//View the total utilized budget of a department—in other words, 
//the combined salaries of all employees in that department.

