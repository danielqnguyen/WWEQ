using AngleSharp.Parser.Html;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using WWEQ.Web.Interface;
using WWEQ.Web.Models.Domain;

namespace WWEQ.Web.Services
{
    public class WebScrapingService : IWebScraping
    {
       public object ScrapeSite(WebScrapingModel model)
        {
            var webClient = new WebClient();
            var html = webClient.DownloadString(model.Url);
            var parser = new HtmlParser();
            var document = parser.Parse(html);
            var map = document.QuerySelector(".biz-website");
            var url = map.QuerySelector("a").TextContent;
            return url;
        }
    }
}