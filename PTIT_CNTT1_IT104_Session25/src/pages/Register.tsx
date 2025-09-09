import React from 'react'

export default function Register() {
  return (
    <div style={{border:"1px solid grey", padding:"20px 30px", borderRadius:"8px"}}>
          <h3 >Login Account</h3>
          <form style={{marginBottom:"20px"}}>
            <div>
                <label>Your email</label>
                <br/>
                <input type="email" placeholder="name@company.com" 
                style={{padding:"10px", margin:"15px", borderRadius:"3px", border:"1px solid grey"}}/>
            </div>
            <div>
                <label>Password</label>
                <br/>
                <input type="password"
                style={{padding:"10px", margin:"15px", borderRadius:"3px", border:"1px solid grey"}}/>
            </div>
                <div>
                <label>Confirm password</label>
                <br/>
                <input type="password"
                style={{padding:"10px", margin:"15px", borderRadius:"3px", border:"1px solid grey"}}/>
            </div>
            <button style={{color:"white", backgroundColor:"blue", borderRadius:"5px"}}>Create an account</button>
          </form>
        </div>
  )
}
