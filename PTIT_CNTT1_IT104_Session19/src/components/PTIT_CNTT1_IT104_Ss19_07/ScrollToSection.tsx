import React, { useRef } from "react";
import "./scroll.css";

export default function ScrollToSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-container">
      <header className="header">
        <h1>Cuon toi noi dung</h1>
        <button onClick={handleScroll}>Di toi phan noi dung</button>
      </header>

      <div className="text">
        <p>Day la noi dung gia lap...</p>
        <p>Them nhieu doan tang chieu dai</p>
        <p>Cuon trang muot hon khi nhieu noi dung</p>
      </div>

      <div ref={targetRef} className="section">
        <h2>Phan noi dung muc tieu</h2>
      </div>
    </div>
  );
}
