import './home.css'

import {
  main_banner_1, main_banner_2, small_banner_1,
  small_banner_2, small_banner_3, small_banner_4, service_01, service_02, service_03, service_04,
  service_05, laptop, camera, tv, acc, homeapp, headphone, watch, speaker
} from "./image"
import { ProductData } from '../../Constants/ProductImage'
import ProdutCard from './../../components/Product/Product'
import { Link } from 'react-router-dom'
import Marquee from '../../components/Marquee/Marquee'
import News from '../../Container/News/News'
import PopularPorduct from '../../Container/PopularProduct/PopularPorduct'
import SpecailProduct from '../../Container/SpecialProduct/SpecailProduct'
import { useState, useRef, useEffect } from 'react'
const Home = () => {


  const Container = useRef(null)



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




  const cartCollections = [


    {
      price: 0, brand: "Havels",
      heading: "Computers & Laptop",
      imgUrl: tv,
      imgOverlayUrl: camera

    },
    {
      price: 200, brand: "Sony",
      heading: "Cameras & Laptop",
      imgUrl: camera,
      imgOverlayUrl: tv


    },
    {
      price: 1000, brand: "Haviels",
      heading: "Portable Speakers",
      imgUrl: speaker,
      imgOverlayUrl: acc


    },
    {
      price: 1000, brand: "Bajaj",
      heading: "Accessories",
      imgUrl: acc,
      cancelPrice: 99.0,
      imgOverlayUrl: speaker,
      deductPercent: 33,


    },
    {
      price: 1000, brand: "Samsung",
      heading: "Home Appliances",
      imgUrl: homeapp,
      imgOverlayUrl: watch

    },
    {
      price: 100, brand: "Dell",
      heading: "Smartwatches",
      imgUrl: watch,
      cancelPrice: 9.0,
      imgOverlayUrl: homeapp



    }


  ]

  useEffect(() => {
    ChangeSlide(2)
  }, [])

  function ChangeSlide(number) {
    const container = Container.current
    console.log(container);
    const number_of_children = container.querySelectorAll(".main-banner-content").length
    const sW = container.scrollWidth
    number += counter
    if (number > 4) {
      number = 0
    }
    if (number < 0) {
      number = 4
    }
    setCounter(function () {
      return number
    })
console.log(counter)
    container.scrollLeft = `${(counter / 3) * sW}`

  }

  const [counter, setCounter] = useState(0)




  return (
    <div className='home__container'>
      <section className="home__cta-wrapper my-5 px-0 px-md-2 px-lg-4 ">
        <div className="container-xxl">
          <div className="row  align-items-center gx-2 gy-3 align-items-center " >
            <div className="col-md-6 position-relative ">
              <div className="arrow__box-left home__container-arrow" onClick={function () {
                return ChangeSlide(-1)
              }}>---</div>
              <div className="arrow__box-right home__container-arrow" onClick={function () {
                return ChangeSlide(1)
              }} >---</div>
              <div className='w-100  d-flex overflow-auto gap-1 home__cta-wrapper-scroll_container rounded-3'
                ref={Container}>
                {/*  */}
                <div className="main-banner-content  overflow-hidden rounded-3  position-relative w-100  my-2 py-2" style={{ flex: "none" }}>
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
                {/*  */}

                {/*  */}
                <div className="main-banner-content  overflow-hidden rounded-3  position-relative w-100 border border my-2 py-2" style={{ flex: "none" }}>
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
                {/*  */}

                {/*  */}
                <div className="main-banner-content  overflow-hidden rounded-3  position-relative w-100 border border my-2 py-2" style={{ flex: "none" }}>
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
                {/*  */}

                {/*  */}
                <div className="main-banner-content  overflow-hidden rounded-3  position-relative w-100 border border my-2 py-2" style={{ flex: "none" }}>
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
                {/*  */}


              </div>

            </div>
            <div className="col-md-6  p-0 m-0">
              <div className="row  gx-2 gy-2 small__banner-content">
                <div className="col-6 ">

                  <div className=" overflow-hidden rounded-3  position-relative  small__banner-text ">
                    {/* <img src={small_banner_1} alt="mainbanner1" className="img-fluid h-100 w-100" /> */}

                    <div className=" 
                position-relative top-0 left-0 ps-md-3 pt-md-3 ps-lg-4 pt-lg-4 pt-2 ps-2">
                      <h4 className="text-uppercase fw-normal">best sale</h4>
                      <h5 className="text-capitalize">Laptops Max</h5>
                      <p className='mt-3'>From $999.00 or $41.62/mo
                        for 24 mo. Footnote
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 smal__banner-text_container">

                  <div className=" overflow-hidden rounded-3  position-relative  small__banner-text ">
                    {/* <img src={small_banner_1} alt="mainbanner1" className="img-fluid h-100 w-100" /> */}

                    <div className="
                position-relative top-0 left-0 ps-md-3 pt-md-3 ps-lg-4 pt-lg-4 pt-2 ps-2">
                      <h4 className="text-uppercase fw-normal">best sale</h4>
                      <h5 className="text-capitalize">Laptops Max</h5>
                      <p className='mt-3'>From $999.00 or $41.62/mo
                        for 24 mo. Footnote
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 ">

                  <div className=" overflow-hidden rounded-3  position-relative  small__banner-text ">
                    {/* <img src={small_banner_1} alt="mainbanner1" className="img-fluid h-100 w-100" /> */}

                    <div className="
                position-relative top-0 left-0 ps-md-3 pt-md-3 ps-lg-4 pt-lg-4 pt-2 ps-2">
                      <h4 className="text-uppercase fw-normal">best sale</h4>
                      <h5 className="text-capitalize">Laptops Max</h5>
                      <p className='mt-3'>From $999.00 or $41.62/mo
                        for 24 mo. Footnote
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 ">

                  <div className=" overflow-hidden rounded-3  position-relative  small__banner-text ">
                    {/* <img src={small_banner_1} alt="mainbanner1" className="img-fluid h-100 w-100" /> */}

                    <div className="
                position-relative top-0 left-0 ps-md-3 pt-md-3 ps-lg-4 pt-lg-4 pt-2 ps-2">
                      <h4 className="text-uppercase fw-normal">best sale</h4>
                      <h5 className="text-capitalize">Laptops Max</h5>
                      <p className='mt-3'>From $999.00 or $41.62/mo
                        for 24 mo. Footnote
                      </p>
                    </div>
                  </div>
                </div>




              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="home__services-container">
        <div className="container-xxl py-3   my-4">
          <div className="row justify-content-center align-items-center gx-2 gy-4 px-2 px-md-3">
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

      <section className="home__catogories shadow my-5 py-3 mx-md-2 mx-lg-4 rounded-3 bg-white">
        <div className="container-xxl">
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

      <section className="home__categories">
        <div className="container-xxl">

          <div className="row">


          </div>
        </div>
      </section>

      <section className="home__collections mb-5">
        <h2 className='fs-3 text-black py-4 ps-2 '>Featured Collections</h2>
        <div className="container-xxl">

          <div className="row g-4 gx-3 px-2 align-items-center justify-content-center">

            {
              ProductData.map((item, index) => {

                return (
                    <ProdutCard  price={item.productPrice} cancelPrice={item.cancelPrice}
                        imgOverlayUrl={item.productImage1}
                        col_lg={3} col_md={6} imgUrl={item.productImage2} index={index}
                        brand={item.productDescript} />

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
        <News />
      </section>
      <section><PopularPorduct /></section>

      {/* <section>
        <SpecailProduct />
      </section> */}
    </div>
  )
}

export default Home