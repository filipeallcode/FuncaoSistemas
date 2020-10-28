using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebAtividadeEntrevista.Models;

namespace WebAtividadeEntrevista.Validate
{
    public class ValidaCPF
    {
        public void ValidadorCPF(ClienteModel model)
        {
            string cpf = model.CPF;
        }
    }
}