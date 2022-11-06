import React from 'react'
import FruitCard from '../FruitCard/FruitCard'
import EmptyList from '../EmptyList/EmptyList'
import { useState } from 'react'
import Modal from '../Modal/Modal'

function FruitList(props) {
  const [state, setState] = useState('')

  const fruitGrid = props.fruits
    .filter((fruit) => {
      if (props.inputValue === '') {
        return fruit
      } else if (
        fruit.name.toLowerCase().includes(props.inputValue.toLowerCase())
      ) {
        return fruit
      }
    })
    .map((fruit, index) => (
      <div className="box" key={index}>
        <FruitCard
          setState={setState}
          key={index}
          fruitName={fruit.name}
          fruitColor={fruit.color}
          fruitDesc={fruit.description}
        />
      </div>
    ))

  const result = () => {
    if (fruitGrid.length > 2) {
      return <ul className="fruitGrid">{fruitGrid}</ul>
    } else if (fruitGrid.length == 1) {
      //? LAZY LOAD REACT
      //! window.confirm(
      //!   `Resultado único encontrado: ${fruitGrid[0].props.children.props.fruitName}!`,
      //! )
      return <ul className="fruitGrid">{fruitGrid}</ul>
    } else {
      return <EmptyList inputValue={props.inputValue} />
    }
  }

  return (
    <div>
      <div>{result()}</div>
      {state !== "" ? <Modal state={state} setState={setState}/> : null}
      
    </div>
  )
}

export default FruitList
