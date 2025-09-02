import React, { useState, useEffect } from "react";

export default function PageTitle() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (username) {
      document.title = `${username}!`;
    } else {
      document.title = "Trang cua toi";
    }
  }, [username]);

  return (
    <div style={{margin:"30px", marginTop:"30px"}}>
      <div
        style={{
        border:"1px solid grey",
          padding: "30px",
          textAlign: "center",
          width: "300px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Chao mung ban den voi trang cua chung toi
        </h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nhap ten cua ban"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        <p>Tieu de se thay doi khi ban nhap ten vao truong tren</p>
      </div>
    </div>
  );
}
