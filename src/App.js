import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name2:"ekta",
      details:"hello whats up"
     }
  }
  show = ()=>{
    this.setState({name2:"aditya"})
    console.log(this.state.name2)
  }

  render() { 
    return ( 
      <> 
        <h1>Hello my name is {this.props.name}</h1>
        <h2>{this.props.children}</h2>
        <h1>Hello my name is {this.state.name2}</h1>
        {this.state.details}

        

      <button onClick={this.show}>Click</button>

      </>
     );
  }
}
 
export default App;