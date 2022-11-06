import React from 'react'

function FruitCard(props) {
  return (
    <div>
      <div
        onClick={(eventy) => props.setState(props)}
        className="fruitCard"
        value={props.fruitName}
        style={{ backgroundColor: props.fruitColor }}
      >
        <h2>{props.fruitName}</h2>
      </div>
    </div>
  )
}

export default FruitCard
