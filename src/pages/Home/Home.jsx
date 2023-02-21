import './home.css'
import ProdutCard from './../../components/Product/Product'
import { ProductData } from '../../Constants/ProductImage'

import {
  main_banner_1, main_banner_2, small_banner_1,
  small_banner_2, small_banner_3, small_banner_4, service_01, service_02, service_03, service_04,
  service_05, laptop, camera, tv, acc, homeapp, headphone, watch, speaker
} from "./image"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Marquee from '../../components/Marquee/Marquee'
import News from '../../Container/News/News'

import { PopularPorduct as PopularPorduct, SpecailProduct, Hero } from '../../Container'
const Home = () => {

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










  return (
    <div className='home__container'>


      <Hero />
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

      <section className="home__catogories shadow my-5 py-3 mx-md-2 mx-lg-4 rounded-3 bg-white ">
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
        <h2 className='fs-1 text-black py-5
        ps-md-3 text-center text-md-start  '>Featured Collections</h2>
        <div className="container-xxl-">

          <div className="row gy-4 gx-1 gx-sm-2 gx-md-3 gx-lg-1 px-2 align-items-center justify-content-center justify-content-md-start">

            {
              ProductData.map((item, index) => {

                return (
                  <ProdutCard price={item.productPrice} cancelPrice={item.cancelPrice}
                    imgOverlayUrl={item.productImage1}
                    col_lg={3} col_md={4} imgUrl={item.productImage2} index={index}
                    brand={item.productDescript} key={index} />

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
              Get ready <br className='d-none d-md-block'/>
              Winter is coming...
            </h1>
            <div className="btn btn-outline-dark">Go Get It</div>

          </div>

        </div>



      </section>

      <section>
        <News />
      </section>

    </div>
  )
}

export default Home
