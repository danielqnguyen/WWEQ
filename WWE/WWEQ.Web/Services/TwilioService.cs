using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using WWEQ.Web.Interface;

namespace WWEQ.Web.Services
{
    public class TwilioService : ITwilioService
    {
        public void SendText()
        {
            // Find your Account Sid and Token at twilio.com/console
            // DANGER! This is insecure. See http://twil.io/secure
            const string accountSid = "";
            const string authToken = "";

            TwilioClient.Init(accountSid, authToken);

            var message = MessageResource.Create(
                body: "Join Earth's mightiest heroes. Like Kevin Bacon.",
                from: new Twilio.Types.PhoneNumber("+16572758594"),
                to: new Twilio.Types.PhoneNumber("+17149245134")
            );
        }
    }
}