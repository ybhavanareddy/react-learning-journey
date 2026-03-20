import React, { useState } from 'react'

function ToggleMessage() {

    
    const [showMessage , setShowMessage] = useState(false);

    function handleClick(){
        setShowMessage(prev => !prev);
    }
  return (
    <div>
        <button onClick={handleClick}>
            {showMessage? "Hide Message":"Show Message"}
        </button>
        {showMessage && <p>Learning React Concept</p>}
    </div>
  )
}

export default ToggleMessage