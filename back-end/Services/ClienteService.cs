using back_end.IServices;
using back_end.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace back_end.Services
{
    public class ClienteService : IClienteService
    {
        List<Cliente> _clientes = new List<Cliente>();
        public List<Cliente> Deletar(string guidCliente)
        {
            try
            {
                string jsonString = File.ReadAllText("DataBase/ClientesDTI.json");
                _clientes = JsonSerializer.Deserialize<List<Cliente>>(jsonString);
                _clientes.RemoveAll(x => x.guid == guidCliente);
                jsonString = JsonSerializer.Serialize(_clientes);
                File.WriteAllText("DataBase/ClientesDTI.json", jsonString);
                return _clientes;
            }
            catch
            {
                throw;
            }
        }

        public List<Cliente> Modificar(Cliente cliente)
        {
            try
            {
                string jsonString = File.ReadAllText("DataBase/ClientesDTI.json");
                _clientes = JsonSerializer.Deserialize<List<Cliente>>(jsonString);
                _clientes.RemoveAll(x => x.guid == cliente.guid);
                _clientes.Add(cliente);
                jsonString = JsonSerializer.Serialize(_clientes);
                File.WriteAllText("DataBase/ClientesDTI.json", jsonString);
                return _clientes;
            }
            catch
            {
                throw;
            }
        }

        public Cliente ObterEspecifico(string guidCliente)
        {
            try
            {
                string jsonString = File.ReadAllText("DataBase/ClientesDTI.json");
                _clientes = JsonSerializer.Deserialize<List<Cliente>>(jsonString);
                return _clientes.SingleOrDefault(x => x.guid == guidCliente);   
            }
            catch
            {
                throw;
            }
        }

        public List<Cliente> ObterTodos()
        {
            try
            {
                string jsonString = File.ReadAllText("DataBase/ClientesDTI.json");
                _clientes = JsonSerializer.Deserialize<List<Cliente>>(jsonString);
                return _clientes;
            }
            catch
            {
                throw;
            }
        }

        public List<Cliente> Salvar(Cliente cliente)
        {
            try
            {
                string jsonString = File.ReadAllText("DataBase/ClientesDTI.json");
                _clientes = JsonSerializer.Deserialize<List<Cliente>>(jsonString);
                _clientes.Add(cliente);
                jsonString = JsonSerializer.Serialize(_clientes);
                File.WriteAllText("DataBase/ClientesDTI.json", jsonString);
                return _clientes;
            }
            catch
            {
                throw;
            }
        }
    }
}
