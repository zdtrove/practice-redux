const { createStore } = require('redux');
const initialState = { age: 21 };

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    if (action.type === 'ADD') {
        newState.age += action.cal;
    }
    if (action.type === 'SUBSTRACT') {
        newState.age -= action.cal;
    }
    return newState;
}

const store = createStore(myReducer);

store.subscribe(() => {
    console.log('state changed: ' + JSON.stringify(store.getState()));
});

store.dispatch({ type: 'ADD', val: 10, cal: 100 });
store.dispatch({ type: 'SUBSTRACT', val: 5, cal: 200 });