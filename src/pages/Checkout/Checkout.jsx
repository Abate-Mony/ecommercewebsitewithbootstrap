import { MdChevronRight } from 'react-icons/md'
import { AiOutlineMenu, AiFillInfoCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import "./checkout.css"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useCart } from '../../components/CardData'
import { ProductData } from '../../Constants/ProductImage'
import { Card } from '../../components'
// import { slider } from '../../Constants/lib'
import { useEffect, useState, useRef } from 'react'
const Checkout = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    const { cart, getLength } = useCart();
    const [open, setOpen] = useState(false)
    const container = useRef(null)
    const [start, setStart] = useState(0)
    const [m, setM] = useState(false)
    const { current: mainContainer } = container
    function handleTouchStart(e) {
        setStart(e.touches[0].clientX);
        setM(true)
    }
    function handleTouchEnd(e) {
        setStart(0);
        setM(false)
    }
    function handleTouchMove(e) {
        // alert("touchm")

        const end = e.touches[0].clientX
        if (!m) return
        if (Math.abs(start - end) > 100) {
            if ((start - end) > 0) {
                // close side bar
                setOpen(false)
            } else {
                setOpen(true)
                // open side bar 
            }
            setM(false)
            setStart(0)

        }

    }
    return (
        <div className="container-lg checkout-main" ref={container} onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}   >

            <div className="d-flex py-2 align-items-center shadow  mb-2 px-2">
                <span className='' onClick={goBack}>
                    <AiOutlineArrowLeft size={25} />
                </span>
                <h1 className="fs-5 ff-manrope fst-italic text-uppercase lh-lg text-center mb-0" style={{ flex: 1 }}>
                    checkout</h1>
                <div className=' d-flex align-items-center justify-content-center d-md-none ' onClick={()=>setOpen(true)} style={{ height: "40px", width: "40px" }}>
                    <AiOutlineMenu size={
                        25} />
                </div>
            </div>

            <div className="row gx-1 ">
                <div className="col-lg-6 ">

                    <div className="container-md">
                        <h1 className="fs-4 fst-italic">Ecommerce checkout</h1>
                        <div className="d-flex text-dark 
             secondary  overflow-auto
             btns-container scrollto">
                            <button className="btn
            btn-outline-secondary 
            rounded-0 fs-6 border-0
            " >
                                information <span> <MdChevronRight size={15} /></span>
                            </button>
                            <button className="btn btn-outline-secondary
            border-0 rounded-0 d-flex ">
                                Shipping <span> <MdChevronRight size={15} /></span>
                            </button>
                            <button className="btn btn-outline-secondary border-0 rounded-0 d-flex">
                                Payment <span> <MdChevronRight size={15} /></span>
                            </button>

                        </div>

                        <div className="row border mb-3 payment__btn-container
             align-items-center justify-content-center
            position-relative
            px-2" style={{ height: "80px", marginTop: "40px" }}>

                            <div className="position-absolute
                        fw-light start-50 top-0 bg-light
                        shadow rounded-1 px-3 text-capitalize">express checkout</div>
                            <div className="col p-0"><div className="btn w-100 mx-0 btn-outline-warning  rounded-0">ross</div></div>
                            <div className="col p-0"><div className="btn w-100 mx-0 btn-outline-warning  rounded-0">ross</div></div>
                            <div className="col p-0"><div className="btn w-100 mx-0 btn-outline-warning  rounded-0">ross</div></div>
                            <div className="col p-0"><div className="btn w-100 mx-0 btn-outline-warning  rounded-0">ross</div></div>

                        </div>
                        <div className="d-flex align-items-center
                        justify-content-center gap-2">
                            <span className='bg-dark rounded-3 ' style={{ height: "2px", "width": "60px" }} ></span>
                            <span className='fs-6' >or continue with credit card</span>
                            <span className='bg-dark rounded-3 ' style={{ height: "2px", "width": "60px" }} ></span>


                        </div>
                        <div className="checkout__info-box">
                            <h1 className="fs-4 fw-semibold lh-lg">
                                Shipping details</h1>
                            <form className='d-flex flex-column gap-3'>
                                <div className="row gap-3 ">

                                    <div className="input-box col-md">

                                        <input type="text" className='w-100 form-control' placeholder='first name form-control' />

                                    </div>


                                    <div className="input-box col-md">

                                        <input type="text" className='w-100 form-control' placeholder='first name form-control' />

                                    </div>

                                </div>
                                <div className="input-box px-2">

                                    <input
                                        type="text" className='w-100 form-control' placeholder='company (require for business addresses )' />

                                </div>
                                <div className="input-box px-2">

                                    <input
                                        type="text" className='w-100 form-control' placeholder='address ' />

                                </div>
                                <div className="input-box px-2">

                                    <input
                                        type="text" className='w-100 form-control' placeholder='appartment suite etc ' />

                                </div>
                                <div className="input-box px-2">

                                    <input
                                        type="text" className='w-100 form-control' placeholder='city ' />

                                </div>
                                <div className="d-flex w-100 justify-content-between px-3">
                                    <button type="btn"
                                        className="btn
                              btn-danger rounded-1 me-3 rounded-circle d-flex align-items-center shadow  justify-content-center
                            " style={{ width: "30px", height: "30px" }}><AiFillInfoCircle color="white" style={{ flex: "none" }} size={20} /></button>
                                    <button type="btn"
                                        className="btn
                              btn-dark rounded-1 me-3
                            ">continue with shopping</button></div>
                            </form>


                        </div>

                    </div>

                    <button className='btn btn-link text-dark text-capitalize '>refund policy</button>
                    <button className='btn btn-link text-dark text-capitalize '>privacy policy</button>
                    <button className='btn btn-link text-dark text-capitalize '>terms and condition</button>
                </div>
                <div className={`col checkout__sidebar ${open ? "active" : ""} `} onClick={()=>setOpen(false)}>
                <div className="checkout__close-btn d-flex align-items-center btn btn-outline-danger rounded-0
                    position-absolute end-00 top-0 border border-danger"
                    style={{width:"40px",height:"40px",right:"0px"}} onClick={()=>setOpen(false)}>x</div>
                    <div className={`checkout__sidebar-content scrollto overflow-auto ${open ? "active" : ""} `}
                   onClick={e=>e.stopPropagation()} >
                   

                        {
                            cart.map((id, index) => <Card
                                key={index} price={ProductData[id].productPrice} productId={id}
                                description={ProductData[id].productDescript} item_name={ProductData[id].productName}
                                imgUrl={ProductData[id].productImage[0]} />)
                        }

                    </div>


                </div>


            </div>

        </div>
    )
}

export default Checkout