DROP DATABASE IF EXISTS employeeData_db;
CREATE DATABASE employeeData_db;

USE employeeData_db;

CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  CONSTRAINT fk_manager_id FOREIGN KEY (manager_id) REFERENCES employee(id)
);