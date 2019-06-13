import axios from 'axios';

class LoginService {
  static loginUser(email, password, onSuccess, onError) {
    const data = `grant_type=password&username=${email}&password=${password}`;
    const headers = { "Content-Type": "application/x-www-form-urlencoded" };
    axios.post(`/token`, data, { headers: headers, withCredentials: true})
      .then(onSuccess)
      .catch(onError);
  }
}

export default LoginService;
