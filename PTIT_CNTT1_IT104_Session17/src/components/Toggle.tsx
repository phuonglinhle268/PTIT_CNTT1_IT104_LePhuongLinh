import React, {useState} from 'react'

export default function Toggle() {
    const [showUp, setShowUp] = useState(true);

    const handleToggle = () => {
        setShowUp(!showUp);
    }
  return (
    <>
    <div style={{marginTop:"20px", backgroundColor:"yellow", padding:"20px"}}>
        <button style={{backgroundColor:"skyblue"}} onClick={handleToggle}>
        {showUp ? "Ẩn" : "Hiện"}
      </button>
      {showUp && <p>Tiêu đề văn bản</p>}
    </div>
    </>
  )
}
