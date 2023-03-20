import './cart.css'
import { ProductData } from '../../Constants/ProductImage'
import _person from './../../Constants/clothimages/product_02.jpg'
import { Card } from '../../components'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../components/CardData'
const Cart = () => {

    const { cart, getLength } = useCart()
    const navigate = useNavigate()
    return (

        <div className=" position-relative my-0 overflow-hidden bg-light " style={{
            height: "100svh"
        }}>
            {getLength > 0 && (<div className=" paynow rounded-3 containers  bg-white w-100 pb-1 pt-4 position-absolute"
                style={{
                    top: "auto",
                    zIndex: 10,
                    marginTop: "auto",
                    bottom: "0"

                }}>

                <div className="d-flex  justify-content-between px-4 align-items-center bg-white">
                    <div>
                        <h2 className="text-muted ff-manrope fs-6">
                            Total
                        </h2>
                        <h1 className='ff-manrope fs-5'>$267,23</h1>
                    </div>
                    <div className="btn btn-outline-dark  align-items-center shadow
                            d-flex text-capitalize   rounded-5 px-4 " style={{
                        }} onClick={()=>navigate("/checkout")} >
                        pay now
                    </div>
                </div>

            </div>)}

            <div className="position-relative" >
                <div className="d-flex justify-content-between 
                    align-items-center py-2 px-2 shadow border  ">
                    <span style={{ width: "30px", height: "30px" }} className="btn btn-outline-dark d-flex justify-content-center 
                    align-items-center border-0 rounded-circle" >< AiOutlineArrowLeft size={25} color="black" onClick={() =>
                    navigate(-1)} className="border-0" style={{ flex: "none" }} /></span>
                    <h3 className='text-center ff-manrope fw-ligher' onClick={() => {
                        // setCartData(()=>[...cart,9])
                        // addtocart((Math.random()*100))
                    }}>Card</h3>
                    <div className="p-0  d-flex justify-content-end" onClick={() => navigate("/user")}>
                        <img src={_person} alt="user" className='
          text-dark bg-dark img-fluid
          border-4 border-danger me-2 rounded-circle' style={{
                                width: "40px",
                                height: "40px"
                            }} />
                    </div>
                </div>
                <div className="d-flex flex-column gap-y-5 mt-2 overflow-auto scrollto mb-5 container" style={{
                    height: "100vh",
                    paddingBottom: "200px"
                }}>{getLength > 0 ? (<div className="bg-white  rounded-3 row mb-5 pb-5" >
                    {
                        cart.map((id, index) => <Card
                            key={index} price={ProductData[id].productPrice} productId={id}
                            description={ProductData[id].productDescript} item_name={ProductData[id].productName}
                            imgUrl={ProductData[id].productImage[0]} />)
                    }
                </div>) : <>


                    <img src='https://c.tenor.com/4lA3ViMpstwAAAAj/wait-no.gif'
                        className='mx-auto d-block mt-5' style={{
                            width: "min(400px ,calc(100vw - 20px))",
                            height: "min(300px ,calc(100vh - 30px )"
                        }} alt='no messages' /><h1 className="fs-1 fw-light mt-4 text-center">Card is empty </h1><p
                            className='fs-6  fw-light fst-italic btn btn-dark mx-auto my-2' style={{ width: "fit-content" }} onClick={() => navigate("/our-store")}>go store to add products</p>

                </>}

                </div>
            </div>


        </div>
    )
}

export default Cart