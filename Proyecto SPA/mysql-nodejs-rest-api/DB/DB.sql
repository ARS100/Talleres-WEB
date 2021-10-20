CREATE DATABASE proyectoSPA;
USE proyectoSPA;

CREATE TABLE CLIENTE (
	id_cliente INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(20),
	correo VARCHAR(30),
	ciudad VARCHAR(15),
	direccion VARCHAR(25),
	PRIMARY KEY (id_cliente)
);

CREATE TABLE CIRCUITO (
	id_circuito INT NOT NULL AUTO_INCREMENT,
	tipo VARCHAR(15),
	nombre VARCHAR(20),
	componentes VARCHAR(40),
	costo INT,
	PRIMARY KEY (id_circuito)
);

CREATE TABLE ENVIO (
	id_envio INT NOT NULL AUTO_INCREMENT,
	tcircuito INT,
	ncliente INT,
	cantidad INT,
	ciudad VARCHAR(20),
	fecha DATE,
	descripcion VARCHAR(30),
	costo INT,
	PRIMARY KEY(id_envio),
	FOREIGN KEY(tcircuito) REFERENCES CIRCUITO(id_circuito),
	FOREIGN KEY(ncliente) REFERENCES CLIENTE(id_cliente)
);
