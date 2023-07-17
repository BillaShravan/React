import React from 'react';

class Counter extends React.Component {

    state = {
        counter: 0
    }

    handleIncrement = () => {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        const {counter} = this.state
        return (
           <div>
               {this.props.render(counter, this.handleIncrement)}
           </div>
        )
    }
}

export default Counter;