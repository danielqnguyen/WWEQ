import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import LocationFinder from './components/random/LocationFinder'
import FoodRandomizer from './components/random/TestRandom'
import Winner from './components/random/Winner'
import RegisterFood from './components/users/RegisterFood'
// import Scraping from './components/users/TestScraping'
import AllRProfile from './components/restaurant/AllRProfile'
import RProfile from './components/restaurant/RProfile'
import REdit from './components/restaurant/REdit'
import TopTen from './components/toptenlist/TTL'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ClickOutside from './components/ClickOutSide'



class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  // toggleCollapse = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Router>
        <Route render={({ location, history }) => (
          <React.Fragment>
            <ClickOutside
              onClickOutside={() => {
                this.setState({ expanded: false });
              }}
            >
              <SideNav
                expanded={this.state.expanded}
                onToggle={(expanded) => {
                  this.setState({ expanded });
                }}
                onSelect={(selected) => {
                  const to = '/' + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="">
                  <NavItem eventKey="">
                    <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      Home
                        </NavText>
                  </NavItem>
                  <NavItem eventKey="random">
                    <NavIcon>
                      <i className="fa fa-fw fa-random" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      Random
                        </NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
            </ClickOutside>
            <main>
              <Route exact path="/" component={LocationFinder} />
              <Route exact path="/random" component={FoodRandomizer} />
              <Route exact path="/winner" component={Winner} />
              <Route path="/register" component={RegisterFood} />
              <Route path="/arprofile" component={AllRProfile} />
              <Route path="/rprofile" component={RProfile} />
              <Route path="/redit/:id" component={REdit} />
              <Route path="/list" component={TopTen} />
            </main>
          </React.Fragment>
        )}
        />
      </Router >

    )
  }
}

export default Navigation


// {/* <Navbar color="indigo" dark expand="md">
//             <NavbarBrand>
//               <strong className="white-text">WWEQ</strong>
//             </NavbarBrand>
//             <NavbarToggler
//               onClick={this.toggleCollapse}
//             />
//             <Collapse
//               id="navbarCollapse3"
//               isOpen={this.state.isOpen}
//               navbar
//             >
//               <NavbarNav left>
//                 <NavItem>
//                   <NavLink to="/">Home</NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink to="/random">Randomizer</NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink to="/list">Top 10</NavLink>
//                 </NavItem>
//                 {/* <NavItem>
//                   <NavLink to="/register">Register</NavLink>
//                 </NavItem> */}
// {/* <NavItem>
//                   <Dropdown>
//                     <DropdownToggle nav caret>
//                       <div className="d-none d-md-inline">Restaurants</div>
//                     </DropdownToggle>
//                     <DropdownMenu right>
//                       <DropdownItem href="/arprofile">All Profiles</DropdownItem>
//                       <DropdownItem href="/register">Register</DropdownItem>
//                       <DropdownItem href="#!">Something else here</DropdownItem>
//                       <DropdownItem href="#!">Something else here</DropdownItem>
//                     </DropdownMenu>
//                   </Dropdown>
//                 </NavItem> */}
// {/* </NavbarNav>
//             </Collapse>
//           </Navbar > * /} */}