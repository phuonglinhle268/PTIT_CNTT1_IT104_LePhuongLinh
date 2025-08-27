import React, { useState, useCallback } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("pink");

  
  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div style={{margin: "40px auto" }}>
      <h2>Color</h2>
      <input
        type="color"
        value={color}
        onChange={handleChangeColor}
        style={{ width: "60px", height: "40px", border: "none", marginBottom: "20px" }}
      />

      <div style={{ marginBottom: "20px" }}>
        <p>
          <strong>Mau nguoi dung chon:</strong>
        </p>
        <div
          style={{
            marginLeft:"100px",
            width: "60px",
            height: "30px",
            backgroundColor: color,
          }}
        ></div>
      </div>

      <div>
        <p>
          <strong>Mau hien thi:</strong>
        </p>
        <div
          style={{
            marginLeft:"100px",
            width: "60px",
            height: "30px",
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}
