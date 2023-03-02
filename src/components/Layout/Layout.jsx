import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import {Sidebar} from '../../components'
import { Outlet, useNavigate } from 'react-router-dom'
import { Header, Footer } from '../'
import { AiOutlineHome, AiOutlineMenu, AiOutlineStar } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { NavLink } from "react-router-dom"
const vibrateConst = 20
const Layout = ({ setToggleRightSideBar,toggleRightSideBar }) => {
  const navigate = useNavigate()
  var counter = 0
  const [up, setUp] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { pageYOffset } = window
      if (pageYOffset < 0.25 * window.innerHeight) return
      if (pageYOffset >= counter) {
        setUp(1)
      } else if (pageYOffset < counter) {
        setUp(0)
      }
      counter = pageYOffset <= 0 ? 0 : pageYOffset
    })

  }, [])


  const menuItems = [
    <NavLink className={"text-center  bg-white"} to={"/"} onClick={function () {
      return (window.navigator.vibrate([vibrateConst]))
    }}
    >
      <AiOutlineHome color='black' size={20} onClick={function () {
        return (window.navigator.vibrate([vibrateConst]))
      }} />
      <p className='text-dark text-uppercase mt-0 text-center mb-0'>home</p>
    </NavLink>,
    <div className={"text-center  "} to={"/"} onClick={function () {
      window.navigator.vibrate([vibrateConst])
      setToggleRightSideBar(()=>!toggleRightSideBar)
      
    }}>
      <AiOutlineMenu color='black' size={20} onClick={function () {
        return (window.navigator.vibrate([vibrateConst]))
      }} />
      <p className='text-dark text-uppercase mt-0 text-center mb-0'>menu</p>

    </div>, <NavLink className={"text-center  "} to={"/favorites"} onClick={function () {
      window.navigator.vibrate([vibrateConst])
    }}>
      <AiOutlineStar color='black' size={20} />
      <p className='text-dark text-uppercase mt-0 text-center mb-0'>favorite</p>


    </NavLink>
    , <div className="position-relative" onClick={() => navigate("/cart")}>
      <BsBag color='black' />
      <div className="position-absolute  " style={{
        top: "-6px", right: "-5px"
      }}>

        <div className="btn btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center"
          style={{ fontSize: "0.5rem", width: "15px", height: "15px" }}>0</div>
      </div>
    </div>

  ]
  return (
    <div className=''>
<Sidebar   setToggleRightSideBar={setToggleRightSideBar} 
toggleRightSideBar={toggleRightSideBar}/>
      <div className={`position-fixed top-auto end-0 home__arrow-scroll  rounded-circle bg-white  me-4 shadow d-flex align-items-center ${up == 0 ? "active" : "0"}`}
        style={{
          height: "50px",
          width: "50px",
          zIndex: 200,
          bottom: "8rem"
        }}


        onClick={() => window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })}
      >
        <AiOutlineArrowUp size={25} className="mx-auto fw-bolder " />
      </div>
      <Header />
      <Outlet />
      <div className="position-fixed bottom-0 left-0 right-0 w-100  py-1 bg-white d-md-none  " style={{ zIndex: 120 }}>
        <div className="d-flex align-items-center justify-content-between px-4 text-dark shadow ">
          {
            menuItems.map((Item, index) => {
              return (
              <div className={`text-center d-flex justify-content-center   ${selected==index?"fw-bolder":"fw-lighter"}`} onClick={
              ()=>setSelected(index)
              }>{Item} </div>
              )
            })

          }
        </div>

      </div>
      <Footer  />
    </div>
  )
}

export default Layout