import React from 'react';
import ButtonItem from '../../Button/Button';
import APP_CONST from '../../../resources/en-GB';
import './NoteItem.css';

const noteItem = props => ( 
        <div className="note-item-container">
            <h2>{ props.title }</h2>
            <div className="sticky-note">
                <p>{ props.description }</p>
            </div>
            <ButtonItem 
                clickAction={props.editNote}
                label={ APP_CONST.HOME.NOTE_LIST.NOTE.BUTTONS.VIEW_NOTE }
            />
        </div>
    )

export default noteItem;