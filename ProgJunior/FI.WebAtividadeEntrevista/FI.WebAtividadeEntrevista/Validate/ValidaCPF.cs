using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebAtividadeEntrevista.Models;
using System.Text.RegularExpressions;

namespace WebAtividadeEntrevista.Validate
{
    public class ValidaCPF : ValidationAttribute
    {
        public string CPF { get; }
        public ValidaCPF()
        {
            
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            ValidationResult ErrorMessage = new ValidationResult(this.FormatErrorMessage(validationContext.DisplayName));

            if (value == null)
                return ErrorMessage;
            
            string cpf = Regex.Replace(value.ToString(), @"[\D]", "");
            int soma;
            int resto;

            // Verifica se todos os dígitos são iguais
            if (cpf.All(c => c.Equals(cpf.First())))
                return ErrorMessage;

            // Verifica se CPF é vazio
            if (cpf == "")
                return ErrorMessage;

            // Valida primeiro dígito verificador
            soma = 0;

            for (int i = 1; i <= 9; i++)
                soma += int.Parse(cpf.Substring(i - 1, 1)) * (11 - i);

            resto = (soma * 10) % 11;

            if ((resto == 10) || (resto == 11)) 
                resto = 0;

            if (resto != int.Parse(cpf.Substring(9, 1)))
                return ErrorMessage;

            // Valida segundo dígito verificador
            soma = 0;

            for (int i = 1; i <= 10; i++)
                soma += int.Parse(cpf.Substring(i - 1, 1)) * (12 - i);

            resto = (soma * 10) % 11;

            if ((resto == 10) || (resto == 11))
                resto = 0;

            if (resto != int.Parse(cpf.Substring(10, 1)))
                return ErrorMessage;

            return null;
        }
    }
}