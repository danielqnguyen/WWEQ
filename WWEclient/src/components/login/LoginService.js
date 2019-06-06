import axios from 'axios';

class LoginService {
  static loginUser(email, password, onSuccess, onError) {
    axios.post(`/token`, {
      grant_type: "password", email, password
    })
      .then(onSuccess)
      .catch(onError);
  }
}

export default LoginService;
