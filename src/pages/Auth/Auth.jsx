import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineHome, AiOutlineArrowLeft } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import './auth.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import { BsSearch } from 'react-icons/bs'
const Auth = () => {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const [left, setLeft] = useState(0)
    const loginRegister = useRef(null)
    useEffect(() => {
        const container = loginRegister.current;
        [...container.querySelectorAll(".button")].forEach((btn, index) => {
            btn.onclick = function () {
                setLeft(100 * index)
                if (this.classList.contains("active")) return
                [...container.querySelectorAll(".button")].forEach(b => b !== this ? b.classList.remove("active") : b.classList.add("active"));
            }
        })
    }, []);

    return (
        <div className=' bg-white  position-relative auth__wrapper' style={{
            minHeight: "100svh"
        }}>
            <div className={`overlay ${active ? "active" : ""}`} onClick={()=>setActive(false)}>
                <div className={`country__container shadow ${active ? "active" : ""}`} onClick={(e)=>e.stopPropagation()}>
                    <div className=" 
            d-flex align-items-center pb-4 border-bottom border-3 px-3 pt-2">
                        <div className="input-group border-0">
                            <span className='input-group-text bg-transparent border-0'
                                id="basic-addon2"><BsSearch color='black' className='fs-6' /> </span>
                            <input type="text"
                                className='form-control ps-3 border-0'
                                placeholder='Search product here .. '
                                aria-controls='Search product here ..'
                                aria-describedby='basic-addon2'

                            />

                        </div>
                    </div>


                </div>


            </div>

            <div className="container">
                <div className="row py-4 ">
                    <div className="col-4"><AiOutlineArrowLeft className='fw-bolder' size={25} onClick={() => navigate("/user")} /></div>
                    <div className="col">
                        <div className="d-flex gap-4 login/register position-relative" ref={loginRegister}>
                            <div className="bottom-nav position-absolute bottom-0 bg-secondary rounded-3" style={{
                                left: left + "px",
                                height: "3px",
                                width: "90px",
                                transition: "left 0.5s ease"
                            }}>
                            </div>

                            <p className='fs-6 text-center    button login active' style={{
                                width: "100px"
                            }} >Login</p>
                            <p className='fs-6 text-center  button  register' style={{
                                width: "100px"
                            }}  >Register</p>

                        </div>

                    </div>
                </div>


                <Swiper spaceBetween={3} slidesPerView={1} onSlideChange={(e) => setLeft(e.activeIndex * 100)}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={
                        [Navigation, A11y]
                    }
                    navigation={{
                        prevEl: ".login",
                        nextEl: ".register",
                    }}

                >
                    <SwiperSlide>
                        <form style={{
                            width: "min(400px,calc(100% - 10px))"
                        }} className=" rounded-2 px-2 py-5 mx-auto">
                            <input type="email" placeholder='Phone/Email/Account' className='d-block w-100 my-4 rounded-pill border border-1 outline-none ps-4 py-2 ' />
                            <input type="email" placeholder='Phone/Email/Account' className='d-block w-100  my-4 rounded-pill border border-1 outline-none ps-4 py-2' />
                            <input type="button" value={"Login"} placeholder='Phone/Email/Account' className='d-block w-100  my-4 rounded-pill border border-1 outline-none ps-4 py-2' />

                        </form>
                    </SwiperSlide>
                    <SwiperSlide>
                        <form style={{
                            width: "min(400px,calc(100% - 10px))"
                        }} className=" rounded-2 px-2 py-5 mx-auto">
                            <input type="button" value={"🔥"} onClick={() => setActive(true)} className='d-block w-100  my-4 rounded-pill border border-1 outline-none ps-4 py-2' />

                            <input type="email" placeholder='Phone/Email/Account' className='d-block w-100 my-4 rounded-pill border border-1 outline-none ps-4 py-2 ' />
                            <input type="email" placeholder='Phone/Email/Account' className='d-block w-100  my-4 rounded-pill border border-1 outline-none ps-4 py-2' />
                            <input type="button" value={"Register"} placeholder='Phone/Email/Account' className='d-block w-100  my-4 rounded-pill border border-1 outline-none ps-4 py-2' />

                        </form>
                    </SwiperSlide>



                </Swiper>









            </div>
            <div className=" position-absolute bottom-0 ps-4 mb-3 w-100 d-flex  justify-content-between px-4" >
                <div className="social-icon">
                </div>
                <NavLink to={"/"} className='' >
                    <AiOutlineHome size={30} className="me-2 t-white" />
                </NavLink>
            </div>
        </div>
    )
}

export default Auth