import React, { Component } from 'react';
import APP_CONST from '../resources/en-GB';
import Header from '../components/Navigation/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header title={APP_CONST.NAVIGATION.HEADER.title } />
          <p>{ APP_CONST.TEST.MESSAGE }</p>
      </div>
    );
  }
}

export default App;
