import React from 'react';

import RestaurantsListContainer from './RestaurantsListContainer/RestaurantsListContainer';

const RestuarantsContainer = (state) => {
    return (
        <div className="restuarantsContainer">
            <RestaurantsListContainer />
        </div>

    )
}

export default RestuarantsContainer;