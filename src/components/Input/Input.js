import React from 'react';
import Aux from 'react-aux';

import './Input.css';

const input = props => (
    <Aux>
        <label htmlFor={ props.inputLabel }>
            { props.labelValue }
        </label>
        <input type="text"
                name={ props.labelValue }
                placeholder={ props.placeholderText }
                onChange={ props.handleInput }
        />
    </Aux>
);


export default input;
