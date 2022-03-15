// Include packages for application
const inquirer = require('inquirer');
// Require figlet for console.log text
const figlet = require('figlet');
// Require MySQL2 client for Node.js
const mysql = require('mysql2');
// Require file system?
// const fs = require('fs');

//FIX BELOW
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const generateHtml = require('./src/page-template');

//FIX BELOW
// let manager = {};
// let engineerArr = [];
// let addRoleArr = [];


// Begin the app function
const optionMenu = () => {
    console.log(figlet.textSync('Employee Tracker!', {
        font: 'Invita',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));

    inquirer
    .prompt([
        //Begin This Application, or not 
        {
            type: 'input',
            name: 'begin',
            message: 'Please hit "RETURN/ENTER" to generate an Employee team. If you wish to exit please hit "Ctrl+C".',
        },
        // options on what user would  like to do when commencing application 
        {
            type: 'list',
            name: 'begin',
            message: 'What would you like to do?',
            choices: [ 'View all Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit' ]
        }
    ])
    .then(answers => {
        console.log(answers.begin);
        if (answers.begin === 'View all Employees') {
            viewAllEmployees();
        } else if (answers.begin === 'Add Employee') {
            addEmployee();
        } else if (answers.begin === 'Update Employee Role') {
            updateEmployeeRole();
        } else if (answers.begin === 'View All Roles') {
            viewAllRoles();
        } else if (answers.begin === 'Add Role') {
            addRole();
        } else if (answers.begin === 'View All Departments') {
            viewAllDepartments();
        } else if (answers.begin === 'addDepartment') {
            addDepartment();
        } else if (answers.begin === 'Quit') {
            quitApp();
        }
    ])
    .then(answers => {
        // create manager from class constructor, and call exit function
        //FIX BELOW
        manager = new Manager(answers.manager, answers.managerId, answers.managerEmail, answers.officeNumber);
        optionMenu();
    })
};

// a) user selects View All Employees option:
const viewAllEmployees = () => {
    inquirer.prompt([
        // engineers name
        {
            type: 'input',
            name: 'engineer',
            message: 'What is the name of the teams engineer?',
            validate: engineerInput => {
                if (engineerInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer!');
                    return false;
                }
            }
        },
        // employee ID
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the employee ID of the engineer?',
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the engineer!');
                    return false;
                }
            }
        },
        // email address
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email address of the engineer?',
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the engineer!');
                    return false;
                }
            }
        },
        // GitHub username
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the GitHub Username of the engineer?',
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log('Please enter the GitHub Username of the engineer!');
                    return false;
                }
            }
        }
        // take back to main menu
    ])
    .then(answers => {
        let engineer = new Engineer(answers.engineer, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        engineerArr.push(engineer);
        optionMenu();
    })
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
        }
        // take back to main menu
        ])
        .then(answers => {
            let employee = new Intern(answers.firstName, answers.lastName, answers.employeeRole);
            addEmployee.push(employee);
            optionMenu();
        })
}

// c) user selects Update Employee Role option
const updateEmployeeRole = () => {
    inquirer.prompt([
        // interns name
        {
            type: 'input',
            name: 'intern',
            message: 'What is the name of the teams intern?',
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        // employee ID
        {

        },
        // take back to main menu
        ])
        .then(answers => {
            let intern = new Intern(answers.intern, answers.internId, answers.internEmail, answers.internSchool);
            internArr.push(intern);
            optionMenu();
        })
}

// d) user selects View All Roles option
const viewAllRoles = () => {
    inquirer.prompt([
        // interns name
        {
            type: 'input',
            name: 'intern',
            message: 'What is the name of the teams intern?',
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        // employee ID
        {
            
        },
        // take back to main menu
        ])
        .then(answers => {
            let intern = new Intern(answers.intern, answers.internId, answers.internEmail, answers.internSchool);
            internArr.push(intern);
            optionMenu();
        })
}

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
            choices: [ 'Engineering', 'Funance', 'Legal', 'Sales', 'Service' ]
        }
        // take back to main menu
        ])
        .then(answers => {
            let role = new Role(answers.roleName, answers.roleSalary, answers.roleDepartment);
            addRoleArr.push(intern);
            optionMenu();
        })
}

// f) user selects View All Departmetns option
const viewAllDepartments = () => {
    inquirer.prompt([
        // interns name
        {
            type: 'input',
            name: 'intern',
            message: 'What is the name of the teams intern?',
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        // employee ID
        {
            
        },
        // take back to main menu
        ])
        .then(answers => {
            let intern = new Intern(answers.intern, answers.internId, answers.internEmail, answers.internSchool);
            internArr.push(intern);
            optionMenu();
        })
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
        },
        // confirmation message? do I need to include - does system include?

        // take back to main menu
        ])
        .then(answers => {
            //FIX BELOW
            let department = new Department(answers.department, answers.departmentName);
            addDepartmentArr.push(departmentName);
            optionMenu();
        })
}

// h) user selects to Quit Application
const quitApp = () => {
    inquirer.prompt([
    //Begin This Application, or not 
    {
        type: 'input',
        name: 'quitApp',
        message: 'Would you like to exit the application?',
    }
    .then(answers => {
        console.log(answers.begin);
        if (answers.quitApp === 'View all Employees') {
            viewAllEmployees();
        } else if (answers.quitApp === 'Add Employee') {
            addEmployee();
        } else if (answers.quitApp === 'Update Employee Role') {
            updateEmployeeRole();
        } else if (answers.quitApp === 'View All Roles') {
            viewAllRoles();
        } else if (answers.quitApp === 'Add Role') {
            addRole();
        } else if (answers.quitApp === 'View All Departments') {
            viewAllDepartments();
        } else if (answers.quitApp === 'addDepartment') {
            addDepartment();
        } else {
            //console.log(manager, engineerArr, internArr);
            fs.writeFile('./dist/index.html', generateHtml(manager, engineerArr, internArr), err => {
                if (err) throw new Error(err);

            console.log('Website created! Open index.html file in your browser to see!');
            });
            return;
        }
    })
}

// call function
optionMenu()

// Try to add some additional functionality to your application, 
// such as the ability to do the following:

//Update employee managers.

//View employees by manager.

//View employees by department.

//Delete departments, roles, and employees.

//View the total utilized budget of a department—in other words, 
//the combined salaries of all employees in that department.

