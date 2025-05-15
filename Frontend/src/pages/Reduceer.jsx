import React, { useReducer } from 'react'

function Reduceer() {
  var [count, setCount] = useReducer((state, action) => {
    switch (action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            break;
    }
  }, 0)
  return (
    <div>
        <h1>use Reducer HOOk</h1>
        <h2>Count : {count}</h2>
        <br />
        <button onClick={() => { setCount('increment') }}>Increment</button>
        <button onClick={() => { setCount('decrement') }}>Decrement</button>
    </div>
  )
}

export default Reduceer