import './sidebar.css'
import { Link,useNavigate } from 'react-router-dom'
import { AiOutlineHome, AiOutlineClose, AiOutlineAppstoreAdd, AiOutlineContacts } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { useState } from 'react'
import person from '../../Constants/clothimages/ig_03.jpg'

const Sidebar = ({setToggleRightSideBar,toggleRightSideBar}) => {
const navigate=useNavigate()
    const [selected, setSelected] = useState(null);
    const handleSelect = (e, index) => {
        const i = selected === index ? null : index
        setSelected(i)
    }
    const menuItems = [
        <>
            <div className="d-flex  justify-content-between sidebar__items-name">
                <div className="d-flex align-items-center gap-2">
            <AiOutlineAppstoreAdd size={25}/>
                <h2 className='fs-6 d-inline-block mb-0 fw-light'>Our Store</h2>
                </div>
                <span className={`d-flex align-items-center justify-content-center  rounded-circle `} style={{
                width:"30px",
                height:"30px"
                
                }}> <BsChevronDown size={20} className=" t-white chevron" /></span>
            </div>
            <ul className="">
                <li>
                    <Link to={"/our-store?search=jacket"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">jacket</Link>
                </li>
                <li>
                    <Link to={"/our-store?search=watch"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">watches</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">headphones</Link>
                </li>
                <li>
                    <Link to={"/our-store?search=trouser"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">Trouser</Link>
                </li>
                <li>
                    <Link to={"/our-store?search=shirt"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">Shirts</Link>
                </li>
                <li>
                    <Link to={"/our-store?search=shot"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">Shot</Link>
                </li>

            </ul>

        </>,
        <>
            <div className="d-flex  justify-content-between sidebar__items-name">
                <h2 className='fs-6 d-inline-block mb-0 fw-light'>Overview</h2>
                <span className={`d-flex align-items-center justify-content-center  rounded-circle `} style={{
                width:"30px",
                height:"30px"
                
                }}> <BsChevronDown size={20} className=" t-white chevron" /></span>
            </div>
            <ul className="">
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>

            </ul>

        </>,
        <>
            <div className="d-flex  justify-content-between sidebar__items-name">
                <h2 className='fs-6 d-inline-block mb-0 fw-light'>Overview</h2>
                <span className={`d-flex align-items-center justify-content-center  rounded-circle `} style={{
                width:"30px",
                height:"30px"
                
                }}> <BsChevronDown size={20} className=" t-white chevron" /></span>
            </div>
            <ul className="">
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>

            </ul>

        </>,
        <>
            <div className="d-flex  justify-content-between sidebar__items-name">
                <h2 className='fs-6 d-inline-block mb-0 fw-light'>Overview</h2>
                <span className={`d-flex align-items-center justify-content-center  rounded-circle `} style={{
                width:"30px",
                height:"30px"
                
                }}> <BsChevronDown size={20} className=" t-white chevron" /></span>
            </div>
            <ul className="">
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>

            </ul>

        </>,
        <>
            <div className="d-flex  justify-content-between sidebar__items-name">
            <div className="d-flex align-items-center gap-2">
            <AiOutlineContacts size={25}/>
                <h2 className='fs-6 d-inline-block mb-0 fw-light'>Contact Us</h2>
                </div>                <span className={`d-flex align-items-center justify-content-center  rounded-circle `} style={{
                width:"30px",
                height:"30px"
                
                }}> <BsChevronDown size={20} className=" t-white chevron" /></span>
            </div>
            <ul className="">
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>
                <li>
                    <Link to={"/"} className="text-decoration-none text-dark
                                ff-manrope   fs-6 fw-lighter">fileuploads</Link>
                </li>

            </ul>

        </>,

    ]
// alert(toggleRightSideBar)
    return (
        <div className={`side__bar-container ${toggleRightSideBar?"active":""} `} onClick={()=>setToggleRightSideBar(false)}>
            <div className={`side__bar-content bg-white ${toggleRightSideBar?"active":""}`} onClick={e=>e.stopPropagation()}>
            <div className={`d-flex justify-content-between shadow align-items-center container mb-2`}>
            
                <h2 className="fw-semibold text-center text-md-start fs-5 ff-manrope  
                
                justify-content-center
                d-flex align-items-center" style={{
                        height: "50px"
                    }}>

                    <Link to={"/"} className="text-decoration-none text-dark  fw-bolder fs-4
                ">Sellam<span className='text-success'>2</span><span className='text-danger'>3
                        </span><span className='text-warning'>7</span></Link>
                        
                        
                </h2>
      
                <img src={person} alt="img" className='rounded-circle' style={{
                height:"35px",
                width:"35px"
                
                }} onClick={()=>navigate("/user")}  />
            </div>

                <div className="container d-flex flex-column  gap-2 scrollto overflow-auto pb-5 mb-5" style={{
                    height: "100%"
                }}>
                    <Link to={"/"} className="text-decoration-none text-dark ff-manrope  fw-semibold fs-5 text-center
                d-flex align-items-center py-2 bg-white 
                ">
                        <AiOutlineHome size={20} className="me-2 t-white" />
                        <h2 className='fs-6 d-inline-block mb-0'>Home</h2>
                    </Link>


                    {

                        menuItems.map((item, index) => {
                            return (
                                <div className={` position-relative side__bar-list-contents
                                ${selected == index ? "active" : ""} `} onClick={(e) => handleSelect(e, index)}>
                                    {item}
                                </div>
                            )
                        })
                    }










                </div>









                <div className="close-btn btn btn-outline-danger d-flex align-items-center justify-content-center rounded-0"
                onClick={()=>setToggleRightSideBar(()=>false)}
                >
                <AiOutlineClose size={40}/>
                </div>





                <div className="side__bar-btns d-flex flex-column container gap-2
                position-absolute bottom-0 start-0 pb-3 pt-3 rounded-3 bg-white" style={
                        {
                            zIndex: "22"
                        }} onClick={()=>navigate("/auth")}>
                    <button className="btn btn-outline-dark d-block">
                        Login
                    </button>
                    <button className="btn btn-outline-danger text-dark d-block">
                        Create Account
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Sidebar