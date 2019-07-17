import React from "react";
import { Route, NavLink } from "react-router-dom";
import InformationInput from "./components/random/InformationInput";
import FoodRandomizer from "./components/random/Randomizer";
import Winner from "./components/random/Winner";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";

const Navigation = () => {
  const logout = () => {
    sessionStorage.clear();
    document.location.reload(true);
  };
  if (sessionStorage.length === 0) {
    return (
      <React.Fragment>
        <NavLink to="/">
          <img
            src="https://www.w3schools.com/html/pic_trulli.jpg"
            width="60px"
            height="45px"
          />
          {/* placeholder logo */}
        </NavLink>
        <NavLink to="/register">
          <c style={{ color: "White", float: "right" }}>Register</c>
        </NavLink>
        <NavLink to="/login">
          <c style={{ color: "White", float: "right", paddingRight: "5px" }}>
            Login
          </c>
        </NavLink>

        <Route exact path="/" component={InformationInput} />
        <Route exact path="/random" component={FoodRandomizer} />
        <Route exact path="/winner" component={Winner} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/login" component={Login} />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <NavLink to="/">
          <img
            src="https://www.w3schools.com/html/pic_trulli.jpg"
            width="60px"
            height="45px"
          />
          {/* placeholder logo */}{" "}
        </NavLink>
        <button
          className="btn btn-success"
          onClick={() => logout()}
          style={{ float: "right", height: "35px" }}
        >
          LogOut
        </button>
        <p style={{ color: "White", float: "right", paddingRight: "5px" }}>
          Hi, {sessionStorage.userName}!
        </p>

        <Route exact path="/" component={InformationInput} />
        <Route exact path="/random" component={FoodRandomizer} />
        <Route exact path="/winner" component={Winner} />
      </React.Fragment>
    );
  }
};

export default Navigation;
