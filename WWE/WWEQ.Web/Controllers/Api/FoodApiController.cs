using System.Net;
using System.Net.Http;
using System.Web.Http;

using WWEQ.Web.Interface;
using WWEQ.Web.Models;
using WWEQ.Web.Models.Domain;
using WWEQ.Web.Responses;

namespace WWEQ.Web.Controllers.Api
{
    [AllowAnonymous]
    [RoutePrefix("api/food")]
    public class FoodApiController : ApiController
    {
        private IFoodService _foodService;

            public FoodApiController(IFoodService foodService)
        {
            _foodService = foodService;
        }

        [HttpPost]
        [Route]
        public HttpResponseMessage Insert(FoodAddRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    int id = _foodService.Insert(model);
                    ItemResponse<int> resp = new ItemResponse<int>();
                    resp.Item = id;

                    return Request.CreateResponse(HttpStatusCode.OK, resp); 
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public HttpResponseMessage SelectById(int id)
        {
            try
            {
                ItemResponse<FoodDomainModel> resp = new ItemResponse<FoodDomainModel>();
                resp.Item = _foodService.SelectById(id);
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route("{name}")]
        public HttpResponseMessage SelectByName(string name)
        {
            try
            {
                ItemResponse<FoodDomainModel> resp = new ItemResponse<FoodDomainModel>();
                resp.Item = _foodService.SelectByName(name);
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (System.Exception ex) 
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route]
        public HttpResponseMessage SelectAll()
        {
            try
            {
                ItemsResponse<FoodDomainModel> resp = new ItemsResponse<FoodDomainModel>();
                resp.Items = _foodService.SelectAll();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpPut]
        [Route("{id:int}")]
        public HttpResponseMessage Update(FoodDomainModel model)
        {
            try
            {
                _foodService.Update(model);
                SuccessResponse resp = new SuccessResponse();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpDelete]
        [Route("{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                _foodService.Delete(id);
                SuccessResponse resp = new SuccessResponse();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}