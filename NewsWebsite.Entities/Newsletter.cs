using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace NewsWebsite.Entities
{
    public class Newsletter
    {
        [Key]
        public string Email { get; set; }
        public DateTime? RegisterDateTime { get; set; }
        public bool IsActive { get; set; }
    }
}
