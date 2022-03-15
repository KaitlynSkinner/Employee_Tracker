INSERT INTO department (department_id, department_name)
VALUES 
  (1, "Engineering"),
  (2,"Finance"),
  (3,"Legal"),
  (4,"Sales");
-- Do I need to get rid of the above id because it is included below? and change to "department_id" instead of "id" --
INSERT INTO roles (id, role_title, department, salary) 
VALUES
  (1, "Sales Lead", "Sales", 100000),
  (2, "Sales-person", "Sales", 80000),
  (3, "Lead Engineer", "Engineering", 150000),
  (4, "Software Engineer", "Engineering", 120000),
  (5, "Account Manager", "Finance", 160000),
  (6, "Accountant", "Finance", 125000),
  (7, "Legal Team Lead", "Legal", 250000),
  (8, "Lawyer", "Legal", 190000);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
  ("John", "Doe", 1),
  ("Mike", "Chan", 2),
  ("Ashley", "Rodriguez", 3),
  ("Kevin", "Tupik", 4),
  ("Kunall", "Singh", 5),
  ("Malia", "Brown", 6),
  ("Sarah", "Lourd", 7),
  ("Tom", "Allen", 8);

/* 
a seeds.sql file
to pre-populate the database, 
making the development of individual features 
much easier.
*/