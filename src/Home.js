import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'ekta'
         }
    }
    show = () =>{
        this.setState({name:'surbhi'})
    }
    render() { 
        return ( 
            <>
                <h1>Hello {this.state.name}</h1>

                <button onClick={this.show}>Click</button>
            </>
         );
    }
}
 
export default Home;