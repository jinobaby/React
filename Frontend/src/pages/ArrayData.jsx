import React, { useState } from 'react'

function ArrayData() {

    const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);

    return (
    <div>
        {fruits.map((item, index) => (
            <h1 key={index}>{item}</h1>
        ))}
    </div>
  )
}

export default ArrayData