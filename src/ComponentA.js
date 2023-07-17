import React, { useContext } from "react";
import { CountContext } from "./Initial";

function ComponentA() {
    const countContext = useContext(CountContext)

    return (
        <div>
            In ComponentA - {countContext.countState}
            <button onClick={() => countContext.countDispatch('Increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('Decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('Reset')}>Reset</button>
        </div>
    )
}

export default ComponentA;