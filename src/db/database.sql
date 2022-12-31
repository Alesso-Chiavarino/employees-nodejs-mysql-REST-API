-- crear tabla
CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

-- ver lo que recibe y puede almacenar
DESCRIBE employee;

-- insertar valores a tabla
INSERT INTO employee VALUES
(1, 'John', 1000),
(2, 'Peter', 2000),
(3, 'Paul', 3000),
(4, 'Mary', 4000),
(5, 'Jane', 5000);

-- ver tabla
SELECT FROM * employee;