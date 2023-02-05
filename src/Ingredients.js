import React from 'react'

export default function Ingredients({ingredients}) {
  return (
    ingredients.map((ingredient, index) => (
      <React.Fragment key={ingredient.name}>
        {ingredient.name}
        {index !== ingredients.length - 1 ? ', ' : ''}
      </React.Fragment>
    ))

  )
}
