import React, {useEffect , useState} from 'react'

function Effect() {
    var [count, setCount] = useState(0)
    var [count1, setCount1] = useState(0)
    var [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log('useEffect Called');
        setCount2(count2 + 1)
    },[count1])

  return (
    <div>
        <h1>Effect</h1>
        <br />
        <h1>Count: {count}</h1>
        <br />
        <button onClick={() => (setCount( count + 1 ))}>Increment</button>
        <br />
        <h1>Count1: {count1}</h1>
        <br />
        <button onClick={() => (setCount1( count1 + 1 ))}>Increment</button>
        <br />
        <h1>Count2: {count2}</h1>
        <br />
    </div>
  )
}

export default Effect