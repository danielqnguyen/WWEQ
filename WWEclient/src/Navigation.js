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
          <strong style={{ color: "White" }}>WWEQ</strong>
        </NavLink>
        <NavLink to="/register">
          <strong style={{ color: "White" }}>Register</strong>
        </NavLink>
        <NavLink to="/login">
          <strong style={{ color: "White" }}>Login</strong>
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
          <strong style={{ color: "White" }}>WWEQ</strong>
        </NavLink>
        <p style={{ color: "White" }}>Welcome {sessionStorage.userName}!</p>
        <button className="btn btn-success" onClick={() => logout()}>
          <strong style={{ color: "White" }}>LogOut</strong>
        </button>

        <Route exact path="/" component={InformationInput} />
        <Route exact path="/random" component={FoodRandomizer} />
        <Route exact path="/winner" component={Winner} />
      </React.Fragment>
    );
  }
};

export default Navigation;
