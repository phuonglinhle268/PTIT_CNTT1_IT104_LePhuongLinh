import React, { useReducer, useState } from "react";
import "./login.css";

type State = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

type Action =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGIN_ERROR"; payload: string };


function loginReducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, error: null, success: false };
    case "LOGIN_SUCCESS":
      return { loading: false, error: null, success: true };
    case "LOGIN_ERROR":
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
}

export default function LoginForm() {
  const [state, dispatch] = useReducer(loginReducer, {
    loading: false,
    error: null,
    success: false,
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });

    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        dispatch({ type: "LOGIN_SUCCESS" });
        alert("Dang nhap thanh cong");
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: "Thong tin khong hop le" });
      }
    }, 1500);
  };

  return (
    <div className="container">
      <h2>Dang nhap</h2>
      <form onSubmit={handleLogin}>
        <label>Ten nguoi dung</label>
        <input
          type="text"
          placeholder="Nhap ten..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          disabled={state.loading}
        />

        <label>Mat khau</label>
        <input
          type="password"
          placeholder="Nhap mat khau..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={state.loading}
        />

        <button type="submit" disabled={state.loading}>
          {state.loading ? "Dang dang nhap..." : "Dang nhap"}
        </button>

        {state.error && <p className="error">{state.error}</p>}
      </form>
    </div>
  );
}
