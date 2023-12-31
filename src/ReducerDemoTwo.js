import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerDemoTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <div>Count value: {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        Decrement5
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}

export default ReducerDemoTwo;
