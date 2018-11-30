import axios from 'axios'

class UsersService {
  static register(data, onSuccess, onError) {
    console.log(data)
    axios.post("/api/account/register", data)
      .then(response => onSuccess('success', response))
    // .catch(error => onError(error));
  }

  static testScraper(body, onSuccess, onError) {
    console.log(body)
    axios.post("/api/testscrape", body)
      .then(onSuccess)
      .catch(onError);
  }

  // static testScraper(data, onSuccess, onError) {
  //   console.log(JSON.stringify(data))

  //   const url = '/api/testScrape'
  //   const config = {
  //     method: "POST",
  //     yelpUrl: JSON.stringify(data)
  //   }
  //   axios(url, config)
  //     .then(onSuccess)
  //     .catch(onError)
  // }
}

export default UsersService