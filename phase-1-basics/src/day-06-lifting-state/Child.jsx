import React from 'react'

function Child({count, handleIncrease, handleDecrease}) {
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease} disabled = {count === 0}>-</button>
    </div>
  )
}

export default Child