INSERT INTO department (department_name) VALUES
('Engineering'),
('Marketing'),
('Sales');

INSERT INTO roles (title, salary, department_id) VALUES
('Software Engineer', 80000, 1),
('Marketing Specialist', 60000, 2),
('Sales Representative', 55000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id, manager) VALUES
('John', 'Doe', 1, NULL, TRUE),
('Jane', 'Smith', 2, 1, TRUE),
('Michael', 'Johnson', 3, 1, FALSE);