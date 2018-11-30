import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="background">
          <div className="App-intro">
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
