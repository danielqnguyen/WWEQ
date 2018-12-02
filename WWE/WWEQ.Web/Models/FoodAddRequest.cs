using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WWEQ.Web.Models
{
    public class FoodAddRequest
    {
        public string Name { get; set; }
        public string Categories { get; set; }
        public string Phone { get; set; }
        public string Hours { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Range { get; set; }
        public string Rating { get; set; }
        public string Delivery { get; set; }
    }
}