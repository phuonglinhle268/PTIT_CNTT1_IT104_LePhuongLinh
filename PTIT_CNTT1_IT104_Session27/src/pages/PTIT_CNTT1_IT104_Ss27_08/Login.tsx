// Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/login"); 
  };

  return (
    <div style={{ border: "1px solid grey", padding: "20px 30px", borderRadius: "8px" }}>
      <h3>Login Account</h3>
      <form onSubmit={handleLogin}>
        <div>
          <label>Your email</label>
          <br />
          <input type="email" placeholder="name@company.com"
            style={{ padding: "10px", margin: "15px", borderRadius: "3px", border: "1px solid grey" }} />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input type="password"
            style={{ padding: "10px", margin: "15px", borderRadius: "3px", border: "1px solid grey" }} />
        </div>
        <button style={{ color: "white", backgroundColor: "blue", borderRadius: "5px" }}>
          Login account
        </button>
      </form>
      <p>
        Chua co tai khoan?{" "}
        <span
          style={{ color: "blue",  textDecoration: "none" }}
          onClick={() => navigate("/register")}
        >
          Register here
        </span>
      </p>
    </div>
  );
}
