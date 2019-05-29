using System;
using System.Collections.Generic;

namespace Projeto_Monitoramento2.Domains
{
    public partial class Estados
    {
        public Estados()
        {
            Equipamento = new HashSet<Equipamento>();
        }

        public int Id { get; set; }
        public string Estado { get; set; }

        public ICollection<Equipamento> Equipamento { get; set; }
    }
}
