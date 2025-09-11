// Register.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    if (!email || !password || !confirm) {
      alert("Nhap day du thong tin");
      return;
    }
    if (password !== confirm) {
      alert("Mat khau khong trung khop");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exist = users.find((u) => u.email === email);
    if (exist) {
      alert("Email da ton tai");
      return;
    }
    
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login"); 
  };

   

  return (
    <div style={{ border: "1px solid grey", padding: "20px 30px", borderRadius: "8px" }}>
      <h3>Register Account</h3>
      <form onSubmit={handleRegister}>
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
        <div>
          <label>Confirm password</label>
          <br />
          <input type="password"
            style={{ padding: "10px", margin: "15px", borderRadius: "3px", border: "1px solid grey" }} />
        </div>
        <button style={{ color: "white", backgroundColor: "blue", borderRadius: "5px" }}>
          Create an account
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span
          style={{ color: "blue",  textDecoration: "none" }}
          onClick={() => navigate("/login")}
        >
          Login here
        </span>
      </p>
    </div>
  );
}
