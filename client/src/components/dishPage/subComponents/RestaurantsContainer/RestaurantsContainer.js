import React from 'react';
import { Route } from 'react-router-dom';

import RestaurantsListContainer from './RestaurantsListContainer/RestaurantsListContainer';
import RestaDescContainer from './RestaurantDescContainer/RestaDescContainer';

const RestuarantsContainer = (state) => {

    

    return (
        <div className="restuarantsContainer">
            <RestaurantsListContainer />
            <Route exact path="/dishes/:id/restaurants/:restaurant" component={RestaDescContainer} />
        </div>

    )
}

export default RestuarantsContainer;