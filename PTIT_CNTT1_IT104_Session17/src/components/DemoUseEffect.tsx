import React, { useEffect, useState } from "react";

export default function DemoUseEffect() {
  const [count, setCount] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  // Trường hợp 1: useEffect chỉ có callback
  //   useEffect(() => {
  //     console.log("UseEffect trường hợp 1 được gọi");
  //   });

  // Trường hợp 2: useEffect có callback và []
  //   useEffect(() => {
  //     console.log("UseEffect trường hợp 2 được gọi");
  //   }, []);

  // Trường hợp 3: useEffect có callback và [deps]
  useEffect(() => {
    console.log("UseEffect trường hợp 3 được gọi");
  }, [count, email]);

  return (
    <div>
      <h1>DemoUseEffect</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
}