import React, { useState, useCallback } from "react";

export default function LoginForm() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      console.log(info);
    },
    [info]
  );
  return (
    <div style={{backgroundColor:"skyblue", padding:"20px", marginTop:"30px"}}>
      <form onSubmit={handleSubmit}>
        <div style={{margin:"20px"}}>
          <label>Email</label>
          <br/>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            style={{borderRadius:"5px",border:"none", padding:"7px", marginTop:"10px"}}
          />
        </div>
        <div>
          <label>Password</label>
          <br/>
          <input
            type="password"
            name="password"
            value={info.password}
            onChange={handleChange}
            style={{borderRadius:"5px",border:"none", padding:"7px", marginTop:"10px"}}
          />
        </div>
        <button style={{marginTop:"20px"}} type="submit">Submit</button>
      </form>
    </div>
  );
}
