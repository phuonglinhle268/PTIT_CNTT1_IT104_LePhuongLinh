import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Header() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("Header must be used within ThemeProvider");

  const { theme, toggleTheme } = context;

  const styles: React.CSSProperties = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "20px",
    textAlign: "center",
    marginTop:"30px"
  };

  return (
    <header style={styles}>
      <h2>My Themed App</h2>
      <button onClick={toggleTheme} style={{ marginTop: "10px" }}>
        Toggle Theme
      </button>
    </header>
  );
}
