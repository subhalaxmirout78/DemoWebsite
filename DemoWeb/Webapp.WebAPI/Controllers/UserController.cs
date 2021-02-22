using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Webapp.Data;

namespace Webapp.WebAPI.Controllers
{
    public class UserController : ApiController
    {
        private DemoWebEntities db = new DemoWebEntities();

        [HttpGet]
        public dynamic GetAll()
        {
            return db.Users.ToList();
        }

        [HttpPost]
        public dynamic Validate(dynamic postData)
        {
            var username = (string)postData.UserName;
            var password = (string)postData.Password;


            var validUser = db.Users
                .Where(x => x.UserName == username && x.Password == password)
                .Select(x => new
                {
                    x.UserName,
                    x.Password
                })
                .FirstOrDefault();

            return validUser;

        }


        [HttpPost]
        public dynamic Add(dynamic postData)
        {
            var UserName = (string)postData.Name;
            var Password = (string)postData.Password;

            var user = new User()
            {
                UserName = UserName,
                Password = Password,
                IsActive = true
            };

            db.Users.Add(user);
            var rowCount = db.SaveChanges();

            return rowCount;

        }




        [HttpPost]
        public dynamic ResetPassword(dynamic postData)
        {
            var returnValue = "";
            var username = (string)postData.UserName;
            var oldPassword = (string)postData.OldPassword;
            var newPassword = (string)postData.NewPassword;

            var user = db.Users.Where(x => x.UserName == username && x.Password == oldPassword).FirstOrDefault();

            if (user != null)
            {
                user.Password = newPassword;
                db.Entry(user).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                returnValue = "Password Changed Successfully";
            }
            else
            {
                returnValue = "Please Try Again.";
            }

            return returnValue;



        }
    }
}