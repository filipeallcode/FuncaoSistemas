using FI.AtividadeEntrevista.BLL;
using FI.AtividadeEntrevista.DML;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using WebAtividadeEntrevista.Models;

namespace WebAtividadeEntrevista.Controllers
{
    public class BeneficiarioController : Controller
    {
        public ActionResult Beneficiarios()
        {
            return PartialView("_PartialBeneficiarios");
        }

        [HttpPost]
        public JsonResult Incluir(BeneficiarioModel model)
        {
            BoBeneficiario bo = new BoBeneficiario();

            if (!this.ModelState.IsValid)
            {
                List<string> erros = (from item in ModelState.Values
                                      from error in item.Errors
                                      select error.ErrorMessage).ToList();

                Response.StatusCode = 400;
                return Json(string.Join(Environment.NewLine, erros));
            }
            else
            {
                model.Id = bo.Incluir(new Beneficiario()
                {
                    Nome = model.Nome,
                    CPF = model.CPF,
                    IdCliente = model.IdCliente
                });

                return Json("Beneficiário cadastrado com sucesso");
            }
        }

        //[HttpGet]
        public JsonResult BeneficiarioList(long idCliente)
        {
            try
            {
                List<Beneficiario> beneficiarios = new BoBeneficiario().Pesquisa(idCliente);
                BeneficiarioModel model = null;

                List<BeneficiarioModel> models = new List<BeneficiarioModel>();

                if (beneficiarios != null)
                {
                    foreach (var item in beneficiarios)
                    {
                        model = new BeneficiarioModel()
                        {
                            Nome = item.Nome,
                            CPF = item.CPF,
                            Id = item.Id,
                            IdCliente = item.IdCliente
                        };
                        
                        models.Add(model);
                    }
                }
                //Return result to jTable
                return Json(models, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message });
            }
            
        }

    }
}