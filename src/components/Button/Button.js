import React from 'react';

// prep for later
// import './Button.css';

const buttonItem = props => {
    let buttonType = props.buttonType || "submit";
    return (
        <button onClick={ props.clickAction }
        type={ buttonType }>{ props.label }</button>
    )}

export default buttonItem;