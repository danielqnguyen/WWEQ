import axios from 'axios';

class TTLService {
  static noted(data, onSuccess, onError) {
    axios.post("/api/ttl", data)
      .then(onSuccess)
      .catch(onError);
  };

  static list(onSuccess, onError) {
    axios.get("/api/ttl")
      .then(onSuccess)
      .catch(onError);
  };
}

export default TTLService;