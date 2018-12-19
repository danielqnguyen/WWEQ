import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import LocationFinder from './components/random/LocationFinder';
import FoodRandomizer from './components/random/TestRandom';
import Winner from './components/random/Winner';


class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavLink to="/">
          <strong style={{ color: "White" }}>WWEQ</strong>
        </NavLink >

        <Route exact path="/" component={LocationFinder} />
        <Route exact path="/random" component={FoodRandomizer} />
        <Route exact path="/winner" component={Winner} />
      </React.Fragment >
    )
  };
}

export default Navigation;