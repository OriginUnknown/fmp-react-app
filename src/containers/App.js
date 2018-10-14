import React, { Component } from 'react';
import APP_CONST from '../resources/en-GB';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>{ APP_CONST.TEST.MESSAGE }</p>
      </div>
    );
  }
}

export default App;
