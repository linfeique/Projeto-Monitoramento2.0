create database Monitoramento_DataBase;

use Monitoramento_DataBase;

create table TIPOS_USUARIO(
	ID int primary key identity
	,TIPO varchar(200)
);

create table USUARIOS(
	ID int primary key identity
	,NOME varchar(200) not null
	,EMAIL varchar(200) unique not null
	,SENHA varchar(200) not null
	,ID_TIPO_USUARIO int foreign key references TIPOS_USUARIO(ID)
);

create table ESTADOS(
	ID int primary key identity
	,ESTADO varchar(200) unique
);

create table EQUIPAMENTO(
	ID int primary key identity
	,NOME varchar(200) not null
	,ADDRESS varchar(200) not null unique
	,ID_ESTADO int foreign key references ESTADOS(ID)
);