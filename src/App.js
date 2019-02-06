/*
 * Components
 */
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import React, { Component } from 'react';

/*
 * CSS
 */
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          path="/"
          component={Header}
        />
      </Router>
    );
  }
}

export default App;
