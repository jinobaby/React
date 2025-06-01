import React, { useReducer } from 'react'
import './State.css'

function ReducerBall() {
    var [position, setPosition] = useReducer((state, action) => {
        switch (action){
            case 'right':
                return { left: state.left + 3, top: state.top }
            case 'up':
                return { left: state.left, top: state.top - 3 }
            case 'left':
                return { left: state.left - 3, top: state.top }
            case 'down':
                return { left: state.left, top: state.top + 3 }
        }

    },{ left: 10, top: 10 })

    return (
        <div>
            <button onClick={() => { setPosition('right')}} className='Ball-button'>Right</button>
            <button onClick={() => { setPosition('up')}} className='Ball-button'>Up</button>
            <button onClick={() => { setPosition('down')}} className='Ball-button'>Down</button>
            <button onClick={() => { setPosition('left')}} className='Ball-button'>left</button>

            <br />

            <div className='ball' style={{ top: position.top + '%', left: position.left + '%' }}></div>
        </div>
        )       
}

export default ReducerBall