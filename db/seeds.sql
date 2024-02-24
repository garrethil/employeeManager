INSERT INTO department (id, department_name) VALUES
(1, 'Engineering'),
(2, 'Marketing'),
(3, 'Sales');

INSERT INTO roles (id, title, salary, department_id) VALUES
(1, 'Software Engineer', 80000, 1),
(2, 'Marketing Specialist', 60000, 2),
(3, 'Sales Representative', 55000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'John', 'Doe', 1, NULL),
(2, 'Jane', 'Smith', 2, 1),
(3, 'Michael', 'Johnson', 3, 1);