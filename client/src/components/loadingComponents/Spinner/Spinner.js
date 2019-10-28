import React from 'react';

import styles from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center" className={styles.spinner}>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;