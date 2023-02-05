import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

const QUALITY_DEGRADATION_COST = {
  low: 0.10,
  medium: 0.05,
  high: 0
};

export default function Options() {

  const [ingredientsAll, setIngredientsAll] = useState([]);

  useEffect(() => {
    axios.get('./menuDataFile.json')
      .then(response => {
        setIngredientsAll(response.data.ingredientsAll);
      })
      .catch(error => console.error(error));
  }, [ingredientsAll]);
  

  function calcIngredientPrice(name) {
    console.log("calcIng= " + name)
    if (!ingredientsAll) {
      return 0;
    }
  
    const ingredient = ingredientsAll.find(i => i.name === name);

    for(let j = 0; j < ingredientsAll.length; j++)
    {
      console.log()
    }

    if (!ingredient) {
      return 0;
    }
  
    return ingredient.price;
  }
  
  


  const location = useLocation();
  const ingredientsString = queryString.parse(location.search).ingredients;
  const ingredients = JSON.parse(ingredientsString);

  const [selectedOptions, setSelectedOptions] = useState({});

  

  // Calculate the price of the meal
  const totalCost = ingredients.reduce((cost, ingredient) => {

    const ingredientCost = (ingredient.quantity / 1000) * calcIngredientPrice(ingredient.name);
    const degradationCost = QUALITY_DEGRADATION_COST[selectedOptions[ingredient.name]] || 0;

    return cost + ingredientCost + degradationCost;
  }, 0);

  // Handle changes to the selected options
  const handleOptionChange = (ingredient, option) => {
    setSelectedOptions({ ...selectedOptions, [ingredient]: option });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ingredients</th>
            <th>Low</th>
            <th>Medium</th>
            <th>High</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map(ingredient => (
            <tr key={ingredient.name}>
              <td>{ingredient.name}</td>
              <td>
                <input
                  type="radio"
                  name={ingredient.name}
                  value="low"
                  checked={selectedOptions[ingredient.name] === "low"}
                  onChange={() => handleOptionChange(ingredient.name, "low")}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={ingredient.name}
                  value="medium"
                  checked={selectedOptions[ingredient.name] === "medium"}
                  onChange={() =>
                    handleOptionChange(ingredient.name, "medium")
                  }
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={ingredient.name}
                  value="high"
                  checked={selectedOptions[ingredient.name] === "high"}
                  onChange={() => handleOptionChange(ingredient.name, "high")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Total Cost: $
        {totalCost.toFixed(2)}
      </p>
    </div>
  );
}
