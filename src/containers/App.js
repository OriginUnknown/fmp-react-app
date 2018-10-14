import React, { Component } from 'react';
import APP_CONST from '../resources/en-GB';
import Header from '../components/Navigation/Header';
import ButtonItem from '../components/Button/Button';

import './App.css';

class App extends Component {

  openModalAddNote = () => {
    console.log(`Open modal window to add note`);
  }

  render() {
    return (
      <div className="App">
      <Header title={APP_CONST.NAVIGATION.HEADER.title } />
        <div>
            <ButtonItem
              label={ APP_CONST.HOME.BUTTONS.ADD_NOTE }
              clickAction={this.openModalAddNote}
            />
          </div>
      </div>
    );
  }
}

export default App;
