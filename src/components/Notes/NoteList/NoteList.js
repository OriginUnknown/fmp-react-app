import React from 'react';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css';
import { v4 } from 'uuid';

const noteList = props => (
        <div className="note-list-container">
            { props.items.map( (item, index) => (
                <NoteItem
                    key={ v4() }
                    { ...item }
                    editNote={ () => { props.updateNoteList(index) }} />
            ) ) }
        </div>
    )

export default noteList;