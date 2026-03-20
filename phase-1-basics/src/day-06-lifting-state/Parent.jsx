import React, { useState } from 'react'
import Child from './Child'
function Parent() {

    const [count, setCount] = useState(0);
    function handleIncrease(){
        setCount(prev => prev+1)
    }
    function handleDecrease(){
        setCount(prev => (prev > 0 ? prev - 1 : 0))
    }
  return (
    <div>
        <Child count={count} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
    </div>
  )
}

export default Parent