using BackEnd.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Interfaces
{
    interface IUsuariosRepository
    {
        List<Usuarios> Listar();

        void Cadastrar(Usuarios usuarios);

        void Atualizar(Usuarios usuario);

        Usuarios BuscarPorEmailSenha(string email, string senha);
    }
}
