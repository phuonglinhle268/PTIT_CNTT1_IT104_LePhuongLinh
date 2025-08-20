//Bai 6

import React from 'react'
import Header from './Header'
import Main from './Main'
import Menu from './Menu'
import Footer from './Footer'

const AdminIndex = () => {
  return (
    <div>
      <Header />
      <div style={{display: 'flex'}}>
        <Menu/>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
}

export default AdminIndex
