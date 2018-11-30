import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LocationFinder from './components/random/LocationFinder'
import FoodRandomizer from './components/random/TestRandom'
import Winner from './components/random/Winner'
import Register from './components/users/Register'
import Scraping from './components/users/TestScraping'

const Navigation = () => (
  <Router>
    <div>
      <button type="button" className="btn btn-dark">
        <Link to="/">Home</Link>
      </button>
      <button type="button" className="btn btn-dark">
        <Link to="/random">Randomizer</Link>
      </button>
      <button type="button" className="btn btn-dark">
        <Link to="/register">register</Link>
      </button>
      <button type="button" className="btn btn-dark">
        <Link to="/test">test</Link>
      </button>


      <Route exact path="/" component={LocationFinder} />
      <Route exact path="/random" component={FoodRandomizer} />
      <Route exact path="/winner" component={Winner} />
      <Route path="/register" component={Register} />
      <Route path="/test" component={Scraping} />


    </div>
  </Router>
)

export default Navigation