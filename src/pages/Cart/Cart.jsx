import './cart.css'
import { ProductData } from '../../Constants/ProductImage'
import _person from './../../Constants/clothimages/product_02.jpg'
import {Card} from '../../components'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
const navigate=useNavigate()
    return (

            <div className=" position-relative my-0 overflow-hidden bg-light " style={{
            height:"100svh"
            }}>
                <div className=" paynow rounded-3 containers  bg-white w-100 pb-1 pt-4 position-absolute"
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
                            }} >
                                pay now
                        </div>
                    </div>

                </div>
               
                <div className="position-relative" >
                    <div className="d-flex justify-content-between 
                    align-items-center py-2 px-2 shadow border  ">
                    <span onClick={()=>navigate("/")}>< AiOutlineArrowLeft size={25} color="black"/></span>
                            <h3 className='text-center ff-manrope fw-ligher'>Card</h3>
                        <div className="p-0  d-flex justify-content-end" onClick={()=>navigate("/user")}>
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
                        paddingBottom:"200px"
                    }}>
                        <div className="bg-white  rounded-3 row mb-5 pb-5">
                            {
                                ProductData.map(({ productImage, productPrice, productName, productDescript }, index) => <Card
                                    key={index} price={productPrice}  productId={index}
                                    description={productDescript} item_name={productName} imgUrl={productImage[0]} />)
                            }
                        </div>
                    </div>
                </div>


            </div>
    )
}

export default Cart