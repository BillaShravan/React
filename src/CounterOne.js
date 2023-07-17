import React from 'react';

class CounterOne extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0
    //     }
    // }

    // handleIncrement = () => {
    //     this.setState(prevState => {
    //         return {
    //             counter: prevState.counter + 1
    //         }
    //     })
    // }


    render() {
        const { counter, handleIncrement } = this.props
        return (
            <div onClick={handleIncrement}>
                Clicked {counter} times
            </div>
        )
    }

}

export default CounterOne;