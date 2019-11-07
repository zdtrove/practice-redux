import * as types from './actionTypes';

export const selectFood = (food) => {
    return {
        type: types.SELECT_FOOD,
        payload: food
    }
}