using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WWEQ.Web.Models.Domain;

namespace WWEQ.Web.Interface
{
    public interface IWebScraping
    {
        object ScrapeSite(WebScrapingModel model);
       }
}
