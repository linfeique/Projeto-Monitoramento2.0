using BackEnd.Domains;
using BackEnd.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace BackEnd.Repositories
{
    public class EquipamentoRepository : IEquipamentoRepository
    {
        public void Atualizar(Equipamento equipamento)
        {
            using (MoniTechContext ctx = new MoniTechContext())
            {
                ctx.Equipamento.Update(equipamento);
                ctx.SaveChanges();
            }
        }

        public void Cadastrar(Equipamento equipamento)
        {
            using (MoniTechContext ctx = new MoniTechContext())
            {
                ctx.Equipamento.Add(equipamento);
                ctx.SaveChanges();
            }
        }

        public List<Equipamento> Listar()
        {
            using (MoniTechContext ctx = new MoniTechContext())
            {
                return ctx.Equipamento.ToList();
            }
        }

        public string MonitoramentoManual(string ipEquipamento)
        {
            Ping pingSender = new Ping();
            PingOptions options = new PingOptions();

            options.DontFragment = true;

            string data = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
            byte[] buffer = Encoding.ASCII.GetBytes(data);
            int timeout = 120;
            PingReply reply = pingSender.Send(ipEquipamento, timeout, buffer, options);

            return reply.Status.ToString();
        }
    }
}
