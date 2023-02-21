import './hero.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Navigation,Pagination,Scrollbar,A11y,Autoplay} from 'swiper'
import { ProductData } from '../../Constants/ProductImage'
import ProdutCard from './../../components/Product/Product'
import { Link } from 'react-router-dom'
import SpecailProduct from '../../Container/SpecialProduct/SpecailProduct'
import { useState, useRef, useEffect } from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
// import banner from './../../Constants/banner/banner-1.jpg'

const Hero = () => {
  return (
    <section className="home__cta-wrapper my-5 px-0 px-md-3 px-lg-5 py-0" >
    <div className="co">
      <div className="row  align-items-center gx-2 gy-3 align-items-center   overflow-hidden shadow" style={{
    borderRadius:"2rem"
    }}>
        <div className="col position-relative pt-0  p-0 m-0 rounded-3">
        <div className="home__container-arrow home__container-arrow arrow__box-left">
        <AiOutlineLeft size={34}/>
        </div>
        <div className="home__container-arrow home__container-arrow arrow__box-right">
        <AiOutlineRight size={34}/>
        </div>
          <Swiper  spaceBetween={3} slidesPerView={1.1}  onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={
            [Navigation,Pagination,Scrollbar,A11y,Autoplay]
            }
            navigation={{
            prevEl:".arrow__box-left",
            nextEl:".arrow__box-right",
            }}
            
            autoplay={{
            delay:2500,
            disableOnInteraction:false
            }}
            pagination={{clickable:true}}
            scrollbar={{draggable:true}}
            >
            <SwiperSlide>
              {/*  */}
              <div className="main-banner-content banner1
              overflow-hidden rounded-3  position-relative w-100 border " >
                {/* <img src={main_banner_1} alt="mainbanner1" className="img-fluid" /> */}
                <div className="main__banner-content_text 
            position-relative top-0 left-0 ps-md-4 ps-lg-5 ps-3 pt-md-4 pt-lg-5 pt-3">
                  <h4 className="text-uppercase fw-normal">supercharged for pros</h4>
                  <h5 className="text-">iPad S13+ Pro</h5>
                  <p className='mt-3'>From $999.00 or $41.62/mo <br />
                    for 24 mo. Footnote
                  </p>
                  <Link to="/" className="btn btn-lg  text-white rounded-pill px-5 mt-1 fs-6">Buy Now</Link>
                </div>
              </div>
              {/*  */}</SwiperSlide>
            <SwiperSlide> {/*  */}
              <div className="main-banner-content banner2  overflow-hidden rounded-3  position-relative w-100 
              " >
                {/* <img src={main_banner_1} alt="mainbanner1" className="img-fluid" /> */}
                <div className="main__banner-content_text 
            position-relative top-0 left-0 ps-md-4 ps-lg-5 ps-3 pt-md-4 pt-lg-5 pt-3">
                  <h4 className="text-uppercase fw-normal">supercharged for pros</h4>
                  <h5 className="text-">iPad S13+ Pro</h5>
                  <p className='mt-3'>From $999.00 or $41.62/mo <br />
                    for 24 mo. Footnote
                  </p>
                  <Link to="/" className="btn btn-lg  text-white rounded-pill px-5 mt-1 fs-6">Buy Now</Link>
                </div>
              </div>
              {/*  */}</SwiperSlide>
            <SwiperSlide> {/*  */}
              <div className="main-banner-content banner3  overflow-hidden rounded-3  position-relative w-100 " >
                {/* <img src={main_banner_1} alt="mainbanner1" className="img-fluid" /> */}
                <div className="main__banner-content_text 
            position-relative top-0 left-0 ps-md-4 ps-lg-5 ps-3 pt-md-4 pt-lg-5 pt-3">
                  <h4 className="text-uppercase fw-normal">supercharged for pros</h4>
                  <h5 className="text-">iPad S13+ Pro</h5>
                  <p className='mt-3'>From $999.00 or $41.62/mo <br />
                    for 24 mo. Footnote
                  </p>
                  <Link to="/" className="btn btn-lg  text-white rounded-pill px-5 mt-1 fs-6">Buy Now</Link>
                </div>
              </div>
              {/*  */}</SwiperSlide>
            <SwiperSlide> {/*  */}
              <div className="main-banner-content banner4  overflow-hidden rounded-3  position-relative w-100 " >
                {/* <img src={main_banner_1} alt="mainbanner1" className="img-fluid" /> */}
                <div className="main__banner-content_text 
            position-relative top-0 left-0 ps-md-4 ps-lg-5 ps-3 pt-md-4 pt-lg-5 pt-3">
                  <h4 className="text-uppercase fw-normal">supercharged for pros</h4>
                  <h5 className="text-">iPad S13+ Pro</h5>
                  <p className='mt-3'>From $999.00 or $41.62/mo <br />
                    for 24 mo. Footnote
                  </p>
                  <Link to="/" className="btn btn-lg  text-white rounded-pill px-5 mt-1 fs-6">Buy Now</Link>
                </div>
              </div>
              {/*  */}</SwiperSlide>

          </Swiper>


        </div>
    
      </div>
    </div>
  </section>
  )
}

export default Hero