import React, {useEffect} from 'react'

export default function Welcome() {
    useEffect(() => {
        console.log("Component da duoc render lan dau");
    }, []);
  return (
    <div style={{border:"1px solid grey", marginTop:"30px", padding:"10px", marginLeft:"30px"}}>
      <h3>Chao mung ban den voi ung dung cua chung toi</h3>
    </div>
  )
}
