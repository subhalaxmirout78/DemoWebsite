using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Webapp.Web.Controllers
{
    public class LogInController : Controller
    {
        // GET: LogIn
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Success()
        {
            return View();
        }
        public ActionResult Failure()
        {
            return View();
        }

        public ActionResult ResetPassword()
        {
            return View();
        }

    }
}