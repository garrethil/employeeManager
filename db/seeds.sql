INSERT INTO department (department_name) VALUES
('Engineering'),
('Marketing'),
('Sales');

INSERT INTO roles (title, salary, department_id) VALUES
('Software Engineer', 80000, 1),
('Junior Developer', 65000, 1),
('Marketing Specialist', 60000, 2),
('Marketing Analyst', 55000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id, manager) VALUES
('John', 'Dutch', 1, NULL, TRUE),
('Jack', 'Trent', 2, 1, FALSE),
('Jane', 'Smith', 3, NULL, TRUE),
('Tricia', 'South', 4, 3, FALSE),
('Michael', 'Ruben', 4, 1, FALSE);