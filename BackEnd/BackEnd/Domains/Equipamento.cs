using System;
using System.Collections.Generic;

namespace BackEnd.Domains
{
    public partial class Equipamento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Address { get; set; }
        public int? IdEstado { get; set; }

        public Estados IdEstadoNavigation { get; set; }
    }
}
