import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class IngredientListContainer extends Component {
    render(){
        return (
            <div className="IngredientListContainer">
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, {

})(IngredientListContainer));
