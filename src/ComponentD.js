import React, { useContext } from "react";
import { CountContext } from "./Initial";

function ComponentD() {
    const countContext = useContext(CountContext)

    return (
        <div>
            In ComponentD - {countContext.countState}
            <button onClick={() => countContext.countDispatch('Increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('Decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('Reset')}>Reset</button>
        </div>
    )
}

export default ComponentD;