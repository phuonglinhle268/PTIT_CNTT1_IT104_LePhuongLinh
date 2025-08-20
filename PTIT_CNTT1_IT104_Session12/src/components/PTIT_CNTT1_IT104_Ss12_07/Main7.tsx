import React from 'react'
import Cart from './Cart'

const Main7 = () => {
  return (
    <div style={{
        background: "#fef2f2",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        padding: "20px",
        flex: 1,
    }}>
      {Array.from({ length: 12 }).map((_, index) => (
        <Cart key={index} />
        //tao mang co 12 ptu rong
        //map de duyet
        //cac ptu ko co gtri -> _
        //index: chi so cho ptu
        //moi ptu react se render ra 1 cart theo key
      ))}
    </div>
  )
}

export default Main7
