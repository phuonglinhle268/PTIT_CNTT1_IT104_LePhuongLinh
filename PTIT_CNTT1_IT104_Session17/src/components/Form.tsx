import React, {useState} from 'react'

export default function Form() {
    const [user, setUser] = useState('');

    const handleChange = (event: React.FormEvent) => {
        setUser(event.target.value);
    }
  return (
    <div style={{backgroundColor:"pink", padding:"20px", marginTop:"20px"}}>
      <div style={{ display:"flex", justifyContent: "center"}}>
        <label>Nhập nội dung</label>
        <input style={{borderRadius:"5px", border:"none", marginLeft:"10px"}} type='text' value={user} onChange={handleChange} placeholder='Nhập nội dung'/>
      </div>
      <p>{user}</p>
    </div>
  )
}
