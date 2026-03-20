import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () =>{
        setCount(prev => prev + 1)

        


    }

    const handleDecrease = () => {
        setCount(prev => prev - 1);

        
    }

    const handleReset = () => {
        setCount(0)
    }


    let message = "Low";

    if (count > 5 && count <= 10 ){
        message = "Medium"
    }
    else if (count > 10){
        message ="High"
    }


  return (

    <div>
        <p>Count:{count}</p>
        <div>
            <button onClick={handleIncrease} >+</button>
            <button onClick={handleDecrease} disabled={count === 0}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        <p>{message}</p>
    </div>
  )
}

export default Counter