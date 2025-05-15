import React, { useState } from 'react'
import './State.css'

function BallState() {
    var [position, setPosition] = useState({ left: 10, top: 10 })

    function MoveBall(side){
        
        switch (side){
            case 'right':
                setPosition({ left: position.left + 3, top: position.top })
                break;
            case 'up':
                setPosition({ left: position.left, top: position.top - 3 })
                break;
            case 'left':
                setPosition({ left: position.left - 3, top: position.top })
                break;
            case 'down':
                setPosition({ left: position.left, top: position.top + 3 })
                break;
        }
    }

    return (
        <div>
            <button onClick={() => { MoveBall('right')}} className='Ball-button'>Right</button>
            <button onClick={() => { MoveBall('up')}} className='Ball-button'>Up</button>
            <button onClick={() => { MoveBall('down')}} className='Ball-button'>Down</button>
            <button onClick={() => { MoveBall('left')}} className='Ball-button'>left</button>

            <br />

            <div className='ball' style={{ top: position.top + '%', left: position.left + '%' }}></div>
        </div>
        )       
}

export default BallState