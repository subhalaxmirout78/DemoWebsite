using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Webapp.Web.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult UserManagement()
        {
            return View();
        }
        public ActionResult RoleManagement()
        {
            return View();
        }

        public ActionResult UserRoleManagement()
        {
            return View();
        }

    }
}