using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WWEQ.Web.Interface;
using WWEQ.Web.Models.Domain;

namespace WWEQ.Web.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/testScrape")]
    public class TestScrapeController : ApiController
    {
        private IWebScraping _webScraping;

        public TestScrapeController(IWebScraping webscraping)
        {
            _webScraping = webscraping;
        }

        [HttpPost]
        [Route]
        public HttpResponseMessage ScrapeSite(WebScrapingModel model)
        {
            object url = _webScraping.ScrapeSite(model);
            return Request.CreateResponse(HttpStatusCode.OK, url);
        }
    }
}