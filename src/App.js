import React, { Component } from 'react';

/*
 * CSS
 */
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="title"><i className="fas fa-chevron-left" /> Moss Taekwondo Klubb <i className="fas fa-chevron-right"/></h1>
      <p className="subtitle">Østfolds eldste og største Taekwondoklubb.</p>
      </div>
    );
  }
}

export default App;
