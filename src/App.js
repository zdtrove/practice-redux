import React from 'react';
import FoodContainer from './containers/food-list';
import FoodDetailContainer from './containers/food-detail';

function App() {
    return (
        <div className="App">
            <h1>Redux tutorial</h1>
            <hr />
            <h2>List of foods: </h2>
            <FoodContainer />
            <hr />
            <h2>Food details: </h2>
            <FoodDetailContainer />
        </div>
    );
}

export default App;
