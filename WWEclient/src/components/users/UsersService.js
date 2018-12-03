import axios from 'axios'

class UsersService {
  static register(data, onSuccess, onError) {
    axios.post("/api/account/register", data)
      .then(onSuccess)
      .catch(onError);
  }

  static testScraper(body, onSuccess, onError) {
    console.log(body)
    axios.post("/api/testscrape", body)
      .then(onSuccess)
      .catch(onError);
  }

  static crudRegister(data, onSuccess, onError) {
    axios.post("/api/food", data)
      .then(onSuccess)
      .catch(onError);
  }

  static crudById(id, onSuccess, onError) {
    axios.get(`/api/food/${id}`)
      .then(onSuccess)
      .catch(onError);
  }

  static crudAll(onSuccess, onError) {
    axios.get("/api/food")
      .then(onSuccess)
      .catch(onError);
  }

  static crudUpdate(id, data, onSuccess, onError) {
    axios.put(`/api/food/${id}`, data)
      .then(onSuccess)
      .catch(onError);
  }

  static crudDelete(id, onSuccess, onError) {
    axios.delete(`/api/food/${id}`)
      .then(onSuccess)
      .catch(onError);
  }
}

export default UsersService