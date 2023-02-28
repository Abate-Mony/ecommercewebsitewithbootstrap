
import './user.css'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { FiCalendar, FiChrome, FiDroplet, FiInstagram, FiLinkedin, FiMaximize, FiSave, FiSettings, FiYoutube } from 'react-icons/fi'
import {MdLanguage} from 'react-icons/md'
import {GiWorld} from 'react-icons/gi'
import {GrReactjs} from 'react-icons/gr'
import {FaVuejs} from 'react-icons/fa'

import{AiOutlineHome,AiOutlineMenu,AiOutlineStar,AiOutlineArrowLeft, AiOutlineUser} from 'react-icons/ai'
import {NavLink} from "react-router-dom"
const vibrateConst=20
const User = () => {
    const [view,setView]=useState(false)

const navigate=useNavigate()
    return (
        <div className='bg-light pb-5'>

            <div className=' bg__primary container' style={{
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px",
            }}>
                <div className=" text-white container pt-4 d-flex" style={{
                    paddingBottom: "40px"
                }}>
                
                <span onClick={()=>navigate("/")}><AiOutlineArrowLeft size={25}/></span>
                    <div className="ms-auto d-flex" style={{
                        width: "fit-content"
                    }}>
                        <h3 className='fs-5  ff-shadow'>English</h3>
                        <p className='ms-2 me-4 text-white'><MdLanguage  color='white' className='text-white' size={25}/></p>
                        {/* <FiSettings size={20} /> */}
                    </div>

                </div>
            </div>

            <div className="bg-warning shadow  login__register-container mx-auto rounded-pill d-flex justify-content-center gap-2 fs-3
            align-items-center" style={{
                    height: "40px",
                    marginTop: "-20px",
                }} onClick={()=>navigate("/auth")}>
                <h3 className='fs-6 pt-1 text-black ff-manrope'>Login /</h3>
                <h3 className='fs-6 pt-1 text-black ff-manrope'>Register</h3>

            </div>
            <div className='d-flex container mt-5 px-4  mb-4'>
                <h4 className="fw-semibold fs-4 ff-manrope">My Order</h4>
                <p className='ms-auto text-primary fw-light' onClick={()=>setView(!view)}> {view?"View Less":"View All"}</p>
            </div>

            <div className={`d-flex overflow-auto  pb-3 px-2 bg-light container
            ${view?"flex-wrap justify-content-center":" scrollto"}`} style={{
                transition:"all 2s ease"
            }}>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none",
                    
                }}>
                    <AiOutlineUser size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>User Payment</p>
                </div>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none"
                }}>
                    <GiWorld size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>World Fast Api</p>
                </div>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none"
                }}>
                    <FaVuejs size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>Modern Technology</p>
                </div>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none"
                }}>
                    <GrReactjs size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>Upgraged Systems</p>
                </div>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none"
                }}>
                    <FiSave size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>Save From Hackers</p>
                </div>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none"
                }}>
                    <FiYoutube size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>Compactable with Modern tech</p>
                </div>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none"
                }}>
                    <FiInstagram size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>Connecting the World</p>
                </div>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none"
                }}>
                    <FiDroplet size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>drop on price scale</p>
                </div>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none"
                }}>
                    <FiCalendar size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>Payment On Time</p>
                </div>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none"
                }}>
                    <FiMaximize size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>Maximize Payment</p>
                </div>
                <div className='shadow bg-white rounded-3 p-2 mx-1 mb-3' style={{
                    flex: "none"
                }}>
                    <FiLinkedin size={30} className="d-block mx-auto" />
                    <p className='mb-0 mt-2'>Social Workings </p>
                </div>
                
                

            </div>
            <div className="wrapper bg-white my-5 container shadow rounded-1">
                <div className="d-flex gap-3 align-items-center py-3 ps-4">
                    <FiSettings size={20} />
                    <p className='fw-light text-dark fs-6 m-0 p-0 '>Wish List</p>
                </div>
                <div className="d-flex gap-3 align-items-center py-3 ps-4">
                    <FiSettings size={20} />
                    <p className='fw-light text-dark fs-6 m-0 p-0 '>Stored Follow</p>
                </div>
                <div className="d-flex gap-3 align-items-center py-3 ps-4">
                    <FiSettings size={20} />
                    <p className='fw-light text-dark fs-6 m-0 p-0 '>Recent View</p>
                </div>
                <div className="d-flex gap-3 align-items-center py-3 ps-4">
                    <div className='d-flex  align-items-center'>
                        <FiSettings size={20} />
                        <p className='fw-light text-dark fs-6 m-0 p-0 ms-3'>My Vouchers</p>
                    </div>
                    <p className='ms-auto text-primary fw-light me-3' >Available : <span className='text-muted'>0</span></p>
                </div>
                <div className="d-flex gap-3 align-items-center py-3 ps-4">
                    <div className='d-flex  align-items-center'>
                        <FiSettings size={20} />
                        <p className='fw-light text-dark fs-6 m-0 p-0 ms-3'>My Keypay</p>
                    </div>
                    <p className='ms-auto text-primary fw-light me-3' >Balance
                        : <span className='text-muted'>$0</span></p>
                </div>
            </div>
            <div className="wrapper bg-white my-2 container shadow rounded-1">
            
                <div className="d-flex gap-3 align-items-center py-3 ps-4">
                    <FiSettings size={20} />
                    <p className='fw-light text-dark fs-6 m-0 p-0 '>Wish List</p>
                </div>
                <div className="d-flex gap-3 align-items-center py-3 ps-4">
                    <FiMaximize size={20} />
                    <p className='fw-light text-dark fs-6 m-0 p-0 '>Stored Follow</p>
                </div>
                <div className="d-flex gap-3 align-items-center py-3 ps-4">
                    <FiChrome size={20} />
                    <p className='fw-light text-dark fs-6 m-0 p-0 '>Recent View</p>
                </div>
             
             
            </div>
          <div className="d-flex  justify-content-center align-items-center gap-2 mb-5">
          <span className='bg-secondary rounded-pill' style={{
          width:"50px",
          height:"2px"
          }}></span> <p className='m-0 p-0'>the</p>  <span className='bg-secondary rounded-pill' style={{
            width:"50px",
            height:"2px"
            }}></span>
          </div>
          <div className="position-fixed bottom-0 left-0 right-0 w-100 px-2 py-3 bg-dark d-md-none bg-opacity-75 " style={{ zIndex: 120 }}>
                <div className="d-flex align-items-center justify-content-between px-4">

                    <NavLink to={"/"} onClick={function () {
                        return (window.navigator.vibrate([vibrateConst]))
                    }}>
                        <AiOutlineHome color='white' size={20} onClick={function () {
                            return (window.navigator.vibrate([vibrateConst]))
                        }} />
                    </NavLink>
                    <NavLink to={"/"} onClick={function () {
                        return (window.navigator.vibrate([vibrateConst]))
                    }}>
                        <AiOutlineMenu color='white' size={20} onClick={function () {
                            return (window.navigator.vibrate([vibrateConst]))
                        }} />
                    </NavLink>

                    <NavLink to={"/favorites"} onClick={function () {
                        return (window.navigator.vibrate([vibrateConst]))
                    }}>
                        <AiOutlineStar color='white' size={20} />

                    </NavLink>
                    {/* <div className="position-relative" onClick={() => setToggleSideBar(function () {
                        return true
                    })}>

                        <BsBag color='white' />
                        <div className="position-absolute  " style={{
                            top: "-6px", right: "-5px"
                        }}>
                            <div className="btn btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ fontSize: "0.5rem", width: "15px", height: "15px" }}>0</div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default User