import React, { Component } from 'react';

class ClassComponent extends Component {
    state = {
        message : "Hello you have a message",
        name: " the User name is Jino Baby", 
        count: 0
    }

    updateMessage = () => {
        this.setState({ message : "Hello you have a new message" });
    }
    
    updatecount = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }
    render() {
        return (
            <div>
                
                <h1>This is a Class Component</h1>
                <p>{this.state.message}</p>
                <p>{this.state.name}</p>

                <button onClick={this.updateMessage}>Update</button>

                <br />
                <br />

                <p>Count: {this.state.count}</p>
                <button onClick={this.updatecount}>Increamernt</button>
                
                
            </div>
        )
    }
}

export default ClassComponent;