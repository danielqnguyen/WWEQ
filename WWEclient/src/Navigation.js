import React from 'react';
import { Route } from 'react-router-dom'
import { Navbar, NavbarNav, NavItem, NavLink } from "mdbreact";
import LocationFinder from './components/random/LocationFinder'
import FoodRandomizer from './components/random/TestRandom'
import Winner from './components/random/Winner'


class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar color="indigo" dark expand="md">
          <NavbarNav left>
            <NavItem>
              <NavLink to="/">
                <strong className="white-text">WWEQ</strong>
              </NavLink>
            </NavItem>
          </NavbarNav>
        </Navbar >
        <Route exact path="/" component={LocationFinder} />
        <Route exact path="/random" component={FoodRandomizer} />
        <Route exact path="/winner" component={Winner} />
      </React.Fragment >
    )
  }
}

export default Navigation;