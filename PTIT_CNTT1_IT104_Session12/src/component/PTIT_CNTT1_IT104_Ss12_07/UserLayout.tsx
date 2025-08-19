//bai 7

import React from 'react'
import Header7 from './Header7'
import Navigation from './Navigation'
import Main7 from './Main7'
import Menu7 from './Menu7'
import Article from './Article'

const UserLayout = () => {
  return (
    <div>
      <Header7 />
      <Navigation />
      <div style={{ display: "flex" }}>
        <Menu7/>
        <Main7 />
        <Article />
      </div>
    </div>
  )
}

export default UserLayout
