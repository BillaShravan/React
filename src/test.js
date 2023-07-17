import React from "react";
class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1
    };
    console.log("1");
  }
  static getDerivedStateFromProps(props) {
    console.log("4");
    return null;
  }
  findOutput = () => {
    console.log("3");
    this.setState(prevState => { return { val: prevState.val+1} })
  }

  shouldComponentUpdate() {
    console.log("2");
    return true;
  }
  
  componentDidMount() {
    console.log("6");
  }

  componentDidUpdate() {
    console.log("5")
  }

  render() {
    console.log("7");
    return (
      <div>
        {this.state.val}
      <button type="button" onClick={this.findOutput}>Output</button>
      </div>
    );
  }
}

// const Car = ({ coloured = true }) => <Paint color={ coloured ? 'Black' : 'White' } />;

export default function Test() {
  return (
    <div className="App">
      <Greetings/>
      <div>{undefined}</div>
    </div>
  );
}