using BackEnd.Domains;
using BackEnd.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Repositories
{
    public class UsuarioRepository : IUsuariosRepository
    {
        public void Atualizar(Usuarios usuario)
        {
            using (MoniTechContext ctx = new MoniTechContext())
            {
                ctx.Usuarios.Update(usuario);
                ctx.SaveChanges();
            }
        }

        public Usuarios BuscarPorEmailSenha(string email, string senha)
        {
            using (MoniTechContext ctx = new MoniTechContext())
            {
                Usuarios usuarioP = ctx.Usuarios.Include(x => x.IdTipoUsuarioNavigation).Where(x => x.Email == email && x.Senha == senha).FirstOrDefault();

                if (usuarioP == null)
                {
                    return null;
                }

                return usuarioP;
            }
        }

        public void Cadastrar(Usuarios usuarios)
        {
            using (MoniTechContext ctx = new MoniTechContext())
            {
                ctx.Usuarios.Add(usuarios);
                ctx.SaveChanges();
            }
        }

        public List<Usuarios> Listar()
        {
            using (MoniTechContext ctx = new MoniTechContext())
            {
                return ctx.Usuarios.ToList();
            }
        }
    }
}
