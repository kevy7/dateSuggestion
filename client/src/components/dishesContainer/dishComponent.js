import React from 'react';
import PropTypes from 'prop-types';

const DishComponent = (state) => {
    const style = {
        width: '18rem'
    }
    return (
        <div className="dishComponent">
            {/* <div className="card" style={style}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div> */}
            <div class="card mb-3">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{state.dish_name}</h5>
                    <p class="card-text">{state.dish_description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}
 
//Below, are our two props that is expected to be passed down below
DishComponent.propTypes = { //propTypes are lowercased when declaring within your component
    dish_name: PropTypes.string,
    dish_description: PropTypes.string
}

export default DishComponent;