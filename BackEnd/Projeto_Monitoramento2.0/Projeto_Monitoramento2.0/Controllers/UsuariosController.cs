using System;
using Microsoft.AspNetCore.Mvc;
using Projeto_Monitoramento2.Interfaces;
using Projeto_Monitoramento2.Repositories;

namespace Projeto_Monitoramento2.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }

        public UsuariosController()
        {
            usuarioRepository = new UsuarioRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(usuarioRepository.Listar());
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}