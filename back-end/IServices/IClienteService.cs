using back_end.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.IServices
{
    public interface IClienteService
    {
        List<Cliente> ObterTodos();

        Cliente ObterEspecifico(string guidCliente);

        List<Cliente> Salvar(Cliente cliente);

        List<Cliente> Modificar(Cliente cliente);

        List<Cliente> Deletar(string guidCliente);

    }
}
