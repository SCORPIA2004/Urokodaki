import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


export default function Options() {
  const location = useLocation();
  const ingredientsString = queryString.parse(location.search).ingredients;

  // Parse the string into a JavaScript object
  const ingredients = JSON.parse(ingredientsString);

  // You can now access the ingredients array and use it in your component
  console.log(ingredients);

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
                  // checked={selectedOption[ingredient] === "low"}
                  // onChange={() => handleOptionChange(ingredient, "low")}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={ingredient.name}
                  value="medium"
                  // checked={selectedOption[ingredient] === "medium"}
                  // onChange={() => handleOptionChange(ingredient, "medium")}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={ingredient.name}
                  value="high"
                  // checked={selectedOption[ingredient] === "high"}
                  // onChange={() => handleOptionChange(ingredient, "high")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
