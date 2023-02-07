import './footer.css'

import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import {NavLink} from "react-router-dom"
import{AiOutlineHome,AiOutlineMenu,AiOutlineStar} from 'react-icons/ai'
import{BsBag} from 'react-icons/bs'
import newsletter from '../../assest/images/newsletter.png'
const Footer = () => {
  const vibrateConst=20
  return (
    <div className='footer__container'>
    <div className="position-fixed bottom-0 left-0 right-0 w-100 px-2 py-3 bg-dark d-md-none bg-opacity-75" style={{zIndex:120}}>
    <div className="d-flex align-items-center justify-content-between px-4">
    
    <NavLink to={"/"} onClick={function(){
                return (window.navigator.vibrate([vibrateConst]))
                }}>
    <AiOutlineHome color='white' size={20} onClick={function(){
                return (window.navigator.vibrate([vibrateConst]))
                }}/>
    </NavLink>
    <NavLink to={"/"} onClick={function(){
                return (window.navigator.vibrate([vibrateConst]))
                }}>
    <AiOutlineMenu color='white' size={20} onClick={function(){
                return (window.navigator.vibrate([vibrateConst]))
                }}/>
    </NavLink>
  
    <NavLink to={"/favorites"} onClick={function(){
                return (window.navigator.vibrate([vibrateConst]))
                }}>
    <AiOutlineStar color='white' size={20}/>
    
    </NavLink>
    <NavLink to={"/basket"} className="position-relative">
    
    <BsBag color='white' size={20} onClick={function(){
                return (window.navigator.vibrate([vibrateConst]))
                }}/>
                <div className="position-absolute  " style={{
                top:"-6px",right:"-5px"}}>
                <div className="btn btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center" style={{fontSize:"0.5rem",width:"15px",height:"15px"}}>0</div>
                </div>
    </NavLink>
    </div>
    
    </div>
    
      <footer className='py-3 '>
        <div className="container-xxl">
          <div className="row py-3 justify-content-center   px-2">

            <div className="col-md col-lg-5 col-xxl-4 ">

              <div className="d-flex align-items-center  mb-4 mb-md-2">

                <div className="footer__newsletter_img">
                  <img src={newsletter} alt="newletters" className='img-fluid' />
                </div>
                <h4 className="m-0 text-white lh-1.5 ms-2">Sign up for news letter</h4>

              </div>


            </div>
            <div className="col-md col-lg-5 col-xxl-4">
              <div className="footer__input-form_container">

                <div className="input-group ">
                  <input type="email"
                    required
                    className='form-control ps-3 '
                    placeholder='Your Email '
                    aria-controls='Your Email'
                    aria-describedby='basic-addon2'

                  />
                  <span className='input-group-text border border-2'
                    id="basic-addon2">Subscribe </span>
                </div>
              </div>


            </div>
          </div>

        </div>



      </footer>
      <footer className='py-5 px-2 px-md-3 px-lg-4'>
        <div class="container-xxl">
          <div className="row  gx-4 gy-5 footer__mid-links_container">
            <div className="col-6 col-md-5 col-lg ">
              <h2 className='text-capitalize text-light fs-lighter'>
                contact Us
              </h2>
              <ul class="m-0 p-0 d-flex flex-column gap-2" style={{wordBreak:"break-all"}}>
                <li className='list-unstyled m-0 p-0'>
                  <a href="" className='text-decoration-none
                  text-light'> Demo Store</a>
                </li>
                <li className='list-unstyled lh-1'>
                  <a href="" className='text-decoration-none 
                  text-light'>No, 1259 Free dom New york ,1111 United states</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'>
                    +898 593478798</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'>
                    DemoExampleDemo.com</a>
                </li>
                <li className='list-unstyled d-flex  gap-sm-2 gap-lg-3 justify-content-md-center pt-4 flex-wrap '>
                <button className='btn btn-secondary rounded-circle mt-1 ms-1'><BsGithub size="0.8rem"/> </button>
                <button className='btn btn-secondary rounded-circle mt-1 ms-1'><BsInstagram size="0.8rem"/> </button>
                <button className='btn btn-secondary rounded-circle mt-1 ms-1'><BsYoutube size="0.8rem"/> </button>
                <button className='btn btn-secondary rounded-circle mt-1 ms-1'><BsLinkedin size="0.8rem"/> </button>
                 
                </li>
              </ul>

            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <h2 className='text-capitalize text-light fs-lighter'>
                Information
              </h2>
              <ul class="m-0 p-0 d-flex flex-column gap-2">
                <li className='list-unstyled m-0 p-0'>
                  <a href="" className='text-decoration-none
                  text-light'>Privacy policy</a>
                </li>
                <li className='list-unstyled lh-1'>
                  <a href="" className='text-decoration-none 
                  text-light'>Refund policy</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'>
                    Shipping Policy</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'>
                    terms of service</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'>Blogs</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <h2 className='text-capitalize text-light fs-lighter'>
                Account
              </h2>
              <ul class="m-0 p-0 d-flex flex-column gap-2">
                <li className='list-unstyled m-0 p-0'>
                  <a href="" className='text-decoration-none
                  text-light'> Search</a>
                </li>
                <li className='list-unstyled lh-1'>
                  <a href="" className='text-decoration-none 
                  text-light'>About us</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'>
                    Faqs</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'>
                    Contacts</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'> Site chart</a>
                </li>
              </ul>

            </div>
            <div className="col-6 col-md-5 col-lg-2">
              <h2 className='text-capitalize text-light fs-lighter'>
                Quick links
              </h2>
              <ul class="m-0 p-0 d-flex flex-column gap-2">
                <li className='list-unstyled m-0 p-0'>
                  <a href="" className='text-decoration-none
                  text-light'> Acessories </a>
                </li>
                <li className='list-unstyled lh-1'>
                  <a href="" className='text-decoration-none 
                  text-light'>Laptops</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'>
                    Headphones</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'>
                    Smart watches</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'> Tablets</a>
                </li>
              </ul>

            </div>
            <div className="col-12 col-md-7 col-lg">
              <h2 className='text-center text-md-left text-capitalize text-light fs-lighter'>
                Our App
              </h2>
              <ul class="m-0 p-0 d-flex flex-column gap-2">
                <li className='list-unstyled m-0 p-0'>
                  <a href="" className='text-decoration-none
                  text-light'> Download our app and ger 15% of your first deposit</a>
                </li>
                <li className='list-unstyled'>
                  <a href="" className='text-decoration-none text-light'> Demo Store</a>
                </li>
              </ul>

            </div>


          </div>

        </div>



      </footer>
      {/* end of the second bar here */}
      <footer className='py-3 '>
        <div className="text-center text-white mb-0" >
          <h3>
            &copy;{new Date().getFullYear()} , Dev Corner Power by shopify
          </h3>

        </div>


      </footer>

    </div>
  )
}

export default Footer