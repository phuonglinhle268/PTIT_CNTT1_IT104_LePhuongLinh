import React, { useState, useRef, useEffect } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const focusInput = useRef(null);

  useEffect(() => {
    if (modal && focusInput.current) {
      focusInput.current.focus(); 
    }
  }, [modal]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px", border:"1px solid grey", padding:"20px", marginLeft:"30px"}}>
      <h3>Ung dung React voi Modal va Focus Input</h3>
      <button
        onClick={() => setModal(true)}
        style={{
          padding: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
       Mo Modal
      </button>

      {modal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "8px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <h3>Dang nhap</h3>
            <input
              ref={focusInput}
              type="text"
              placeholder="Nhap ten nguoi dung"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                marginRight:"30px",
                borderRadius: "5px",
                border: "1px solid grey",
              }}
            />
            <br />
            <button
              onClick={() => setModal(false)}
              style={{
                padding: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Dong
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
