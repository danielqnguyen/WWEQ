import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import LocationFinder from './components/random/LocationFinder'
import FoodRandomizer from './components/random/TestRandom'
import Winner from './components/random/Winner'
import RegisterFood from './components/users/RegisterFood'
// import Scraping from './components/users/TestScraping'
import AllRProfile from './components/restaurant/AllRProfile'
import RProfile from './components/restaurant/RProfile'
import REdit from './components/restaurant/REdit'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleCollapse = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Router>
        <div>
          <Navbar color="indigo" dark expand="md">
            <NavbarBrand>
              <strong className="white-text">WWEQ</strong>
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleCollapse}
            />
            <Collapse
              id="navbarCollapse3"
              isOpen={this.state.isOpen}
              navbar
            >
              <NavbarNav left>
                <NavItem>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/random">Randomizer</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink to="/register">Register</NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <Dropdown>
                    <DropdownToggle nav caret>
                      <div className="d-none d-md-inline">Restaurants</div>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/arprofile">All Profiles</DropdownItem>
                      <DropdownItem href="/register">Register</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem> */}
              </NavbarNav>
            </Collapse>
          </Navbar>


          <Route exact path="/" component={LocationFinder} />
          <Route exact path="/random" component={FoodRandomizer} />
          <Route exact path="/winner" component={Winner} />
          <Route path="/register" component={RegisterFood} />
          <Route path="/arprofile" component={AllRProfile} />
          <Route path="/rprofile" component={RProfile} />
          <Route path="/redit/:id" component={REdit} />
        </div>
      </Router>
    )
  }
}

export default Navigation