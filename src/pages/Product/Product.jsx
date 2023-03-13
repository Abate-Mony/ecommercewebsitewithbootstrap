import './product.css'
import { useParams, useNavigate } from 'react-router-dom'
import { ProductData } from '../../Constants/ProductImage'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Product as Related, CardAnimation } from '../../components'
import { AiFillStar } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { BiShare } from 'react-icons/bi'
import { MdFavorite, MdOutlineRecommend } from 'react-icons/md'
import { useCart } from '../../components/CardData'




import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import { MdCompareArrows, MdOutlineLocalShipping } from 'react-icons/md'
const Product = () => {
  var { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, removefromcart, isItemInCart } = useCart()

  var ismobilescreen = window.innerWidth < 480;
  const [addtocart, setAddtocard] = useState(isItemInCart(Number(id)))
  const [counter, setCounter] = useState(1)
  const [backhistory_pushed, setBackhistory_pushed] = useState(false)

  const btnContainer = useRef(null)

  // const cardButton = useRef(null)
  // const [start,setStart]=useStart
  const [direction, setDirection] = useState({
    top: 0, left: 0
  })
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setCounter(1)
    setAddtocard(isItemInCart(Number(id)))

  }, [id])
  useEffect(() => {
    [...btnContainer.current.children].forEach((elm) => {
      elm.onclick = function () {
        [...btnContainer.current.children].forEach(item => item != this ? item.classList.remove("active") : null)
        this.classList.toggle("active")
      }
    })


  }, [])


  useEffect(() => {
    window.addEventListener("popstate", () => {
      console.log(ismobilescreen, backhistory_pushed);
      if (ismobilescreen && backhistory_pushed) {
        setBackhistory_pushed(false)
        setActive(false)
      }
    })

  }, [backhistory_pushed])

  useEffect(() => {
    const _id = Number(id); console.log(_id)
    if (addtocart) {
      addToCart(_id)
      setCounter(1)

      return
    } removefromcart(_id)

  }, [addtocart])
  const [active, setActive] = useState(false)

  const handleOpenModal = () => {
    if (ismobilescreen && !backhistory_pushed) {
      window.history.pushState("forward", null, window.location.href)
      setBackhistory_pushed(true)


    }
    setActive(true)

  }

  const handleAnimate = e => {
    const { target: targetElm } = e
    const { left, bottom, width } = targetElm.getBoundingClientRect();
    const x_dir = (left + width) - 40;
    setDirection({ top: bottom, left: x_dir })
  }
  return (
    <div className='bg-light text-center text-dark d-flex align-items-center justify-content-center  py-5 review__alert-wrapper'  >
      {/* card animation will be place here because its poistion is fixed */}
      {/* <CardAnimation top={direction.top} left={direction.left} toggle={addtocart} /> */}
      {/* modal here */}
      <div className={`overlay ${active ? "active" : ""}`} onClick={() => setActive(false)}>
        <div className={`alert__container shadow-lg text-start py-3 pt-0 overflow-hidden bg-light  ${active ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
          <h2 className="fw-seminbold fs-5 container shadow-lg bg-white text-black py-3 ff-manrope text-center">
            Your recommendation <MdOutlineRecommend size={20} className="ms-2" /></h2>
          <p className="text-muted fs- fw-semibold text-uppercase ff-manrope container mb-0">title</p>

          <div className=" 
            d-flex align-items-center pb-4 border-bottom- border-3 container pt-2 ">
            <div className="input-group  border border-dark border-2 rounded-5 overflow-hidden">
              <span className='input-group-text bg-transparent border-0'
                id="basic-addon2"><MdFavorite color='black' className='fs-6' /> </span>
              <input type="text"
                className='form-control ps-3 py-2 border-0'
                placeholder='title here '
                aria-controls='Search product here ..'
                aria-describedby='basic-addon2'

              />
            </div>


          </div>
          <p className="text-muted fs- fw-semibold text-uppercase ff-manrope container mb-0">Details</p>

          <div className="form-group container py-2">
            <textarea name="name"
              id="input" cols="30" rows="10" placeholder='&nbsp;&nbsp;&nbsp;&nbsp;Your Description here '
              className="w-100 border-none rounded-3 ps-3"></textarea>
          </div>
          <div className="d-flex justify-content-center w-100">
            <button className="btn btn-outline-dark  text-center rounded-pill mx-auto " style={{
              width: "200px",
              maxWidth: "calc(100% - 30px)",
            }}>Submit</button>
          </div>
          <p className="ff-shadow text-center py-2 pb-0">please follow community guide</p>
        </div>


      </div>

      {/* end here  */}


      <div className="container">
        <div className="row shadow-sm bg-white py-5 rounded-1 gy-4 gx-2">
          <div className="col-lg-7 p-0 row">
            <div className="sliderbox col-md-2 d-none
            d-md-flex  flex-column gap-3" >

              {ProductData[id]?.productImage?.map((imgUrl, index) => {
                return (
                  <img src={imgUrl} alt="" loading='lazy' key={index} style={{
                    width: "50px",
                    height: "60px"
                  }} />
                )
              })}

            </div>
            <div className='col-md-10' >




              <Swiper spaceBetween={0} slidesPerView={1} onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                modules={
                  [EffectCube, Pagination]
                }
                navigation={{
                  prevEl: ".arrow__box-left",
                  nextEl: ".arrow__box-right",
                }}
                effect={"cube"}

                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94

                }}

                pagination={{ clickable: true }}
              >
                {ProductData[id]?.productImage?.map((imgUrl, index) => {
                  return (
                    <SwiperSlide>
                      <div className="product__img-container w-100 product__img-container" key={index}>
                        <img src={imgUrl} alt={index} className='w-100' style={{
                          maxHeight: "calc(100vh - 40px)",
                          objectFit: "cover"
                        }} />
                      </div>
                    </SwiperSlide>
                  )

                })}
              </Swiper>
            </div>
          </div>
          <div className="col-lg-5  text-start ">
            <div className="product__desc-container w-100">
              <h2 className="fs-1 ff-manrope">{ProductData[id].productName}</h2>
              <div className="d-flex justify-content-between">
                <h2 className="fw-light fs-2 ">{`$${ProductData[id].productPrice}`}</h2>
                <div className="d-flex align-items-center px-4 my-2">
                  <span className="fw-bold"><AiFillStar size={15} />4.5</span>
                  <span className="text-muted ms-2 fw-light ff-shadow">3Reviews</span>
                </div>
              </div>

              <h4 className="colors fw-light ff-secondfont">
                colors
              </h4>
              <div className='d-flex gap-2 mb-3'>
                <button className="btn btn-primary rounded-circle" style={{
                  width: "25px",
                  height: "25px",
                }}></button>
                <button className="btn btn-secondary rounded-circle" style={{
                  width: "25px",
                  height: "25px",
                }}></button>
                <button className="btn btn-success rounded-circle" style={{
                  width: "25px",
                  height: "25px",
                }}></button>
              </div>
              <h4 className="colors ff-secondfont">
                sizes
              </h4>
              <div className='d-flex gap-2 mb-3 btn-container' ref={btnContainer}>
                <div className="btn btn-outline-secondary rounded-3 active" style={{
                  width: "40px",
                  height: "40px",
                }}>S</div>
                <div className="btn btn-outline-secondary rounded-3" style={{
                  width: "40px",
                  height: "40px",
                }}>M</div>
                <div className="btn btn-outline-secondary rounded-3" style={{
                  width: "40px",
                  height: "40px",
                }}>L</div>
                <div className="btn btn-outline-secondary rounded-3" style={{
                  width: "40px",
                  height: "40px",
                }}>XL</div>
              </div>
              <div className='mb-3'>
                <span className='fw-bold'>201 </span> <span
                  className="text-muted">in stock</span> <div className="btn rounded-circle  p-0 btn-success" style={{
                    width: "10px",
                    height: "10px",
                  }}></div>
              </div>
              <div className="row  rounded-3 mx-1">
                <div className="col-4 gap-0 p-0 mx-0 d-flex
              justify-content-between bg-secondary bg-opacity-25 align-items-center px-2 fw-bold px-4 " style={{
                    borderRadius: "6px 0 0 6px",

                  }}>
                  <span className={`${counter <= 1 ? "text-muted" : "text-dark"}`}
                    onClick={function () {
                      return setCounter(() => counter > 1 ? counter - 1 : counter)
                    }}
                  >-</span>
                  <span>{counter}</span>
                  <span onClick={() => setCounter(() => counter + 1)}>+</span>
                </div>
                <div className="col mx-0 p-0 position" onClick={() => setAddtocard((addtocart) => {

                  return !addtocart
                })}>
                  <div className={`btn ${addtocart
                    ? "btn-outline-danger" : "btn-outline-dark"} rounded-1 w-100`} onClick={handleAnimate}>
                    {addtocart ? "Remove From Cart" : "ADD TO CART"}
                  </div>
                </div>
              </div>
              <div className="btn btn-dark rounded-1 w-100 py-2 my-3 ">
                BUY NOW
              </div>
              <div className="btn btn-outline-dark rounded-1 text-uppercase w-100 py-2 my-3 mt-0 " onClick={() => navigate("/cart")}>
                view cart
              </div>
              <div className="d-flex flex-wrap text-capitalize gap-2 mb-5">
                <span>add to wishlist</span>
                <span><MdCompareArrows size={20} /> compare</span>
                <span><BiShare size={20} style={{
                  transform: "rotate(180deg)"
                }} /> share</span>
                <span>ask question</span>

              </div>
              <div className='d-flex flex-wrap  align-items-end'>
                <span><MdOutlineLocalShipping size={20} /></span><p className="fw-bold ms-2 mb-0">
                  Free shipping & return</p> <p className='fw-ligh ms-3 mb-0'>On orders over $100 </p>
              </div>
              <div className='d-flex flex-wrap  align-items-end'>
                <span><MdOutlineLocalShipping size={20} /></span><p className="fw-bold ms-2 mb-0">
                  Estimated Delivery</p> <p className='fw-ligh ms-3 mb-0'>23 of march 2023</p>
              </div>

            </div>

          </div>


        </div>


        <div className="text-center d-flex justify-content-center gap-4 py-3 pb-1 mb-3 fw-light ff-manrope border-bottom border-1 border-secondary">
          <p className='fs-5 product-details'>Product Details</p>
          <p className='fs-5 product-reviews d-flex align-items-center'><span className='me-2'>Reviews </span>
            <ReactStars count={1}
              size={15}
              edit={false}
              value={1}
              activeColor="#000"


            /></p>
        </div>

        <div className="container">

          <Swiper spaceBetween={0} slidesPerView={1} onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={
              [Navigation, Pagination, Scrollbar, A11y, Autoplay]
            }
            navigation={{
              prevEl: ".product-details",
              nextEl: ".product-reviews",
            }}

          >

            <SwiperSlide>
              <div className="product__details-container text-start text-md-start text-black py-4">
                <h3 className='fs-4 fw-light ff-manrope'>What is <span className='' style={{ fontWeight: "400" }}>{ProductData[id].productName}</span></h3>
                <p className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi ut doloribus.</p>
                <p className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis vitae itaque at rem! Deleniti, tenetur saepe sit ab adipisci impedit, ducimus beatae corrupti perspiciatis dignissimos facere. Provident adipisci exercitationem dolor nulla voluptates, molestias deserunt?</p>

                <div className="row gx-2 gy-4">

                  <div className="col-md">
                    <h4 className='fs-6 fw-light ff-manrope'>Lorem, ipsum dolor.</h4>
                    <ul style={{
                      listStyle: "dotted"

                    }} className="p-0 m-0">
                      <div className="container">

                        <li className='list-style-type fs14'>Lorem ipsum dolor sit.</li>
                        <li className='list-style-type fs14'>lormfa-stack-2x</li>
                        <li className='list-style-type fs14'>Lorem ipsum </li>
                        <li className='list-style-type fs14'>Lorem ipsum dolor sit.</li>
                      </div>
                    </ul>
                  </div>
                  <div className="col-md">
                    <h4 className='fs-6 fw-light ff-manrope'>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div className="col-md">
                    <h4 className='fs-6 fw-light ff-manrope'>Lorem ipsum dolor sit.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container  text-start">
                <h3 className='fs-4 fw-light ff-manrope'>
                  <span className='' style={{ fontWeight: "400" }}>
                    Rating & Reviews
                  </span></h3>
                <div className="d-flex align-items-end pb-4 mb-3 border-bottom border-secondary border-2">
                  <div className='d-flex align-items-end '>
                    <h1 className="fw-bold ff-manrope m-0 p-0 pb-2">
                      {String(Math.random() * 5 + 1).slice(0, 3)}
                    </h1>

                    <span className='text-muted'>3 reviews</span>
                  </div>

                  <div className="ms-auto 
                  btn btn-outline-dark rounded-1" style={
                      {
                        height: "fit-content"
                      }} onClick={handleOpenModal}>
                    write a review
                  </div>

                </div>
                <div className="container">
                  <div className="row  scrollto bg-light g-2 pb-4" style={{
                    maxHeight: "30rem",
                    overflowY: "auto",
                    overflowX: "hidden"

                  }}>

                    {ProductData[id]?.productImage?.map((imgUrl, index) => {
                      return (
                        <div className="col-lg-6 px-0 px-lg-1" key={index}>
                          <div className="review-box py-4 shadow-sm bg-white rounded-1">
                            <div className="d-flex gap-3">
                              <div className="review_box-img overflow-hidden border border-warning rounded-circle bg-warning ms-2" style={{
                                height: "60px",
                                width: "60px",
                                flex: "none"
                              }}>
                                <img src={imgUrl}
                                  alt="" className='img-fluid' />
                              </div>
                              <div>
                                <h4 className='fs-6
                  fw-light ff-manrope mb-0'>Lorem, ipsum dolor.</h4>
                                <ReactStars count={5}
                                  size={15}
                                  edit={false}
                                  value={5}
                                  activeColor="#ffd700" />
                                <h4 className='fs-6
                  fw-light ff-manrope mb-1 mt-2'>
                                  Lorem, ipsum dolor amake silt</h4>

                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis laudantium fuga exercitationem quasi similique at dolor incidunt. Hic dignissimos tempora ea facere accusantium qui distinctio.</p>
                              </div>
                            </div>

                          </div>

                        </div>
                      )

                    })}

                  </div>
                </div>



              </div>




            </SwiperSlide>

          </Swiper>

        </div>


        <div className="product__related">
          <h1 className="fs-1 fw-light mb-4 mt-4">Related Products </h1>
          <div className="row gx-1 gy-2">
            {
              ProductData.slice().sort(() => 0.5 - Math.random()).slice(0, 4).map((item, index) => {
                return <Related price={item.productPrice} cancelPrice={item.productCancel}
                  col_lg={3} imgUrl={item.productImage[0]}
                  imgOverlayUrl={item.productImage[1]}
                  descriptions={item.productDescript} productId={item._id} brand={item.productName} onClick={() => document.scrollTo(0)} />

              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product