import React, { Component } from 'react';
import APP_CONST from '../resources/en-GB';
import Header from '../components/Navigation/Header';
import ButtonItem from '../components/Button/Button';
import Modal from '../components/Modal/Modal';

import './App.css';

class App extends Component {

  openModalAddNote = () => {
    console.log(`Open modal window to add note`);
  }

  hideModal = () => {
    console.log('hide modal');
  }

  render() {
    let modalContent = { title: "test title", description: "test description" };
    let showModal = true;
    return (
      <div className="App">
      <Header title={APP_CONST.NAVIGATION.HEADER.title } />
        <div>
            <ButtonItem
              label={ APP_CONST.HOME.BUTTONS.ADD_NOTE }
              clickAction={this.openModalAddNote}
            />
          </div>
          <Modal
          showModal={ showModal }
          content={ modalContent }
          closeModal={this.hideModal}>
          <p>hello modal</p>
          </Modal>
      </div>
    );
  }
}

export default App;
