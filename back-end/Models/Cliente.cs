using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class Cliente
    {
        public string guid  { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }
        public string Celular { get; set; }
        public string Email { get; set; }
        public string CPF { get; set; }
    }
}
