import { useParams, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { shoes as _shoes, ProductData } from '../../Constants/ProductImage'
import { MdOutlineWindow } from 'react-icons/md'
import './caterogies.css'
import { FaList } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { Categorycard } from '../../components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { BsSearch } from 'react-icons/bs'
// import { Value } from 'sass'

const Categories = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    const navigate = useNavigate()
    const [product, setProduct] = useState([...ProductData])
    const [name, setName] = useState("all")
    const handleNameChange = (name) => {
        setName(name)
        setSearch("")
        if (name === "all") return setProduct([...ProductData])
        const temp = ProductData.filter((item) => item.productName.toLowerCase()
            .includes(name))
        setProduct([...temp])
    }
    const params = new URLSearchParams(window.location.search)
    const [search, setSearch] = useState("")

    const handleSearch = (value) => {
        if (value === "" || value === " ") {
            setProduct([...ProductData])

        }
        const temp = ProductData.filter((item) => item.productName.toLowerCase().trim()
            .includes(value.trim().toLocaleLowerCase()))
        setSearch(value.trim())

        setProduct([...temp])

    }

    useEffect(() => {
        const _search = params.get("search")
        if (_search) {
            handleSearch(_search)
            window.history.replaceState({}, {}, window.location.pathname)
        }

    }, [])
    const [view, toggleView] = useState(false)
    return (
        <div className='ourstore' style={{
            overflowX: "hidden"
        }}>
            <div className="container" >
                <div className=" bg-light text-dark border-bottom- border-1
            border-secondary d-flex align-items-center justify-content-between px-2 shadow-sm" style={{
                        height: "70px"
                    }} >
                    <span onClick={() => navigate("/")}><AiOutlineArrowLeft size={20} /></span>
                    <h2 className="fs-6 ff-manrope fw-bold mb-0">Our Store /<span className='fw-lighter text-muted' style={{

                        fontSize: "15px"
                    }}>
                        {name}</span></h2>
                    <span onClick={() => toggleView((view) => !view)}>
                        {!view ? <MdOutlineWindow size={20} /> : <FaList size={20} />}
                    </span>
                </div>
            </div>
            <div className="container">
                <Swiper spaceBetween={3} onSlideChange={() => console.log("slide change")} className="scrollto- pt-1 align-items-center" style={{
                    height: "40px"
                }}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={
                        [Navigation, Pagination, Scrollbar, A11y, Autoplay]
                    }
                    // pagination={{clickable:true}}
                    slidesPerView={4}
                    scrollbar={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 4,
                        },
                        786: {
                            slidesPerView: 6,
                        },
                        992: {
                            slidesPerView: 8,
                        },

                    }}
                >
                    <SwiperSlide>
                        <p style={{
                            flex: "none"
                        }} className="mb-0 fw-semibold ff-manrope px-3" onClick={() => {
                            handleNameChange("all")
                        }}>
                            All

                        </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <p style={{
                            flex: "none"
                        }} className="mb-0 fw-semibold ff-manrope px-3" onClick={() => {
                            handleNameChange("jacket")
                        }}>
                            Jackets
                        </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <p style={{
                            flex: "none"
                        }} className="mb-0 fw-semibold ff-manrope px-3" onClick={() => {
                            handleNameChange("watch")
                        }}>
                            Watches
                        </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <p style={{
                            flex: "none"
                        }} className="mb-0 fw-semibold ff-manrope px-3" onClick={() => {
                            handleNameChange("shirt")
                        }}>
                            Shirts
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p style={{
                            flex: "none"
                        }} className="mb-0 fw-semibold ff-manrope px-3" onClick={() => {
                            handleNameChange("short")
                        }}>
                            shots

                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p style={{
                            flex: "none"
                        }} className="mb-0 fw-semibold ff-manrope px-3" onClick={() => {
                            handleNameChange("trouser")
                        }}>
                            Trousers

                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p style={{
                            flex: "none"
                        }} className="mb-0 fw-semibold ff-manrope px-3" onClick={() => {
                            handleNameChange("ear")
                        }}>
                            Headsets

                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p style={{
                            flex: "none"
                        }} className="mb-0 fw-semibold ff-manrope px-3">
                            Pants

                        </p>
                    </SwiperSlide>
                </Swiper>


            </div>
            <div className="input-group  border border-dark border-2 rounded-5 overflow-hidden mx-auto " style={{
                width: "400px",
                maxWidth: "calc(100% - 40px)",
                height: "40px"

            }}>
                <span className='input-group-text bg-white border-0'><BsSearch color='black'
                    className='fs-6' /> </span>
                <input type="search"
                    className='form-control ps-3 h-100 border-0'
                    placeholder='search product ..'
                    aria-controls='Search product here ..'
                    aria-describedby='basic-addon2'
                    value={search}
                    onInput={e => handleSearch(e.target.value)}
                />
            </div>

            <div className="container" >
                <div className=" overflow-auto scrollto pt-3 pb-6" style={{
                    height: "calc(100vh - 155px)",
                    overflowX: "hidden !important"
                }}>
                    <div className="row  gy-3">
                        {
                            product.length > 0 ? (product.map((item, index) =>
                                <Categorycard _id={item._id} shoe={item.productImage[0]} view={view} key={index} />)) :


                                <>
                                    <h1 className="fs-4 fw-lighter mt-4 text-center">Couldn,t find <span
                                        className='fs-2 text-danger fw-light'>{search}</span></h1>
                                    <img src='https://c.tenor.com/4lA3ViMpstwAAAAj/wait-no.gif'
                                        className='mx-auto d-block' style={{
                                            width: "90%",
                                            height: "min(300px ,calc(100% - 30px )"
                                        }} alt='no messages' />

                                </>
                        }
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Categories