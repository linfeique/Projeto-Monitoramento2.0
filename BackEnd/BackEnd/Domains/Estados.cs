﻿using System;
using System.Collections.Generic;

namespace BackEnd.Domains
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
