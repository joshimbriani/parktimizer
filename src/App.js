import React, { Component } from 'react';
import Navigation from './Navigation';
import { Route } from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';

import parkRides from './data/parkRides';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          {parkRides.map((park, index) => {
            return (
              <Route key={index} path={"/" + park.NameAbbrev} component={Home} />
            )
          })}
          
        </div>
      </div>
    );
  }
}

export default App;
