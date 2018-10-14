import React from 'react';
import './Modal.css';

const modal = (props) => {
    let renderModal = (props.showModal) ? 
            (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close"
                                onClick={ props.closeModal }>
                                &times;
                        </span>
                        <div className="modal-content-header">
                            <h1>{ props.content.title }</h1>
                            <p>{ props.content.description }</p>
                        </div>
                        <div className="modal-content-children">{ props.children }</div>
                    </div>
                </div>
            ) : null;
    return renderModal;
}
export default modal;