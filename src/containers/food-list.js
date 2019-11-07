import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class FoodList extends React.Component {
    createFoodListItems() {
        let listItems = this.props.foods_container.map((food, index) => {
                return (
                    <li key={index} onClick={() => this.props.selectFood_container(food)}>Food's name: {food.name}</li>
                );
            }
        );
        return listItems;
    }
    render() {
        return (
            <ul>
                {this.createFoodListItems()}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        foods_container: state.foods_reducer
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({selectFood_container: actions.selectFood}, dispatch);
}

let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default FoodContainer;