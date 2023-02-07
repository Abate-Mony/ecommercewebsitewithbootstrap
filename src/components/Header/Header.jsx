
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { compare, wishlist, user, cart, menu } from './image'
import './header.css'
import { BsBag } from 'react-icons/bs'

import { useState } from 'react'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const _links_arrays = [
    {
      imgSrc: compare,
      p1: "Compare",
      p2: "Product"
    },
    {
      imgSrc: wishlist,
      p1: "Favorite",
      p2: "Wishlist"
    },
    {
      imgSrc: user,
      p1: "Login",
      p2: "My Account"
    },
    {
      imgSrc: cart,
      p1: <button className='btn 
      border text-black bg-white badge p-0 ms-1 mb-1 px-2 fw-bold text-muted rounded-pill
      ' style={{ fontSize: "0.5rem" }}>0</button>,
      p2: "$0.00"
    },


  ]




  return (
    <>
      <div className="header__top-strip py-1 pb-0
      shadow   bg-dark  position-relative" >
        <div className={`header__sidebar-container d-md-none
      position-fixed top-0 left-0 bg-dark h-100 w-100 bg-opacity-75 ${toggle && "header__sidebar-block"} `} style={
            {
              zIndex: 222
            }} onClick={e => setToggle(function () {

              return false
            })}>
          <ul className={`header__sidebbar-content position-relative bg-dark bg-opacity-100 ${toggle && "header__sidebar-left"}`}>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"/store"}>House</Link></li>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"/"}>home</Link></li>
            <div className="position-absolute  bottom-0 bg-dark  w-100 start-0 bg-opacity-25 d-flex align-items-center pb-3 pt-1" >
              <img src={menu} alt="user" className=' ms-3 mt-1' style={{
                width: "40px",
                height: "40px"
              }} />
              <img src={user} alt="user" className='ms-auto  me-3 mt-1' style={{
                width: "40px",
                height: "40px"
              }} />
            </div>
          </ul>

        </div>
        <div className="container-xxl d-none d-sm-block overflow-hidden">
          <div className="row align-items-center fs-6">
            <div className="col-6">
              <p>free shipping over 11000 & tour</p>
            </div>
            <div className="col-6">
              <p className='text-end'>
                Hotline: <a href="tel:+237672301714"
                  className='text-white text-decoration-none'> +237 672301714</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <header className="header__upper bg-dark text-white
      py-2 px-0 px-sm-3 px-md-4 px-lg-5 ">

        <div className="container-xxl">
          <div className="row align-items-center gy-2">
            <div className="col-md-4 col-lg-2  border-danger position-relative">

              <div className="position-absolute top-0 end-0 me-3 align-items-center d-flex d-sm-none ">
                <div className="" onClick={function () {
                  return (window.navigator.vibrate([50]))
                }}>
                  <Link to={"user"}> <img src={user} alt="user" style={{
                    width: "25px",
                    height: "25px"
                  }} /></Link>
                </div>
                <div className="ms-2 position-relative" onClick={function () {
                  return (window.navigator.vibrate([50]))
                }}>
                <div className="position-absolute  " style={{
                top:"-6px",right:"-5px"}}>
                <div className="btn btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center" style={{fontSize:"0.5rem",width:"15px",height:"15px"}}>0</div>
                </div>
                  <NavLink to="/cart">
                    <BsBag color='white' />
                  </NavLink>

                </div>

              </div>

              <h3><span className="d-sm-none me-4 btn btn-outline-warning"


                onClick={e => {
                  setToggle(function () {
                    return (
                      true)
                  })
                }} style={{

                  transform: "rotate(90deg"
                }}>|||</span><Link to={"/"} className="text-decoration-none text-white  fw-bolder  ">Sellam<span className='text-success'>2</span><span className='text-danger'>3</span><span className='text-warning'>7</span></Link></h3>
            </div>
            <div className="col-md-8 col-lg 
            d-flex align-items-center border-0 ">
              <div className="input-group ">
                <input type="text"
                  className='form-control ps-3 '
                  placeholder='Search product here .. '
                  aria-controls='Search product here ..'
                  aria-describedby='basic-addon2'

                />
                <span className='input-group-text bg-warning'
                  id="basic-addon2"><BsSearch color='black' className='fs-6' /> </span>
              </div>
            </div>
            <div className="col-md-12 col-lg">
              <ul className="header__upper-links 
            d-flex align-items-center m-0 p-2
            justify-content-sm-center  justify-content-between gap-2 px-4 px-sm-2 ">


                <li className='list-unstyled'><Link to={"/"}
                  className="text-decoration-none  text-white d-flex align-items-center gap-1 lh-1 ">
                  <div className="header__up-img_container">
                    <img src={compare} alt="compare" className='img-fluid' /></div>

                  <div className="">
                    <p className='m-0 p-0 pb-1 ' style={{ fontSize: "0.8rem" }}>Compare</p>
                    <p className='m-0 p-0 ' style={{ fontSize: "0.8rem" }}>Product</p>
                  </div>
                </Link></li>
                <li className='list-unstyled'><Link to={"/"}
                  className="text-decoration-none  text-white d-flex align-items-center gap-1 lh-1 ">
                  <div className="header__up-img_container">
                    <img src={wishlist} alt="compare" className='img-fluid' /></div>

                  <div className="">
                    <p className='m-0 p-0 pb-1 ' style={{ fontSize: "0.8rem" }}>Favorite</p>
                    <p className='m-0 p-0 ' style={{ fontSize: "0.8rem" }}>Wishlist</p>
                  </div>
                </Link></li>
                <li className='list-unstyled d-none d-sm-block'><Link to={"/"}
                  className="text-decoration-none  text-white d-flex align-items-center gap-1 lh-1 ">
                  <div className="header__up-img_container">
                    <img src={user} alt="compare" className='img-fluid' /></div>

                  <div className="">
                    <p className='m-0 p-0 pb-1 ' style={{ fontSize: "0.8rem" }}>Login</p>
                    <p className='m-0 p-0 ' style={{ fontSize: "0.8rem" }}>My Account</p>
                  </div>
                </Link></li>
                <li className='list-unstyled '><Link to={"/"}
                  className="text-decoration-none  text-white d-flex align-items-center gap-1 lh-1 ">
                  <div className="header__up-img_container">
                    <img src={cart} alt="compare" className='img-fluid' /></div>

                  <div className="">
                    <p className='m-0 p-0 pb-1 ' style={{ fontSize: "0.8rem" }}> <button className='btn 
      border text-black bg-white badge p-0 ms-1 mb-1 px-2 fw-bold text-muted rounded-pill
      ' style={{ fontSize: "0.5rem" }}>0</button></p>
                    <p className='m-0 p-0 ' style={{ fontSize: "0.8rem" }}>$0.00</p>
                  </div>
                </Link></li>





              </ul>

            </div>
          </div>
        </div>
      </header>
      <div className="header__bottom-strip
      py-1 bg-dark bg-opacity-75    px-0  shadow  px-sm-3 px-md-4 px-lg-5  pb-2">
        <div className="container-xxl ">
          <div className="d-flex  gap-2 flex-column flex-md-row">

            <div className="dropdown   align-items-center m-0 p-2
            justify-content-between gap-2">
              <button className="btn btn-secondary dropdown-toggle bg-transparent
              d-flex align-items-center  d-flex justify-content-between  w-100" type='button'
                id='dropdownMenuButton1'
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="header__up-img_container ">
                  <img src={menu} alt="menu" />
                </div>
                <span className='me-5 d-inline-block ms-2'>Show categories</span>

              </button>
              <ul className='dropdown-menu w-100'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <Link to="/" className="dropdown-item text-white">Action</Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item text-white">Action</Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item text-white">Action</Link>
                </li>
              </ul>
            </div>

            <div className="d-flex gap-2 
            text-white align-items-center px-4 justify-content-between justify-content-md-center dropdown-links 
            ">
              <p className="m-0 "><NavLink to={"/"}>HOME</NavLink></p>
              <p className="m-0"><NavLink to="/our-store">OUR STORE</NavLink></p>
              <p className="m-0">BLOGS</p>
              <p className="m-0">CONTACT</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Header