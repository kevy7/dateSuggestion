import React from 'react';

import RestaurantsListContainer from './RestaurantsListContainer/RestaurantsListContainer';

const RestuarantsContainer = (state) => {
    return (
        <div className="restuarantsContainer">
            <h1>This is a header</h1>
            <RestaurantsListContainer />
        </div>

    )
}

export default RestuarantsContainer;