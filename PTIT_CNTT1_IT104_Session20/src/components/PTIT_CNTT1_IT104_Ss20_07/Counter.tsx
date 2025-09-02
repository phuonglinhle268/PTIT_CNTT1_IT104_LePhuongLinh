import React, { useReducer } from "react";

type State = {
  count: number;
};

type Action = 
  | { type: "INCREMENT" } 
  | { type: "DECREMENT" };


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state; 
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "30px", padding:"10px", border:"1px solid grey", marginLeft:"30px"}}>
      <h1>So dem: {state.count}</h1>
      <button style={{backgroundColor:"pink", marginRight:"10px"}} onClick={() => dispatch({ type: "INCREMENT" })}>Tang</button>
      <button style={{backgroundColor:"pink"}}  onClick={() => dispatch({ type: "DECREMENT" })}>Giam</button>
    </div>
  );
}
