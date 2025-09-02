import React, {useState} from 'react'

export default function Form() {
    const [userName, setUserName] = useState<string>("");
    const [gender, setGender] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    const handleChangeUserName = (event:React.ChangeEvent<HTMLInputElement>){
        setUserName(event.target.value);
    };
    const handleChangeGender = (event:React.ChangeEvent<HTMLInputElement>){
        setGender(event.target.value);
    };
    const handleChangeEmail = (event:React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value);
    }
    const handleChangeAddress = (event:React.ChangeEvent<HTMLInputElement>){
        setAddress(event.target.value);
    }
    

  return (
    <div>
      <form action="">
        <input type="text" placeholder="username" />
        <div>
          <input type="radio" />
          Nam
          <input type="radio" />
          Nữ
          <input type="radio" />
          Khác
        </div>
        <br/>
        <input checked={gender === 0} onChange={handleChangeGender} type="text" placeholder="Email" />
        <input type="text" placeholder="Address" />
        <button>Submit</button>
      </form>
    </div>
  )
}
