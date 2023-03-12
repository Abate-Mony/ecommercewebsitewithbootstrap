import './home.css'
import ProdutCard from './../../components/Product/Product'
import { ProductData, shoes } from '../../Constants/ProductImage'
import {
  service_01, service_02, service_03, service_04,
  service_05, laptop, camera, tv, acc, homeapp, headphone, watch, speaker
} from "./image"
import menbanner from '../../Constants/images/mens-banner.jpg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Marquee from '../../components/Marquee/Marquee'
import News from '../../Container/News/News'
import { Hero } from '../../Container'
import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { useNavigate } from 'react-router-dom'
import {Sidebar} from '../../components'
const Home = () => {

  const navigate = useNavigate()


  const [acceptCookies, setAcceptCookies] = useState(false)
  const Services = [
    {
      imgSrc: service_01,
      heading: "Free Shipping",
      text: "From all orders over $100"
    },
    {
      imgSrc: service_02,
      heading: "Daily subscribe offer",
      text: "Save up to 25% off"
    },
    {
      imgSrc: service_03,
      heading: "support 24/7",
      text: "shop with an expert"
    },
    {
      imgSrc: service_04,
      heading: "Affordable prices",
      text: "Get a factory direct price"
    },
    {
      imgSrc: service_05,
      heading: "Free Shipping",
      text: "100% protected payment"
    }

  ]

  const Categories = [

    {
      number_of_items: "8 items",
      heading: "Computers & Laptop",
      imgUrl: tv

    },
    {
      number_of_items: "10 items",
      heading: "Cameras & Laptop",
      imgUrl: camera

    },
    {
      number_of_items: "8 items",
      heading: "Portable Speakers",
      imgUrl: speaker

    },
    {
      number_of_items: "12 items",
      heading: "Accessories",
      imgUrl: acc

    },
    {
      number_of_items: "23 items",
      heading: "Home Appliances",
      imgUrl: homeapp

    },
    {
      number_of_items: "4 items",
      heading: "Smartwatches",
      imgUrl: watch

    },
    {
      number_of_items: "13 items",
      heading: "Headphones",
      imgUrl: headphone

    },
    {
      number_of_items: "13 items",
      heading: "Laptops",
      imgUrl: laptop

    },
  ]
  const sliderContainer = useRef(null)



  const handleCookies = () => {
    setAcceptCookies(true)
    localStorage.setItem("sellam", "hello")

  }





  return (
    <div className='home__container'>

      <Hero />
      <section className="home__services-container my-5   container-lg shadow bg-white">
        <div className=" py-3   ">
          <div className="row justify-content-center
          align-items-center gx-2 gy-4 ">
            {
              Services.map(({ imgSrc, text, heading }, index) => {

                return (

                  <div className='col-lg-2 col-md-4 col-6' key={index}>
                    <div className='d-flex align-items-center justify-content-center'>
                      <div className="home__service-img_container">
                        <img src={imgSrc} alt={text} className="img-fluid" />
                      </div>
                      <div className='ms-2'>
                        <h5 className='m-0'>{heading}</h5>
                        <p className='m-0'>{text}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </section>


      {/* women/men */}
      <div className="container-md " onClick={() => navigate("/categories/name")}>
        <div className="row bg-light  gy-4">
          <div className="col-lg-8">
            <div className="row gx-1 model__cloth bg-white ">
            <div className="col m-0 ">
                <div className='model__cloth-left shadow  overflow-hidden rounded-3 position-relative'>
                  <img src={menbanner} alt="banner" className='position-absolute w-100 h-100 img-fluid' />
                  <h3 className="bg-danger fw-light px-3 rounded-3 fs-6 position-absolute top-0 start-0" style={{
                    width: "fit-content"
                  }}>hot</h3>
                </div>
              </div>
              <div className="col-6 m-0 p-0   position-relative   " style={{
                height: "12rem"
              }} ref={sliderContainer}>

                <Swiper className='h-100' spaceBetween={3} slidesPerView={1} onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  modules={
                    [Navigation, Pagination, Scrollbar, A11y, Autoplay]
                  }
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  direction="vertical"
                  pagination={{ clickable: true }}
                >

                  {
                    shoes.men.map((shoe) => {

                      return (

                        <SwiperSlide key={shoe} >
                          <div className='bg-warning h-100 d-flex flex-column' >
                            <div className='shadow bg-dar' style={{
                              flex: "1"
                            }}>
                              <img src={shoe} className='h-100 w-100' alt="" />
                            </div>

                          </div>
                        </SwiperSlide>
                      )
                    })

                  }

                </Swiper>







              </div>
           
            </div>
          </div>



        </div>
      </div>

      {/* women/men */}





      <section className="home__catogories container-md mx-auto
      shadow my-5 py-3  rounded-3 bg-white ">
        <div className="container-x">
          <div className="row gy-4 m-auto justify-content-center">
            {
              Categories.map(({
                heading, imgUrl, number_of_items
              }, index) => {

                return (
                  <div className='col-lg-2 col-md-4 col-6  p-0' key={index}>
                    <div className='d-flex align-items-center gap-2   flex-start justify-content-between justify-content-md-center gap-md-3  px-2 py-1'>
                      <div>
                        <h5 className='m-0  '>{heading}</h5>
                        <p className='m-0'>{number_of_items}</p>
                      </div>
                      <div className="home__category-img_container">
                        <img src={imgUrl} alt={index} className="img-fluid" />
                      </div>

                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>

      </section>

      

      <section className="home__collections mb-5 container-md">
        <h2 className='fs-1 text-black py-5
        ps-md-3 text-center text-md-start  ff-manrope fw-semibold'>Featured Collections</h2>
        <div className="container-xxl-">

          <div className="row gy-4 gx-1 gx-sm-2 gx-md-3 gx-lg-1 px-2 align-items-start justify-content-start justify-content-md-start">

            {
              ProductData.map((item, index) => {

                return (
                  <ProdutCard price={item.productPrice} cancelPrice={item.productCancel}
                    imgOverlayUrl={item.productImage[0]}
                    col_lg={3} col_md={4} imgUrl={item.productImage[1]} index={index}
                    descriptions={item.productDescript} brand={item.productName} key={index} productId={index} />

                )
              })
            }

          </div>

        </div>

      </section>
      <section>

        <Marquee />
      </section>

      <section>
        <div className="d-flex banner pt-5  my-5 px-2 px-md-4">
          <div className="">
            <h2>Promotion</h2>
            <h1 className='ff-monserat'>
              Get ready <br className='d-none d-md-block' />
              Winter is coming...
            </h1>
            <div className="btn btn-outline-dark">Go Get It</div>

          </div>

        </div>

      </section>

      <section>
        <News />
      </section>
      <div className={`overlay ${localStorage.getItem("sellam") && "d-none" || acceptCookies && "d-none"}`} >

        <div className={`cookie__wrapper`} >

          <h2>Your Cookies Settings</h2>
          <div className="cookie__wrapper-borderbox">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ad, rem consequatur molestiae nesciunt,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste harum non iusto. </p>

            <div className="button" onClick={handleCookies}>
              <button className="btn btn-dark rounded-1">
                More information</button>
              <button className="btn btn-outline-dark  rounded-1" >
                Yes,i accept</button>
            </div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, repellat? Porro, quibusdam vitae minus praesentium consectetur expedita quam modi voluptate labore vel totam non rem?</p>
        </div>

      </div>
    </div>
  )
}

export default Home
