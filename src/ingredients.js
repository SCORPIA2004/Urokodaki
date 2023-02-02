import React from 'react'

export default function ingredients({ingredients}) {
  return (
    ingredients.map(ingredient => (
        // <li key={ingredient.name}>
        //   {ingredient.name}: {ingredient.quantity} {ingredient.quantity_type}
        // </li>
          <p key={ingredient.name}>
            {ingredient.name}: {ingredient.quantity} {ingredient.quantity_type}
          </p>
      ))

  )
}
