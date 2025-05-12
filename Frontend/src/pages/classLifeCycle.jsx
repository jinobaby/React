import React, { Component } from 'react'
import Navbar from './Navbar.jsx'


export class classLifeCycle extends Component {

    state = { 
        count: 0
    }

    //this load the items from the database first thing when we enter the server
    componentDidMount() {
        console.log("componentDidMount");     
    }
    
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    incrementcount = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }

  render() {
    return (
        <div>classLifeCycle
        <Navbar/>   
        <h1>{ this.state.count }</h1>
        <button onClick={this.incrementcount}> Update </button>

      </div>
    )
  }
}

export default classLifeCycle