import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import APP_CONST from '../resources/en-GB';
import Header from '../components/Navigation/Header';
import ButtonItem from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import { newNote, hideModal } from '../actions/NoteList.actions';

import './App.css';

class App extends Component {
  state = {}

  openModalAddNote = () => {
    this.props.newNote();
  }

  addNoteToStore = (newNoteToAdd) => {
    let newNote = {
      title: "Test title",
      description: "Test description",
      id: v4()
    };
    this.props.addNote(newNote);
    this.hideModal();
  }

  hideModal = () => {
    this.props.hideModal();
  }

  render() {
    return (
      <div className="App">
      <Header title={APP_CONST.NAVIGATION.HEADER.title } />
        <div>
            <ButtonItem
              label={ APP_CONST.HOME.BUTTONS.ADD_NOTE }
              clickAction={ this.openModalAddNote }
            />
          </div>
          <Modal
          showModal={ this.props.showModal}
          content={ APP_CONST.HOME.MODAL[this.props.modal.contentKey] }
          closeModal={ this.hideModal }>
          <p>hello modal</p>
          </Modal>
      </div>
    );
  }
}

// to map state properties to the App this.props
const mapStateToProps = state => state;
const mapDispatchToProps = {
  newNote, hideModal
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
