import React, {useState} from 'react'
import "./profile.css"
export default function UserProfile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        setIsSubmit(true);
    }
  return (
    <div style={{marginLeft:"30px", padding:"20px", marginTop:"30px", border:"1px solid grey"}}>
        <h3>Thông tin người dùng</h3>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Tên</label>
            <br/>
            <input type='text' value={name}
            placeholder="Nhập tên..."
            onChange={(event) => setName(event.target.value)}
            className='info'
            />
        </div>
        <div>
            <label>Email</label>
            <br/>
            <input type='email' value={email}
            placeholder="Nhập email..."
            onChange={(event) => setEmail(event.target.value)}
            className='info'
            />
        </div>
        <button className='btn' type='submit'>Submit</button>
      </form>
      {isSubmit && (
        <div>
            <p>Tên: {name}</p>
            <p>Email: {email}</p>
        </div>
      )}
    </div>
  )
}
