
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { compare, wishlist, user, cart, menu } from './image'
import './header.css'
import { BsBag } from 'react-icons/bs'
import { RiCloseFill } from 'react-icons/ri'
import _person from './../../Constants/clothimages/product_02.jpg'
import Card from '../Card/Card'
import { ProductData } from '../../Constants/ProductImage'
const Header = ({ toggleSideBar, setToggleSideBar }) => {
  return (
    <>
      <div className={`home__cart-righsidebar ${toggleSideBar && "active"}`}>

        <div className={`home__cart-righside_content  ${toggleSideBar && "active"}`}>
          <div className="position-absolute  paynow
          
          rounded-3
          containers  bg-white w-100 pb-1 pt-4" style={{

              top: "auto",
              zIndex: 10,
              marginTop: "auto",
              bottom: "0"


            }}>
            <div className="d-flex  justify-content-between px-4">

              <div>

                <h2 className="text-muted ff-manrope">
                  Total
                </h2>
                <h1 className='ff-manrope'>$267,23</h1>
              </div>
              <div>
                <div className="btn btn-danger align-items-center d-flex text-capitalize bg-opacity-25 text-white rounded-pill px-4" style={{
                  height: "60px",
                  fontSize: "1.4rem"
                }} >
                  pay now
                </div>
              </div>
            </div>

          </div>
          <div className="close-btn
       ff-shadow d-flex align-items-center
       justify-content-center   text-light 
       absolute start-0 top-0"
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "-45px"
            }}
            onClick={(e) => setToggleSideBar(function () {
              return false
            })}>
            <RiCloseFill size={30}
              className="text-danger fw-bold" />



          </div>
          <div className="container position-relative" >




            <div className="row  align-items-center" style={{
              marginTop: "-20px"
            }}>
              <div className="col p-0">
                <h3 className='text-center'>Card</h3>
              </div>
              <div className="col-2 p-0  d-flex justify-content-end">
                <img src={_person} alt="user" className='
              text-dark bg-dark img-fluid
              border-4 border-danger me-2 rounded-circle' style={{
                    width: "40px",
                    height: "40px"
                  }} />
                {/* end header */}


              </div>
            </div>

            <div className="d-flex flex-column gap-y-5 mt-2 overflow-auto" style={{
              height: "100vh"
            }}>
              <div className="bg-white  rounded-3">
                {
                  ProductData.map(({ productImage, productPrice, productName, productDescript }, index) => <Card
                    key={index} price={productPrice} closeSidebar={setToggleSideBar} productId={index}
                    description={productDescript} item_name={productName} imgUrl={productImage[0]} />)
                }

              </div>
            </div>
            {/* </div> */}
          </div>


        </div>
      </div>
      <div className="header__top-strip py-1 pb-0
      shadow   bg-dark  position-relative">
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
      <header className="header__upper bg__primary text-white
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
                    top: "-6px", right: "-5px"
                  }}>
                    <div className="btn btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ fontSize: "0.5rem", width: "15px", height: "15px" }}>0</div>
                  </div>
                  <NavLink to="/cart">
                    <BsBag color='white' />
                  </NavLink>

                </div>

              </div>

              <h3>
                <Link to={"/"} className="text-decoration-none text-white  fw-bolder fs-1 ">Sellam<span className='text-success'>2</span><span className='text-danger'>3</span><span className='text-warning'>7</span></Link></h3>
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
                <li className='list-unstyled d-none d-sm-block'>

                  <Link to={"/user"}
                    className="text-decoration-none  text-white d-flex align-items-center gap-1 lh-1 ">
                    <div className="header__up-img_container">
                      <img src={user} alt="compare" className='img-fluid' /></div>

                    <div className="">
                      <p className='m-0 p-0 pb-1 ' style={{ fontSize: "0.8rem" }}>Login</p>
                      <p className='m-0 p-0 ' style={{ fontSize: "0.8rem" }}>My Account</p>
                    </div>
                  </Link></li>
                <li className='list-unstyled '>
                  <div
                    className="text-decoration-none  text-white d-flex align-items-center gap-1 lh-1 " onClick={e => [e.stopPropagation(),
                    setToggleSideBar(function () {
                      return true
                    })]
                    }>
                    <div className="header__up-img_container">
                      <img src={cart} alt="compare" className='img-fluid' /></div>

                    <div className="--"
                    >
                      <p className='m-0 p-0 pb-1 ' style={{ fontSize: "0.8rem" }}> <button className='btn 
      border text-black bg-white badge p-0 ms-1 mb-1 px-2 fw-bold text-muted rounded-pill
      ' style={{ fontSize: "0.5rem" }}>0</button></p>
                      <p className='m-0 p-0 ' style={{ fontSize: "0.8rem" }}>$0.00</p>
                    </div>
                  </div></li>





              </ul>

            </div>
          </div>
        </div>
      </header>
      <div className="header__bottom-strip
      py-1 bg__primary bg-opacity-75    px-0  shadow  px-sm-3 px-md-4 px-lg-5  pb-2">
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
              <ul className='dropdown-menu w-100 bg-light rounded text-dark shadow border border-3'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <Link to="/" className="dropdown-item text-dark">Action</Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item text-dark">Action</Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item text-dark">Action</Link>
                </li>
              </ul>
            </div>

            <div className="d-flex gap-2 
            text-white align-items-center px-4 justify-content-between justify-content-md-center dropdown-links 
            "
            >
              <p className="m-0 "><NavLink color='white' className={`text-white text-decoration-none`} to={"/"}>HOME</NavLink></p>
              <p className="m-0"><NavLink color='white' className={`text-white text-decoration-none`} to="/our-store">OUR STORE</NavLink></p>
              <p className="m-0 "><NavLink color='white' className={`text-white text-decoration-none text-capitalized`} to={"/blog"}>blog</NavLink></p>
              <p className="m-0"><NavLink color='white' className={`text-white text-decoration-none text-capitalized`} to="/our-store">contact</NavLink></p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Header