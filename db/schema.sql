/* Department Table */
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

/* Roles Table */
CREATE TABLE roles (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER,
  -- Sets relationship between roles table and department table --
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

/* Employee Table */
CREATE TABLE employee (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
  -- Sets relationship between roles table, department table, and employee table --
  CONSTRAINT fk_role
  FOREIGN KEY (role_id)
  REFERENCES roles(id)
  ON DELETE CASCADE,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);