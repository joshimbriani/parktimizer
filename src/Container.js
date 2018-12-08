import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

class Container extends Component {
  render() {
    return (
      <Router>
          <Route path="/" component={App} />
      </Router>
    );
  }
}

export default Container;