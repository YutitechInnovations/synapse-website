import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 999,
                }}
            />

            {/* Modal content container */}
            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '20px',
                    zIndex: 1000,
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                }}
            >
                {children}
            </div>
        </>
    );
};

export default Modal;
