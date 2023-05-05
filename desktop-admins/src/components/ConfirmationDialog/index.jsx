import React, {useState} from 'react';
import './styles.css';

const Confirmation = () => {

    const { message, onCancel, onConfirm } = props;

    return(
        <div className="confirmation-dialog">
            <div className="confirmation-dialog-message">{message}</div>
            <div>
                <button className="confirmation-dialog-button-cancel"  onClick={onCancel}>Cancel</button>
                <button className="confirmation-dialog-button-confirm"  onClick={onConfirm}>Confirm</button>
            </div>
        </div>
    );
};
export default Confirmation;