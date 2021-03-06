import React, { Component } from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import { newNote, hideModal, addNote, viewNote } from '../actions/NoteList.actions';
import APP_CONST from '../resources/en-GB';
import Header from '../components/Navigation/Header';
import ButtonItem from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import NotePadInput from '../components/Notes/NotePad/NotePad';
import NoteList from '../components/Notes/NoteList/NoteList';
import NotePadReadOnly from '../components/Notes/NotePadReadOnly/NotePadReadOnly';


import './App.css';

class App extends Component {
  state = {}

  openModalAddNote = () => {
    this.props.newNote();
  }

  addNoteToStore = (newNoteToAdd) => {
    let newNote = {
      ...newNoteToAdd,
      id: v4()
    };
    this.props.addNote(newNote);
    this.hideModal();
  }

  openModalViewNote = (noteIndex) => {
    this.props.viewNote();
    let selectedNote = this.props.notes.reduce((initialValue, note, index) => {
      return (index === noteIndex) ? { ...note } : initialValue;
    }, null);
    // for App.js internal use only
    this.setState({ selectedNote: selectedNote });
  }

  handleModalContent = () => {
    switch(this.props.modal.contentKey) {
      case "NEW_NOTE" : {
        return (
          <NotePadInput
            mode={ this.props.modal.contentKey }
            config={ APP_CONST.HOME.MODAL[this.props.modal.contentKey].notepad }
            onSubmissionSuccess={ this.addNoteToStore  }
            onNoteUpdateCancelled={ this.hideModal }
          />
        );
      }
      case "VIEW_NOTE": {
        return (
          <NotePadReadOnly 
            note={this.state.selectedNote}
            config={ APP_CONST.HOME.MODAL[this.props.modal.contentKey].notepad }
            onViewClose={ this.hideModal }/>
        );
      }
      default:
        return null;
    }
  }

  hideModal = () => {
    this.props.hideModal();
  }

  render() {
    let renderModalContent = this.handleModalContent();
    return (
      <div className="App">
      <Header title={ APP_CONST.NAVIGATION.HEADER.title } />
        <div>
            <ButtonItem
              label={ APP_CONST.HOME.BUTTONS.ADD_NOTE }
              clickAction={ this.openModalAddNote }
            />
          </div>
          <NoteList
            items={ this.props.notes }
            updateNoteList={ this.openModalViewNote }
          />
          <Modal
          showModal={ this.props.showModal}
          content={ APP_CONST.HOME.MODAL[this.props.modal.contentKey] }
          closeModal={ this.hideModal }>
          { renderModalContent }
          </Modal>
      </div>
    );
  }
}

// to map state properties to the App this.props
const mapStateToProps = state => state;
const mapDispatchToProps = {
  newNote, hideModal, addNote, viewNote
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
