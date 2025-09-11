import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>
      <b style={{ fontSize: 18 }}>Trang ban tim khong ton tai!!!</b>
      <p>Co the duong dan ban nhap sai hoac trang da duoc di chuyen</p>

      <div style={{ marginTop: 20, display: "flex", gap: 10, justifyContent: "center" }}>
        <button style={{backgroundColor:"brown"}} onClick={() => navigate("/home2")}>
          Quay ve trang chu
        </button>

        <button style={{backgroundColor:"lavender"}}  onClick={() => navigate(-1)}>
          Quay lai
        </button>
      </div>
    </div>
  );
}


