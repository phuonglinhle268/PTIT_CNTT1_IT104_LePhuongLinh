import React, {useState} from 'react'

export default function ChangeColor() {
    const [color, setColor] = useState("black")

    const handleChange = () => {
      setColor(color === "black" ? "red" : "black")
    }
  return (
    <div style={{backgroundColor: "wheat", padding:"20px"}}>
      <p style={{color: color}}>Tiêu đề văn bản</p>
      <button style={{border:"1px grey", backgroundColor:"skyblue"}} onClick={handleChange}>Thay đổi màu</button>
    </div>
  )
}
