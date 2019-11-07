import FoodReducer from './foods-reducer';
import ActiveFoodReducer from './active-food-reducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    foods_reducer: FoodReducer,
    active_food_reducer: ActiveFoodReducer
});

export default allReducers;