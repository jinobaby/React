import React, { Component } from 'react'

export class Query extends Component {

    
    Collectdata = (msg) => {
        var name = document.querySelector('#name').value.trim()
        if (name == ''){
            alert('please enter your name')
            return
        }
        document.querySelector('#x').innerHTML = `${msg} ${name}`
    }
    render() {
        
      return (
        <div>
          <input type="text" id='name' placeholder='enter your name' />
          <button type="submit" onClick={() => {this.Collectdata('welcome')}}>Submit</button>
          <h1 id='x'></h1>
        </div>
      )
    }
}

export default Query