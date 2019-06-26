using System;
using System.Collections.Generic;

namespace BackEnd.Domains
{
    public partial class Usuarios
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public DateTime DataCriacao { get; set; }
        public int? IdTipoUsuario { get; set; }

        public TiposUsuario IdTipoUsuarioNavigation { get; set; }
    }
}
