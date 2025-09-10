import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [user] = useState({
    email: "phuonglinh@gmail.com",
    password: "abcd",
    role: "user",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, role } = formData;

    if (
      email === user.email &&
      password === user.password &&
      role === user.role
    ) {
      navigate("/account");
    } else {
      alert("Thong tin khong chinh xac");
    }
  };

  return (
    <div style={{ padding: "20px", border:"1px solid grey" }}>
      <h2>Dang nhap</h2>
      <form
        onSubmit={handleSubmit}
        
        
      >
        <input
          type="email"
          name="email"
          placeholder="Nhap email"
          value={formData.email}
          onChange={handleChange}
          style={{margin:"10px", padding:"10px", borderRadius:"3px", border:"1px solid grey"}}
          required
        />
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Nhap mat khau"
          value={formData.password}
          onChange={handleChange}
          style={{margin:"10px", padding:"10px", borderRadius:"3px", border:"1px solid grey"}}
          required
        />
        <br/>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={{margin:"20px", padding:"10px", borderRadius:"3px", border:"1px solid grey", width:"180px"}}
          required
        >
          <option value="">-- Chon quyen --</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <br/>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
            margin:"20px"
          }}
        >
          Dang nhap
        </button>
      </form>
    </div>
  );
}
