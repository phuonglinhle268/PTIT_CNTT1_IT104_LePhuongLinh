import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>About</h2>
      <button onClick={() => navigate("/contact")}>Go to contact</button>
      <button onClick={() => navigate(-1)}>Previous</button>
    </div>
  );
}