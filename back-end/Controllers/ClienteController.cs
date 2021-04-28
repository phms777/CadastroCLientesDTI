using back_end.IServices;
using back_end.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {

        IClienteService _clienteService;

        public ClienteController (IClienteService clienteService)
        {
            _clienteService = clienteService;
        }
       
        [HttpGet]
        public List<Cliente> ObterTodos()
        {
            return _clienteService.ObterTodos();
        }

        [HttpGet("{guid}", Name="Get")]
        public Cliente ObterEspecifico(string guid)
        {
            return _clienteService.ObterEspecifico(guid);
        }


       
        [HttpPost]
        public List<Cliente> Salvar ([FromBody] Cliente cliente)
        {
            return _clienteService.Salvar(cliente);
        }

        [HttpPut]
        public List<Cliente> Modificar([FromBody] Cliente cliente)
        {
            return _clienteService.Modificar(cliente);
        }

        [HttpDelete("{guid}")]
        public List<Cliente> Deletar(string guid)
        {
            return _clienteService.Deletar(guid);
        }


    }
}
