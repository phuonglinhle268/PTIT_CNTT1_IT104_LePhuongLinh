import React, {useReducer} from 'react'

type Action = {
    type: "SET_INPUT";
    payload:string
}
const reducer = (state:string, action:Action): string => {
    switch(action.type){
        case "SET_INPUT":
            return action.payload;
        default:
            return state;
    }
}
export default function InputChange() {
    const [text, dispatch] = useReducer(reducer, "");
  return (
    <div style={{backgroundColor:"yellow", padding:"20px"}}>
      <input type='text' value={text}
      onChange={(event) => dispatch({type:"SET_INPUT", payload:event.target.value})}
      placeholder='Input change...'
      style={{marginTop:"25px", padding:"15px", border:"none", borderRadius:"5px"}}
      />
      <h4>{text}</h4>
    </div>
  )
}
