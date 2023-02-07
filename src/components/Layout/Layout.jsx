import React from 'react'
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div>
    <div>
    hello from Outlet
    
    </div>
    <Outlet/>
    </div>
  )
}

export default Layout