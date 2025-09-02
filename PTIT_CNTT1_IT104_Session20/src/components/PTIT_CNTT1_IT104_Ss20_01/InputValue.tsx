import React, {useState} from 'react'

export default function InputValue() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
  return (
    <div style={{padding:"20px", backgroundColor:"wheat", borderRadius:"4px", marginLeft:"30px"}}>
      <h3>Kiem tra do dai chuoi nhap vao</h3>
      <input
      style={{borderRadius:"4px", padding:"10px", border:"none"}}
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Nhap vao day"  />
      {inputValue.length > 5 && (<p style={{color:"red"}}>Chuoi co do dai qua 5 ki tu</p>)}
    </div>
  )
}
