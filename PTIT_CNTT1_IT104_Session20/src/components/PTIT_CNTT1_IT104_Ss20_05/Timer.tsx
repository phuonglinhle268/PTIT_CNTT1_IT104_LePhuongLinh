import React, { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div style={{marginTop:"30px", marginLeft:"30px", border:"1px solid grey", textAlign:'center'}}>
    <h2>Timer: {count}</h2>
  </div>;
}
