import React, { useState } from 'react'

function StateHook() {
  
    var [count, setCount] = useState(0)

    // function UpdateCount() {
    //     setCount(count + 1)
    // }

    return (
    <div>
        <h1>State Hook</h1>
        <br />
        <h1>Count : {count}</h1>
        <button onClick={() =>{ setCount(count + 1) }}>Increment</button>
        <button onClick={() =>{ setCount(count - 1) }}>Decrement</button>
    </div>
  )
}

export default StateHook