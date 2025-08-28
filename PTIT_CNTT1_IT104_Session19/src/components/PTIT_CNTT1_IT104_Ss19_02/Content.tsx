import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Content() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("Content must be used within ThemeProvider");

  const { theme } = context;

  const styles: React.CSSProperties = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "20px",
  };

  return (
    <main style={styles}>
      <p>Day la phan noi dung chinh cua ung dung</p>
      <p>Theme hien tai: <b>{theme}</b></p>
    </main>
  );
}
