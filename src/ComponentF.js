import React, { useContext } from "react";
import { CountContext } from "./Initial";

function ComponentF() {
    const countContext = useContext(CountContext)

    return (
        <div>
            In ComponentF - {countContext.countState}
            <button onClick={() => countContext.countDispatch('Increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('Decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('Reset')}>Reset</button>
        </div>
    )
}

export default ComponentF;