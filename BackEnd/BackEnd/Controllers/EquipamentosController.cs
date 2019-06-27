using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Domains;
using BackEnd.Interfaces;
using BackEnd.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class EquipamentosController : ControllerBase
    {
        private IEquipamentoRepository equipamentoRepository { get; set; }

        public EquipamentosController()
        {
            equipamentoRepository = new EquipamentoRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(equipamentoRepository.Listar());
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Equipamento equipamento)
        {
            try
            {
                equipamentoRepository.Cadastrar(equipamento);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public IActionResult Atualizar(Equipamento equipamento)
        {
            try
            {
                equipamentoRepository.Atualizar(equipamento);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost("monitoramentomanual")]
        public IActionResult MonitoramentoManual(Equipamento equipamento)
        {
            try
            {
                return Ok(equipamentoRepository.MonitoramentoManual(equipamento.Address));
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}