CREATE DATABASE IF NOT EXISTS companydb;

USE companydb

CREATE TABLE employee (
    id INT(11) not null AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);
INSERT INTO employee (name, salary)  VALUES ('Joel',1000),('Eduardo',1500),('Marcelo',2000),('Evangelina',3000),('Mariana',2800)