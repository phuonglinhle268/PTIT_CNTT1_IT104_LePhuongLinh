import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <nav className="nav">
        <NavLink to ="/" end>Home</NavLink>  {/*end: chỉ active khi URL khớp chính xác với đường dẫn. */}
        <NavLink to ="/product">Product</NavLink>
        <NavLink to = "/detail">Detail</NavLink>

         <style>{`
        .nav {
          display: flex;
          gap: 20px;
          padding: 10px;
        }
        .nav a {
          text-decoration: none;
          color: black;        
        }
        .nav a.active {
          color: red;        
        }`
        }</style>
      </nav>
    </div>
  )
}


