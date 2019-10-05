import React from 'react';

import styles from './BreadCrumb.module.css';

const BreadCrumb = () => {
    return (
        <div className="BreadCrumb">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item" /* aria-current="page" */><a href="#">Library</a></li>
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumb;