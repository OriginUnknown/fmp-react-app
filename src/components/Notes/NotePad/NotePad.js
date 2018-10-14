import React from 'react';
import Aux from 'react-aux';
import ButtonItem from '../../Button/Button';
import Input from '../../Input/Input';
import TextArea from '../../Textarea/Textarea';

import './NotePad.css';

const NotePadInput = (props) => {
    let note = props.note || null;
    let hasTitle = null;
        if (note && note.title){
            hasTitle = (
                <h2>{ note.title }</h2>
            );
        };
    
    const checkSumbmission = (evt) => {
        evt.preventDefault();
        if (note && (note.title || note.description)) {
            let formatNote;
            if (!note.title) {
                formatNote = {
                    ...note,
                    title: "Untitled Note..."
                };
                note = formatNote;
            }
            if (!note.description) {
                formatNote = {
                    ...note,
                    description: "N/A"
                }
                note = formatNote;
            }
            props.onSubmissionSuccess(note);
        }
        return true;
    }
    
    const updateTitleChange = (inputEl) => {
        let updateNoteTitle;
        if (note) {
            updateNoteTitle = {
                ...note,
                title: inputEl.target.value
            };
            note = updateNoteTitle;
        } else {
            updateNoteTitle = { title: inputEl.target.value }
            note = updateNoteTitle;
        }
    }

    const updateDescriptionChange = (textAreaEl) => {
        let updateNoteDescription;
        if (note) {
            updateNoteDescription = {
                ...note,
                description: textAreaEl.target.value
            };
            note = updateNoteDescription;
        } else {
            updateNoteDescription = { description: textAreaEl.target.value }
            note = updateNoteDescription;
        }
    }

    const cancelNoteUpdate = () => {
        props.onNoteUpdateCancelled();
    }

    return (
        <Aux>
            <form onSubmit={ checkSumbmission }>
                { hasTitle }
                <div className="input-container">
                    <Input inputLabel={ props.config.inputField.inputLabel }
                            labelValue={ props.config.inputField.labelValue }
                            placeholderText={ props.config.inputField.placeholderText }
                            handleInput={ evt =>  updateTitleChange(evt) }
                    />
                </div>
                <div className="textarea-container">
                    <TextArea inputLabel={ props.config.textArea.inputLabel }
                            labelValue={ props.config.textArea.labelValue }
                            placeholderText={ props.config.textArea.placeholderText }
                            handleTextAreaInput={ evt => updateDescriptionChange(evt) }
                    />
                </div>
                <div className="note-pad-button-container">
                    <ButtonItem
                        label={ props.config.buttons.ok } />
                    <ButtonItem buttonType="button"
                        label={ props.config.buttons.cancel}
                        clickAction={ cancelNoteUpdate } />
                </div>
            </form>
        </Aux>
    );
}

export default NotePadInput;