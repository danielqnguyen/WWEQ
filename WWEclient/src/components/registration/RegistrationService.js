import axios from 'axios';

class RegistrationService {
  static registerUser(data, onSuccess, onError) {
    axios.post(`/api/Account/register`, data)
      .then(onSuccess)
      .catch(onError);
  }
}

export default RegistrationService;
