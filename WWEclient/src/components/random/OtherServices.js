import axios from 'axios';

class SendTextApi {
  static sendText(onSuccess, onError){
    axios.post("api/twilio")
    .then(onSuccess)
    .catch(onError)
  }
}

export default SendTextApi;