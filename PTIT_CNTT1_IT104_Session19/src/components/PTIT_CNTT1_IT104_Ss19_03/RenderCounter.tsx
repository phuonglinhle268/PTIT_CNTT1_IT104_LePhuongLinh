import React, {useState, useRef, useEffect} from 'react'

export default function RenderCounter() {
    const [count, setCount] = useState("");
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })
  return (
    <div style={{padding:"20px", marginTop:"30px", backgroundColor:"wheat"}}>
        <h3>Componet Render Counter</h3>
        <label>Input:  </label>
      <input type='text' value={count}
      onChange={(event) => setCount(event.target.value)}
       style={{ padding: "8px", marginBottom: "10px", border:"none", borderRadius:"3px" }}
      />
      <p>Component da render: {renderCount.current} </p>
    </div>
  )
}
