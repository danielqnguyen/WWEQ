import axios from "axios";

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
        sessionStorage.setItem("userName", resp.data.userName);
        return resp.data;
      })
      .catch(err => console.error(err))
  };
}

export function loginStatus(token) {
  const config = {
    Authorization: `Bearer ${token}`
  };
  return {
    type: "CHECK_LOGIN_STATE",
    payload: axios
      .get(`/api/account/userinfo`, { headers: config })
      .then(resp => {
        if (sessionStorage.getItem("token") !== null) {
          return resp.data;
        } else {
          return false;
        }
      })
      .catch(err => {
        console.error(err);
        return false;
      })
  };
}

// export function logoutUser() {
//   return {
//     type: "LOGOUT_USER",
//     payload: new Promise((resolve, reject) => {
//       sessionStorage.removeItem("token");
//       sessionStorage.removeItem("userId");
//       setTimeout(() => {
//         resolve(true);
//       }, 500);
//     })
//   };
// }
