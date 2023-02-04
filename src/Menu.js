import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meals from './Meals';

export default function Menu() {
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
  
    return(
      <div>
      <h1>Meals</h1>
      <table>
        <tbody>
            <tr>
            <th>Name</th>
            </tr>
            <Meals meals={meals} />
        </tbody>
      </table>
    </div>
    )
  
}
