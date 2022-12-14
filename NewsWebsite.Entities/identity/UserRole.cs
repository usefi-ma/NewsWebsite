using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace NewsWebsite.Entities.identity
{
    public class UserRole : IdentityUserRole<string>
    {
        public virtual Role Role { get; set; }
        public virtual User User { get; set; }
    }
}
