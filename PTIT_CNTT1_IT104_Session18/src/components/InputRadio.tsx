import React, { useReducer } from "react";

type Action = {
  type: "SET_GENDER";
  payload: string;
};
const reducer = (state: string, action: Action): string => {
  switch (action.type) {
    case "SET_GENDER":
      return action.payload;
    default:
      return state;
  }
};
export default function InputRadio() {
  const [gender, dispatch] = useReducer(reducer, "");
  return (
    <div style={{backgroundColor:"wheat", marginTop:"30px", padding:"20px"}}>
      <div>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={gender === "Nam"}
          onChange={(event) =>
            dispatch({ type: "SET_GENDER", payload: event.target.value })
          }
        />
        Nam
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="Nu"
          checked={gender === "Nu"}
          onChange={(event) =>
            dispatch({ type: "SET_GENDER", payload: event.target.value })
          }
        />
        Nu
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="Khac"
          checked={gender === "Khac"}
          onChange={(event) =>
            dispatch({ type: "SET_GENDER", payload: event.target.value })
          }
        />
        Khac
      </div>
      <p>Selected gender: {gender}</p>
    </div>
  );
}
