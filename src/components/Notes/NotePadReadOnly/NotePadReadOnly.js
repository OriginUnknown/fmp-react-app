import React from 'react';
import Aux from 'react-aux';
import ButtonItem from '../../Button/Button';
import './NotePadReadOnly.css';

const notePadReadOnly = props => (
    <Aux>
        <h2>{ props.note.title }</h2>
            <div>
                <p>{ props.note.description }</p>
            </div>
            <div className="preview-button-container">
                <ButtonItem buttonType="button"
                    label={ props.config.buttons.cancel } 
                    clickAction={ props.onViewClose } />
            </div>
    </Aux>
);

export default notePadReadOnly;