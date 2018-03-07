CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id Int(150) AUTO_INCREMENT NOT NULL,
	burgerName VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,

  PRIMARY KEY (id) 
);