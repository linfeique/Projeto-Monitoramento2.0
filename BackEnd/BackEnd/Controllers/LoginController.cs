using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using BackEnd.Domains;
using BackEnd.Interfaces;
using BackEnd.Repositories;
using BackEnd.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class LoginController : ControllerBase
    {
        private IUsuariosRepository usuariosRepository { get; set; }

        public LoginController()
        {
            usuariosRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                Usuarios usuarioProcurado = usuariosRepository.BuscarPorEmailSenha(login.email, login.senha);

                if (usuarioProcurado == null)
                {
                    return NotFound();
                }

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioProcurado.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, usuarioProcurado.Email),
                    new Claim("IdUsuario", usuarioProcurado.Id.ToString()),
                    new Claim("tipoUsuarioReact", usuarioProcurado.IdTipoUsuarioNavigation.Tipo)
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("monitech-chave-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "Monitech.WebApi",
                    audience: "Monitech.WebApi",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds
                );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}