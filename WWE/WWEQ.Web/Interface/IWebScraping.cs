using WWEQ.Web.Models.Domain;

namespace WWEQ.Web.Interface
{
    public interface IWebScraping
    {
        object ScrapeSite(WebScrapingModel model);
      }
}
