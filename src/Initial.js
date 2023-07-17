import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

function Initial() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div style={{ textAlign: "center" }}>
          Count Value: {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default Initial;
