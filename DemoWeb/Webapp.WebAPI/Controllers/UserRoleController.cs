using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Webapp.Data;

namespace Webapp.WebAPI.Controllers
{
    public class UserRoleController : ApiController
    {
        private DemoWebEntities db = new DemoWebEntities();

        [HttpGet]
        public dynamic GetAll()
        {
            return db.UserRoles.ToList();
        }
    }
}