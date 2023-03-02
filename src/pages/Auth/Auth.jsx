import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineHome, AiOutlineArrowLeft } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import './auth.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import { BsSearch } from 'react-icons/bs'
import { countryListAlpha2 } from '../../Constants/country'


const Auth = () => {
    const [search, setSearch] = useState("")
    const [active, setActive] = useState(false)

    const [countrySelected, setCountrySelected] = useState("Select Country")
    const navigate = useNavigate()
    const [left, setLeft] = useState(0)
    const loginRegister = useRef(null)
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const container = loginRegister.current;
        [...container.querySelectorAll(".button")].forEach((btn, index) => {
            btn.onclick = function () {
                setLeft(100 * index)
                if (this.classList.contains("active")) return
                [...container.querySelectorAll(".button")].forEach(b => b !== this ? b.classList.remove("active") : b.classList.add("active"));
            }
        })
        setCountries([...Object.entries(countryListAlpha2)])
    }, []);
    const handleSearch = (value) => {

        const temp = [...Object.entries(countryListAlpha2)].filter((arr, index) => {
            if (arr[1].toLocaleLowerCase().includes(value.toLocaleLowerCase())) return arr

        })
        setCountries([...temp])
        setSearch(value)
    }
    const handleSelectedCountry = (country, key) => {
        //  button.current.value = `${country}`
        setCountrySelected(<div  className=" d-flex   align-items-center border-0">
        <span className={`rounded-circle border border-1  shadow-sm fi fi-${key.toLowerCase()} fis`} style={{
            width: "30px",
            height: "30px",
            flex: "none"
        }}></span>

        <h2 className="fs-6  ms-2 mb-0  clamp__height" style={{
            fontWeight: "400",
            "--ch": "1"
        }}>{country}</h2>

    </div>)

        setActive(() => false)

    }
    return (
        <div className=' bg-white  position-relative auth__wrapper' style={{
            minHeight: "100svh"
        }}>
            <div className={`overlay ${active ? "active" : ""}`} onClick={() => setActive(false)}>
                <div className={`country__container  overflow-hidden   shadow ${active ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <div style={{
                        height: "80px"
                    }} className=" 
            d-flex align-items-center pb-4 border-bottom border-3 px-3 pt-2">
                        <div className="input-group border-0">
                            <span className='input-group-text bg-transparent border-0'
                                id="basic-addon2"><BsSearch color='black' className='fs-6' /> </span>
                            <input type="search"
                                className='form-control ps-3 border-0'
                                placeholder='Search product here .. '
                                aria-controls='Search product here ..'
                                aria-describedby='basic-addon2'
                                onInput={(e) => handleSearch(e.target.value)} />
                        </div>
                    </div>

                    <div className="contries ps-4 overflow-auto scrollto bg-white" style={{

                        height: "calc(100% - 80px)"
                    }}>     {search.length < 1 && (<h1 className="text-muted fs-6 fw-light my-3 ff-manrope ">Country & Territories ( <span className='ff-shadow'>A-Z</span> )   </h1>)}
                        {countries.length > 0 ? countries.map(([key, country], index) => {

                            return (<div key={index} onClick={() => handleSelectedCountry(country, key)} className=" d-flex my-3 btn btn-outline-secondary bg-opacity-75 align-items-center border-0">
                                <span className={`rounded-circle border border-1  shadow-sm fi fi-${key.toLowerCase()} fis`} style={{
                                    width: "30px",
                                    height: "30px",
                                    flex: "none"
                                }}></span>

                                <h2 className="fs-6  ms-3 mb-0  clamp__height" style={{
                                    fontWeight: "400",
                                    "--ch": "1"
                                }}>{country}</h2>

                            </div>)


                        }
                        ) :
                            (
                                <>
                                    <h1 className="fs-4 fw-lighter mt-4 text-center">Couldn,t find <span
                                        className='fs-2 text-danger fw-light'>{search}</span></h1>
                                    <img src='https://c.tenor.com/4lA3ViMpstwAAAAj/wait-no.gif' className='mx-auto d-block' style={{
                                        width: "90%",
                                        height: "min(300px ,calc(100% - 30px )"
                                    }} alt='no messages' />

                                </>
                            )

                        }

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

                            <p className=' text-center    button login active' style={{
                                width: "100px"
                            }} >Login</p>
                            <p className=' text-center  button  register' style={{
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
                            <input type="email" placeholder='Email' className='d-block w-100 my-4 rounded-pill border border-1 outline-none ps-4 py-2 ' />
                            <input type="password" placeholder='Password' className='d-block w-100  my-4 rounded-pill border border-1 outline-none ps-4 py-2' />
                            <input type="button" value={"Login"}  className='d-block w-100  my-4 rounded-pill border border-1 outline-none ps-4 py-2' />

                        </form>
                    </SwiperSlide>
                    <SwiperSlide>
                        <form style={{
                            width: "min(400px,calc(100% - 10px))"
                        }} className=" rounded-2 px-2 py-5 mx-auto">
                            <button type="button"  onClick={() => setActive(true)} className='d-block w-100 fs-5 
                           ff-manrope shadow-sm fw-lighter  my-4 rounded-pill border border-1 outline-none ps-4 py-2 ' >
                           {countrySelected}
                           
                           </button>

                            <input type="email" placeholder='Email' className='d-block w-100 my-4 rounded-pill border border-1 outline-none ps-4 py-2 ' />
                            <input type="password" placeholder='Password'
                            className='d-block w-100  my-4 rounded-pill border border-1 outline-none ps-4 py-2' />
                            <input type="button" value={"Register"}  className='d-block w-100  my-4 rounded-pill border border-1 outline-none ps-4 py-2' />

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