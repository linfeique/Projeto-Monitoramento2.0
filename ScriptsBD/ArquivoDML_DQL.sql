insert into TIPOS_USUARIO(TIPO)
values ('Admin'), ('Comum')

select * from TIPOS_USUARIO

insert into USUARIOS(NOME, EMAIL, SENHA, ID_TIPO_USUARIO)
values ('Matheus', 'matheus@gmail', '123456', 2), ('Admin', 'admin@admin', '123456', 1), ('Odin', 'odin@valhalla', 'thor', 1)

select * from USUARIOS inner join TIPOS_USUARIO on USUARIOS.ID_TIPO_USUARIO = TIPOS_USUARIO.ID

insert into ESTADOS(ESTADO)
values ('Desligado'), ('Ligado'), ('Fora da rede')

select * from ESTADOS order by ID

insert into EQUIPAMENTO(NOME, ADDRESS, ID_ESTADO)
values ('pc1', '1.1.1.1', 2), ('switch1', '5.5.5.5', 2), ('servidor', '8.8.8.8', 2)

select * from EQUIPAMENTO inner join ESTADOS on EQUIPAMENTO.ID_ESTADO = ESTADOS.ID