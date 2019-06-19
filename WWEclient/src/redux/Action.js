import axios from 'axios'

// export function getLocation(location) {
//   return {
//     type: "GET_USER_LOCATION",
//     payload: location
//   }
// }

export function loginUser(userName, password) {
  const data = `grant_type=password&username=${userName}&password=${password}`;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  return {
    type: "LOGIN_USER",
    payload: axios
      .post("/token", data, { headers: headers, withCredentials: true })
      .then(resp => {
        sessionStorage.setItem("token", resp.data.access_token);
        return resp.data;
      })
      .catch(err => console.error(err))
  };
}

export function getId(email) {
  return {
    type: "GET_USER_ID",
    payload: axios
      .get(`/api/users/getid?email=${email}`, { withCredentials: true })
      .then(resp => {
        sessionStorage.setItem("userId", resp.data.Item);
        return resp;
      })
      .catch(err => console.error(err))
  };
}