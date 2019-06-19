using System.Web.Http;
using WWEQ.Web.Interface;

namespace WWEQ.Web.Controllers.Api
{
    [AllowAnonymous]
    [RoutePrefix("api/twilio")]
    public class TwilioController : ApiController
    {
        private ITwilioService _twilioService;

        public TwilioController(ITwilioService twilioService)
        {
            _twilioService = twilioService;
        }

        [HttpPost]
        [Route]
        public void SendText()
        {
                _twilioService.SendText();
        }
    } 
}