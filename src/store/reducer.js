const initalState = { 
    age: 20, 
    history: [] 
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'AGE_UP':
            return {
                ...state,
                age: state.age + action.value,
                history: [...state.history, { id: Math.round(Math.random() * 1000000), age: state.age + action.value }]
            }
        case 'AGE_DOWN':
            return {
                ...state,
                age: state.age - action.value,
                history: [...state.history, { id: Math.round(Math.random() * 1000000), age: state.age - action.value }]
            }
        case 'DEL_ITEM':
            return {
                ...state,
                history: state.history.filter(el => el.id !== action.key )
            }
        default: 
            return state;
    }
};

export default reducer;