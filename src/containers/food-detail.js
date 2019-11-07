import React from 'react';
import { connect } from 'react-redux';

class FoodDetail extends React.Component {
    render() {
        console.log(this.props.activeFood);
        if (Object.keys(this.props.activeFood).length === 0) {
            return (<h2>Select a food</h2>);
        }
        return (
            <div>
                <p>Food's name: {this.props.activeFood.name}</p>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        activeFood: state.active_food_reducer
    };
}

export default connect(mapStateToProps)(FoodDetail);