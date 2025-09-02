import React, { useReducer } from "react";

type State = {
  name: string;
  email: string;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string };

const initialState: State = {
  name: "",
  email: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        margin: "50px",
        padding: "20px",
        border: "1px solid grey",
      }}
    >
      <h2 style={{ textAlign: "center" }}>User Information Form</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Ten</label>
        <br/>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          style={{ width:"80%", padding: "8px", marginTop: "15px" }}
        />
      </div>

      <div>
        <label>Email</label>
        <br/>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          style={{ width:"80%", padding: "10px", marginTop: "15px" }}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          background: "#bcd8f4ff",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h4>Thong tin nguoi dung</h4>
        <p>
          <b>Ten: </b> {state.name || "(Chua nhap)"}
        </p>
        <p>
          <b>Email: </b> {state.email || "(Chua nhap)"}
        </p>
      </div>
    </div>
  );
}
