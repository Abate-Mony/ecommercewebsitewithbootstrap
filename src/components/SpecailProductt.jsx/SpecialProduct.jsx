
import './specialproduct.css'
import { new_1, new_2, new_3, love } from './image'
import ReactStars from 'react-rating-stars-component'
import WishList from '../../components/WishList/WishList'
const SpecailProduct = ({ price, brand, cancelPrice ,rating,progress}) => {
    price = 100
    brand = "samsung"
    cancelPrice=120
const ratingChanged=(newRatings)=>{
console.log(newRatings)
}
    return (
        <div className='col-md-6 col-lg-4 m-0  px-1'>
            <div className="home__specialproduct-container shadow rounded-3 overflow-hidden my-3   pb-3 ">
                <div className='row'>
                    <div className="col-md ">
                        <div className="home__specialproduct-main_img-container position-relative">
                            <WishList text="new" />
                            <div className="home__specialproduct-main_img-container_bigimg">
                                <img src={new_1} alt="new" className='img-fluid h-100 w-100' loading='lazy' />
                            </div>
                            <div className="home__specialproduct-main_img-container_smallimg d-flex px-1 py-2 gap-3 justify-content-center">
                                <div className="home__specialproduct-main_img-container_smallimg-1">
                                    <img src={new_2} alt="new" className='img-fluid h-100' />

                                </div>
                                <div className="home__specialproduct-main_img-container_smallimg-2">
                                    <img src={new_3} alt="new" className='img-fluid h-100' />

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-md px-3">
                        <div className="home__specialproduct-main_content-container">
                            <div className='home__specailproduct-main_content-container-brandtext py-2 px-3 px-sm-0'>
                                <h4 className='text-danger mb-2'>{brand}</h4>
                                <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="d-flex flex-wrap align-items-center gap-1 gap-sm-2 mb-3">
                                <ReactStars count={5} onChange={ratingChanged}
                                size={20}
                                edit={false}
                                value={rating}
                                activeColor="#ffd700"/>
                                    {/* <Bsstar /><Bsstar /><Bsstar /><Bsstar /><Bsstar /> */}
                                </div>
                                <div className="home__specialproduct--main_content-price_container d-flex gap-1">
                                    <p className={` fw-bold  ${cancelPrice && "text-danger"}`}>{`$${price}`}</p>
                                    {cancelPrice && <p> <strike className="text-muted">{`$${cancelPrice}`}</strike></p>}
                                </div>

                                <div className="d-flex align-items-center  gap-1 px-2 mb-1">
                                    <h5 className='fw-bold mb-0'>878</h5> <span>&nbsp;Days</span>
                                    <button className="btn btn-danger rounded-circle">04</button> <span>:</span><button className="btn btn-danger rounded-circle">04</button> <span>:</span><button className="btn btn-danger rounded-circle">04</button>

                                </div>
                                <p className="product  ">Products : 100</p>
                                <div className="progress mb-2 py-0">
                                    <div className="progress-bar py-0 bg-success"
                                    role="progressbar" aria-valuenow={25} style={{width:progress+"%"}} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <button className="btn btn-lg bg-dark text-white text-uppercase py-1 rounded-pill px-4 px-sm-3 px-md-4">option</button>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </div>
    )
}

export default SpecailProduct