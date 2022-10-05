using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NewsWebsite.Areas.Admin.Controllers
{
    [Area(AreaConstants.adminArea)]
    public class BaseController : Controller
    {
        public IActionResult Notification()
        {
            return Content(TempData["notification"].ToString());
        }
    }
}