import React from 'react';

export default function Alert({ alert }) {
    if (!alert) return null;

    const { type, message } = alert;

   
    return (
        <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
            <strong>{type.charAt(0).toUpperCase() + type.slice(1)}:</strong> {message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}


