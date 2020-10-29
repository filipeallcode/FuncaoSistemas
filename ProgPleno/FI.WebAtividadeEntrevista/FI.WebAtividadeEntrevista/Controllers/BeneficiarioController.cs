using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace WebAtividadeEntrevista.Controllers
{
    public class BeneficiarioController : Controller
    {
        public ActionResult Beneficiarios()
        {
            return PartialView("_PartialBeneficiarios");
        }
    }
}