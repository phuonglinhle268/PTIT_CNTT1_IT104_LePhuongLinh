import React from 'react'
import {Link} from 'react-router-dom'

export default function CustomLink() {
  return (
    <div  style={{ padding: "20px", background: "f9f9f9" }}>
      <Link to="/">Tới trang chủ</Link>
    </div>
  )
}
