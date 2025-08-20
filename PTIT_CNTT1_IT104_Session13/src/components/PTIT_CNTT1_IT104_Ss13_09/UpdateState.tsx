import React, {useState} from 'react'

const UpdateState = () => {
    const [company, setCompany] = useState("Rikkei Academy");
    const handleChange = () => {
        setCompany("Rikkei Soft");
    };
  return (
    <div style={{textAlign: 'center', border: "1px solid black"}}>
        <h3>Ten cong ty: {company}</h3>
        <button style={{border: "1px solid black", borderRadius: "5px"}} onClick={handleChange}>Change</button>
    </div>
  )
}

export default UpdateState
