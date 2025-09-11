import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About</h1>
      <p>Trang gioi thieu mau</p>

      <div style={{ marginTop: 20 }}>
        <button
          style={{
            borderRadius: 6,
            backgroundColor: "#16a34a",
            color: "#fff",
            border: "none",
          }}
          onClick={() => navigate("/home2")}
        >
          Quay ve trang chu
        </button>
      </div>
    </div>
  );
}
