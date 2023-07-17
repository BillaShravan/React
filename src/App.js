import './App.css';
import React, { PureComponent } from 'react';

function Temp(props) {
console.log('render Temp')
  return(
    <p>value is {props.val}</p>
  )
}

class App extends PureComponent {
  state = {
    val: 1
  }

  componentDidMount() {
    
    setInterval(() => {
      this.setState({
        val: 1
      })
      
    }, 2000);
  }

  // shouldComponentUpdate(nextProp, nextState) {
  //   return (nextState.val === this.state.val ? false : true)
  // }
  
  render(){
    console.log('render App')
    return(
      <div className="App">
      <Temp val={this.state.val} />
    </div>
    )
  }
}

export default App;
