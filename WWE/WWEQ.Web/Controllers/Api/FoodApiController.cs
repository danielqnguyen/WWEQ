﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
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
        private IFoodService  _foodService;

            public FoodApiController(IFoodService foodService)
        {
            _foodService = foodService;
        }

        [HttpPost]
        [Route]
        public HttpResponseMessage Insert(FoodAddRequest model)
        {
            int id = _foodService.Insert(model);
            ItemResponse<int> resp = new ItemResponse<int>();
            resp.Item = id;

            return Request.CreateResponse(HttpStatusCode.OK, resp);
        }

        [HttpGet]
        [Route("{id:int}")]
        public HttpResponseMessage SelectById(int id)
        {
            ItemResponse<FoodDomainModel> resp = new ItemResponse<FoodDomainModel>();
            resp.Item = _foodService.SelectById(id);
            return Request.CreateResponse(HttpStatusCode.OK, resp);
        }

        [HttpGet]
        [Route]
        public HttpResponseMessage SelectAll()
        {
            ItemsResponse<FoodDomainModel> resp = new ItemsResponse<FoodDomainModel>();
            resp.Items = _foodService.SelectAll();
            return Request.CreateResponse(HttpStatusCode.OK, resp);
        }

        [HttpPut]
        [Route("{id:int}")]
        public HttpResponseMessage Update(FoodDomainModel model)
        {
            _foodService.Update(model);
            SuccessResponse resp = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.OK, resp);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            _foodService.Delete(id);
            SuccessResponse resp = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.OK, resp);
        }
    }
}