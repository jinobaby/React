import React, { useState } from 'react'

function And() {
    var [isLoggedIn, setIsLogggedIn] = useState(false)
  return (
    <div style={
        {  
            textAlign: 'center'
        }
    }>
        {
            isLoggedIn && <h1 style={
                {
                    color: 'red',
                    textAlign: 'center',
                    marginTop: '20px'
                }
            }>Welcome User</h1>
        }
        {
            !isLoggedIn && <h1 style={
                {
                    color: 'red',
                    textAlign: 'center',
                    marginTop: '20px'
                }
            }>Welcome Guest</h1>
        }

        <button style={
            {
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }
        } onClick={() => (setIsLogggedIn(!isLoggedIn))}>{ isLoggedIn ? 'Logout' : 'Login' }</button>
    </div>
  )
}

export default And