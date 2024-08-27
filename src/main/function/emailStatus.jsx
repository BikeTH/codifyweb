// EmailStatus.js
import React from 'react';
import '../function/css/emailStatus.css'; // Create this CSS file to style the status message

export default function EmailStatus ({ status, message, fadeOut }) {
    if (!status) return null;

    return (
        <div className={`email-status ${status} ${fadeOut ? 'fade-out' : ''}`}>
            <p style={{margin:0}}>{message}</p>
        </div>
    );
};