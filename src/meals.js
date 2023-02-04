import React from 'react'
import { Link } from "react-router-dom";
import Ingredients from './Ingredients'

export default function Meals({meals}) {

  return (
    meals.map(meal => (
        <tr key={meal.id}>
            <td>
              <h3>{meal.name}</h3> {"\n"}
              <Ingredients ingredients={meal.ingredients} />
              <Link to={`/options?ingredients=${encodeURIComponent(JSON.stringify(meal.ingredients))}`}>
                <button id="options-btn">Options</button>
              </Link>
            </td>
        </tr>
          
      ))

  )
}




// <Link to="/options"><button id="options-btn">Options --{'>'}</button></Link>