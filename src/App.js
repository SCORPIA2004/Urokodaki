import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meals from './meals';

function App() {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios.get('./menuDataFile.json')
      .then(response => {
        setMeals(response.data.meals);
        setIngredients(response.data.ingredients);
      })
      .catch(error => console.error(error));
  }, [meals, ingredients]);

  return (
    <div>
      <h1>Meals</h1>
      <table>
        <tr>
          <th>Name</th>
        </tr>
        <Meals meals={meals} />
      </table>

      <h1>Ingredients</h1>
      {ingredients.map(ingredient => (
        <div key={ingredient.name}>
          <p>{ingredient.name}</p>
          <ul>
            {ingredient.options.map(option => (
              <li key={option.name}>
                {option.name}: {option.quality} ({option.price} per {option.per_amount})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
























// import './App.css';
// import menuDataJSON from './menuData.json';


// function App() {

//   // const menuData = JSON.parse(menuDataJSON)

//   return (
//     <>
//       console.log(menuData)
//     </>
//   );
// }

// export default App;
