import axios from 'axios'

class UsersService {
  static register(data, onSuccess, onError) {
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

  static crudRegister(data, onSuccess, onError) {
    axios.post("/api/food", data)
      .then(response => onSuccess('success', response))
    // .catch(error => onError(error));
  }

  static crudById(id, onSuccess, onError) {
    axios.get(`/api/food/${id}`)
      .then(response => onSuccess('success', response))
    // .catch(error => onError(error));
  }

  static crudAll(onSuccess, onError) {
    axios.get("/api/food")
      .then(response => onSuccess('success', response))
    // .catch(error => onError(error));
  }

  static crudUpdate(id, onSuccess, onError) {
    axios.put(`/api/food/${id}`)
      .then(response => onSuccess('success', response))
    // .catch(error => onError(error));
  }

  static crudDelete(id, onSuccess, onError) {
    axios.delete(`/api/food/${id}`)
      .then(response => onSuccess('success', response))
    // .catch(error => onError(error));
  }
}

export default UsersService