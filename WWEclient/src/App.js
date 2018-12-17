import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'


// import SideNavPage from './components/SideNavTest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <Navigation />
          {/* <SideNavPage /> */}
        </div>
      </div>
    );
  }
}

export default App;
