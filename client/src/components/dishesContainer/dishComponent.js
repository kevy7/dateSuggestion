import React from 'react';
import PropTypes from 'prop-types';

const DishComponent = (state) => {
    return (
        <div className="dishComponent">
            <p>{state.dish_name}</p>
            <p>{state.dish_description}</p>
        </div>
    )
}
 
//Below, are our two props that is expected to be passed down below
DishComponent.propTypes = { //propTypes are lowercased when declaring within your component
    dish_name: PropTypes.string,
    dish_description: PropTypes.string
}

export default DishComponent;