import React from 'react'

function ResetBtn(props) {
  return <button onClick={(event) => props.setInputValue('')}>Reset</button>
}

export default ResetBtn
