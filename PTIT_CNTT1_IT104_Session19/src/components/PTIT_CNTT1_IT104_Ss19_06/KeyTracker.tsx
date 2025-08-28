import React, { useEffect, useState } from "react";
import "./key.css";

export default function KeyTracker() {
  const [key, setKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="key">{key}</h1>
    </div>
  );
}
