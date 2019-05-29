using Projeto_Monitoramento2.Domains;
using Projeto_Monitoramento2.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Projeto_Monitoramento2.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public void Cadastrar(Usuarios usuario)
        {
            using (MonitoramentoContext ctx = new MonitoramentoContext())
            {
                ctx.Usuarios.Add(usuario);
                ctx.SaveChanges();
            }
        }

        public void Deletar(int id)
        {
            using (MonitoramentoContext ctx = new MonitoramentoContext())
            {
                Usuarios usuarioProcurado = ctx.Usuarios.Find(id);
                ctx.Usuarios.Remove(usuarioProcurado);
                ctx.SaveChanges();
            }
        }

        public List<Usuarios> Listar()
        {
            using (MonitoramentoContext ctx = new MonitoramentoContext())
            {
                return ctx.Usuarios.ToList();
            }
        }
    }
}
