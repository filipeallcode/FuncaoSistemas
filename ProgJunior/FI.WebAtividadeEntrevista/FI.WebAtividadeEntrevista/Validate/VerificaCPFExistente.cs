using FI.AtividadeEntrevista.BLL;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Web;

namespace WebAtividadeEntrevista.Validate
{
    public class VerificaCPFExistente : ValidationAttribute
    {
        public VerificaCPFExistente()
        {

        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            ValidationResult ErrorMessage = new ValidationResult(this.FormatErrorMessage(validationContext.DisplayName));
            
            string cpf = value.ToString();
            
            BoCliente bo = new BoCliente();

            return bo.VerificarExistencia(cpf) ? ErrorMessage : null;
        }

    }
}