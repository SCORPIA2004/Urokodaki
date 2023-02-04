import React, { useState } from 'react';

export default function Options({location}) {
  const ingredients = JSON.parse(decodeURIComponent(location.search.split("=")[1]));
  const [selectedOption, setSelectedOption] = useState({});
  
  const handleOptionChange = (ingredient, option) => {
    setSelectedOption({ ...selectedOption, [ingredient]: option });
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
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td>{ingredient}</td>
              <td>
                <input
                  type="radio"
                  name={ingredient}
                  value="low"
                  checked={selectedOption[ingredient] === "low"}
                  onChange={() => handleOptionChange(ingredient, "low")}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={ingredient}
                  value="medium"
                  checked={selectedOption[ingredient] === "medium"}
                  onChange={() => handleOptionChange(ingredient, "medium")}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={ingredient}
                  value="high"
                  checked={selectedOption[ingredient] === "high"}
                  onChange={() => handleOptionChange(ingredient, "high")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
