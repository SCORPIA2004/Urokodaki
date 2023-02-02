import React from 'react'
import Ingredients from './ingredients'

export default function meals({meals}) {
  return (
    meals.map(meal => (
        <tr key={meal.id}>
            <td>{meal.name}</td>
            <td><Ingredients ingredients={meal.ingredients} /></td>
        </tr>
          
      ))

  )
}


{/* <p>{meal.name}</p>
<ul>
  <Ingredients ingredients={meal.ingredients} />
</ul> */}
