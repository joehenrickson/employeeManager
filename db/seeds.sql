INSERT INTO department (name)
VALUES 
('Grocery'),
('General Merchandise'),
('Produce'),
('Deli'),
('Meat'),

INSERT INTO role (title, salary, department_id)
VALUES
('Grocery Manager', 80000, 1),
('Produce Manager',50000, 3),
('General Merchandise Manager', 45000, 2), 
('Deli Manager', 40000, 4),
('Meat Department Manager', 60000, 5), 
('Freight Stocker', 40000, 1),
('Cashier', 35000, 1),
('Deli ASsociate', 30000, 4),
('Produce Associate', 30000, 3),
('Meat Cutter', 45000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Babe', 'Ruth', 1, null),
('Mickey', 'Mantle', 2, 1),
('Willie', 'Stargell', 5, 1),
('Rollie', 'Fingers', 3, 1),
('Gaylord', 'Perry', 4, 1),
('Stan', 'Musial', 6, 1),
('Bob', 'Gibson', 10, 5),
('Johnny', 'Bench', 8, 4),
('Tom', 'Seaver', 7, 1),
('Willie', 'Mays', 9, 3),
('Ted', 'Williams', 7, 1);