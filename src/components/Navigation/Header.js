import React from 'react';
import './Header.css';

const header = props => (
        <h1 className="notes-title">{ props.title }</h1>
    )

export default header;