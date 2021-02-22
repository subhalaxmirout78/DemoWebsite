using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Webapp.Data;

namespace Webapp.WebAPI.Controllers
{
    public class RoleController : ApiController
    {
        DemoWebEntities db = new DemoWebEntities();

        [HttpGet]
        
        public dynamic GetAll()
        {
            return db.Roles.ToList();
        }

        [HttpPost]
        public dynamic Add(dynamic postData)
        {
            var roleName = (string)postData.Name;
            var roleDesc = (string)postData.Desc;

            var role = new Role()
            {
                Name = roleName,
                Description = roleDesc,
                IsActive = true
            };

            db.Roles.Add(role);
            var rowCount = db.SaveChanges();

            return rowCount;

        }

    }
}