import React, { useState } from 'react'

function IfElse() {
    var [isLogin, setIsLogin] = useState(true)

  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
        {
            isLogin ? <h1>Welcome User</h1> : <h1>Welcome Guest</h1>
        }

        <button onClick={() => { setIsLogin(!isLogin) }}>
            {
                isLogin ? 'Logout' : 'Login'
            }
        </button>
    </div>
  )
}

export default IfElse