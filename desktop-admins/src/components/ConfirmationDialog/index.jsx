import React, {useState} from 'react';
import './styles.css';

const Confirmation = () => {

    const { message, onCancel, onConfirm } = props;

    return(
        <div className="confirmation-dialog">
            <div className="confirmation-dialog-message">{message}</div>
            <div className="confirmation-dialog-buttons">
                <button className="confirmation-dialog-button"  onClick={onCancel}>Cancel</button>
                <button className="confirmation-dialog-button"  onClick={onConfirm}>Confirm</button>
            </div>
        </div>
    );
};
export default Confirmation;