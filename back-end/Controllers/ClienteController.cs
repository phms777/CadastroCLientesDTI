using back_end.IServices;
using back_end.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [ApiController]
    public class ClienteController : ControllerBase
    {

        IClienteService _clienteService;

        public ClienteController (IClienteService clienteService)
        {
            _clienteService = clienteService;
        }

        [EnableCors]
        [HttpGet("api/listaClientes")]
        public IActionResult ObterTodos()
        {
            IEnumerable<Cliente> listaComResultado = _clienteService.ObterTodos();
            return new JsonResult(listaComResultado);
        }

        [EnableCors]
        [HttpGet("api/cliente/{guid}")]
        public IActionResult ObterEspecifico(string guid)
        {
            Cliente Resultado = _clienteService.ObterEspecifico(guid);
            return new JsonResult(Resultado);
        }


        [EnableCors]
        [HttpPost("api/salvarCliente")]
        public IActionResult Salvar ([FromBody] Cliente cliente)
        {
            IEnumerable<Cliente> listaComResultado = _clienteService.Salvar(cliente);
            return new JsonResult(listaComResultado);
        }

        [EnableCors]
        [HttpPut("api/modificarCliente/{guid}")]
        public IActionResult Modificar([FromBody] Cliente cliente)
        {
            IEnumerable<Cliente> listaComResultado = _clienteService.Modificar(cliente);
            return new JsonResult(listaComResultado);
        }

        [EnableCors]
        [HttpDelete("api/deletarCliente/{guid}")]
        public IActionResult Deletar(string guid)
        {
            IEnumerable<Cliente> listaComResultado = _clienteService.Deletar(guid);
            return new JsonResult(listaComResultado);
        }


    }
}
