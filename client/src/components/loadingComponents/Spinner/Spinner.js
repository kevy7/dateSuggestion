import React from 'react';

const Spinner = () => {
    //justify-content-center
    const styling = {
        width: '4rem',
        height: '4rem'
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" style={styling} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;