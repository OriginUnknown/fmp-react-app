import React from 'react';
import Aux from 'react-aux';

import './Textarea.css';

const textArea = props => (
    <Aux>
        <label htmlFor={ props.inputLabel }>
            { props.labelValue }
        </label>
            <textarea
                rows="10" cols="30"
                placeholder={ props.placeholderText }
                name={ props.labelValue }
                onChange={ props.handleTextAreaInput }>
            </textarea>
    </Aux>
);


export default textArea;