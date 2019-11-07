import * as types from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case types.SELECT_FOOD:
            return action.payload;
        default:
            return {};
    }
}