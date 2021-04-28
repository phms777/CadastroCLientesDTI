using back_end.IServices;
using back_end.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Services
{
    public class ClienteService : IClienteService
    {
        List<Cliente> _clientes = new List<Cliente>();
        public List<Cliente> Deletar(string guidCliente)
        {
            _clientes.RemoveAll(x => x.guid == guidCliente);
            return _clientes;
        }

        public List<Cliente> Modificar(Cliente cliente)
        {
            Cliente tempCliente = _clientes.FirstOrDefault(x => x.guid == cliente.guid);
            tempCliente = cliente;
            return _clientes;
        }

        public Cliente ObterEspecifico(string guidCliente)
        {
            return _clientes.SingleOrDefault(x => x.guid == guidCliente);
        }

        public List<Cliente> ObterTodos()
        {
            return _clientes;
        }

        public List<Cliente> Salvar(Cliente cliente)
        {
            _clientes.Add(cliente);
            return _clientes;
        }
    }
}
