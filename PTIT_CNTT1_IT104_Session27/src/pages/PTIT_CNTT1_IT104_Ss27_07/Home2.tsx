import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home2() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Trang chu</h1>
      <p>
        Day la trang chu. Thu go mot duong dan khong ton tai (vi du: abcd) vao
        thanh dia chi de xem trang 404.
      </p>

      <div style={{ marginTop: 20 }}>
        <button
          style={{
            
            borderRadius: 6,
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
          }}
          onClick={() => navigate("/about2")}
        >
          About
        </button>
      </div>
    </div>
  );
}
