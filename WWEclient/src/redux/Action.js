// import axios from 'axios'

export function getLocation(location) {
  return {
    type: "GET_USER_LOCATION",
    payload: location
  }
}

// export function loginUser(userName, password) {
//   const data = `grant_type=password&username=${userName}&password=${password}`;
//   const headers = { "Content-Type": "application/x-www-form-urlencoded" };
//   return {
//     type: "LOGIN_USER",
//     payload: axios
//       .post("/token", data, { headers: headers, withCredentials: true })
//       .then(resp => {
//         sessionStorage.setItem("token", resp.data.access_token);
//         return resp.data;
//       })
//       .catch(err => console.error(err))
//   };
// }