import React from 'react'
import Ingredients from './ingredients'

export default function meals({meals}) {
  return (
    meals.map(meal => (
        <tr key={meal.id}>
            <td>
              <h3>{meal.name}</h3> {"\n"}
              <Ingredients ingredients={meal.ingredients} />
            </td>
        </tr>
          
      ))

  )
}