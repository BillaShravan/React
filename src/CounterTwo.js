import React from 'react';

class CounterTwo extends React.Component {
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
            <h2 onMouseMove={handleIncrement}>
                Hovered {counter} times
            </h2>
        )
    }

}

export default CounterTwo;