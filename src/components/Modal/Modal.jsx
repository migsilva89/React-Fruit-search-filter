import React from 'react'
import styles from '../Modal/styles.css'

function Model(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div>{props.state.fruitName}</div>
        <div>{props.state.fruitDesc}</div>
        <button
        onClick={() => (
          props.setState("")
        )}
        className="btn">Close</button>
      </div>
    </div>
  )
}

export default Model
