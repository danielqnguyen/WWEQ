using System;
using System.Net;
using System.Net.Http;
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
            try
            {
                object url = _webScraping.ScrapeSite(model);
                return Request.CreateResponse(HttpStatusCode.OK, url);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}