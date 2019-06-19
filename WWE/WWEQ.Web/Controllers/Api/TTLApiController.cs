using System.Net;
using System.Net.Http;
using System.Web.Http;
using WWEQ.Web.Interface;
using WWEQ.Web.Models.AddRequest;
using WWEQ.Web.Models.Domain;
using WWEQ.Web.Responses;

namespace WWEQ.Web.Controllers.Api
{
    [AllowAnonymous]
    [RoutePrefix("api/ttl")]
    public class TTLApiController : ApiController
    {
        private ITTLService _ttlService;
        
        public TTLApiController(ITTLService tTLService)
        {
            _ttlService = tTLService;
        }

        [HttpPost]
        [Route]
        public HttpResponseMessage Insert(TTLAddRequest model)
        {
            int id = _ttlService.Insert(model);
            ItemResponse<int> resp = new ItemResponse<int>();
            resp.Item = id;

            return Request.CreateResponse(HttpStatusCode.OK, resp);
        }

        [HttpGet]
        [Route]
        public HttpResponseMessage SelectAll()
        {
            ItemsResponse<TTLDomainModel> resp = new ItemsResponse<TTLDomainModel>();
            resp.Items = _ttlService.SelectAll();
            return Request.CreateResponse(HttpStatusCode.OK, resp);
        }
    }
}