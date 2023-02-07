
import './ourblog.css'
import ProductCard from '../../components/Product/Product'
import { tv, camera, speaker, laptop, watch, homeapp } from './image'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Loader from '../../components/Loader/Loader'
import { ProductData, ProductDataFashion } from '../../Constants/ProductImage'
const OurBlog = () => {
    const [loading, setLoading] = useState(true)
    const [section, setSection] = useState(0)
    const [toggle, setToggle] = useState(false)
    const BlogData = [...ProductData, ...ProductDataFashion]
    .sort(()=>Math.random()-0.5)
    setTimeout(() => {
        setLoading(false)
    }, 2000);

    const setSectionFunction = (n) => {
        setSection(n)
    }
    return (
        <div className='ourblog__container bg-light overflow'>
            {loading && <Loader />}

            <h2 className="text-center bg-white py-3 mb-5 fw-normal">Home/ our store</h2>
            {!loading && <div className="container--xxl">
                <div className="row px-md-5 position-relative">
                    <div className="btn btn-outline-warning  d-md-none 
                    mx-4 mb-3 ms-auto border border-3 fw-bolder border-warning" style={{
                        width: "fit-content",
                        transition: "opacity 0.3s ease",
                        opacity: !toggle ? "1" : "0",
                        transform: "rotate(90deg)"
                    }}
                        onClick={e => setToggle(true)}
                    >|||</div>

                    <div className={`col-md-3 ourblog__rightside-main_container 
                    ${!toggle ? "d-none" : "d-block"}  d-md-block border `} style={{
                        zIndex: 22
                    }}
                    
                    >
                        <div className="position-absolute end-0 top-0  text-danger fs-1 fw-normal mt-4
                    btn-outline-danger me-5 rounded-circle d-md-none" onClick={e => setToggle(false)}>
                            X
                        </div>
                        <div className="ourblog__rightside-container">
                            <div className="bg-white ourblog__rightside-card 
                            shadow rounded-3 p-3 mb-4 shopby__categories-container">
                                <h3>Shop by categories</h3>
                                <div className="ourblog__rightside-card_content  ps-2">
                                    <p className='fw-ligher text-muted mb-0' onClick={e=>setSectionFunction(0)}>All Products</p>
                                    <p className='fw-ligher shopby__dropdownitems text-muted mb-0 '
                                    onClick={e=>setSectionFunction(1)}>
                                        Electronics

                                        <ul 
                    onClick={e=>{
                    
                    setToggle(!toggle)
                    }}>
                                            <li>phone</li>
                                            <li>Laptops</li>
                                            <li>Camera</li>
                                        </ul>

                                    </p>
                                    <p className='fw-ligher shopby__dropdownitems text-muted mb-0' 
                                    onClick={e=>setSectionFunction(2)}>
                                        Dresses

                                        <ul 
                    onClick={e=>{
                    
                    setToggle(!toggle)
                    }}>
                                            <li>black tops</li>
                                            <li>Shoes</li>
                                            <li>Trousers</li>
                                        </ul>
                                    </p>
                                    <p className='fw-ligher shopby__dropdownitems text-muted mb-0'>

                                        Dresses

                                        <ul 
                    onClick={e=>{
                    
                    setToggle(!toggle)
                    }}>
                                            <li>black tops</li>
                                            <li>Shoes</li>
                                            <li>Trousers</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white ourblog__rightside-card 
                           shadow rounded-3 p-3 mb-4">
                                <h3>Filter By</h3>
                                <h4>Avaliability</h4>
                                <div className="ourblog__rightside-card_content ps-2">
                                    <p className='fw-ligher text-muted mb-0'>
                                        <input type="checkbox" name="stokc" id="stock" />
                                        <span className='text-muted'> In stock (21)</span>
                                    </p>
                                    <p className='fw-ligher text-muted mb-0'>
                                        <input type="checkbox" name="stokc" id="stock" />
                                        <span className='text-muted'> In stock (21)</span>
                                    </p>
                                    <p className='fw-ligher text-muted mb-0'>
                                        <input type="checkbox" name="stokc" id="stock" />
                                        <span className='text-muted'> In stock (21)</span>
                                    </p>
                                    <p className='fw-ligher text-muted mb-0'>
                                        <input type="checkbox" name="stokc" id="stock" />
                                        <span className='text-muted'> In stock (21)</span>
                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="col-md border border-2 overflow-auto" >
                        <div className="ourblog__leftside-container">

                            <div className="ourblog__search-container py-3 border rounded-3  border-2">
                            </div>

                            <div className="row gx-3 gy-4 my-1 mb-4">
                                {
                                  section==0&& BlogData.map((item, index) => {
                                        return (
                                            <ProductCard price={item.productPrice} cancelPrice={item.cancelPrice}
                                                imgOverlayUrl={item.productImage2}
                                                col_lg={3} col_md={6} imgUrl={item.productImage2} index={index}
                                                brand={item.productDescript} />

                                        )
                                    })
                                    
                                    }
                                    {
                                  section==1&& ProductData.map((item, index) => {
                                        return (
                                            <ProductCard price={item.productPrice} cancelPrice={item.cancelPrice}
                                                imgOverlayUrl={item.productImage2}
                                                col_lg={3} col_md={6} imgUrl={item.productImage2} index={index}
                                                brand={item.productDescript} />

                                        )
                                    })
                                    
                                    }
                                    {
                                  section==2&& ProductDataFashion.map((item, index) => {
                                        return (
                                            <ProductCard price={item.productPrice} cancelPrice={item.cancelPrice}
                                                imgOverlayUrl={item.productImage2}
                                                col_lg={3} col_md={6} imgUrl={item.productImage2} index={index}
                                                brand={item.productDescript} />

                                        )
                                    })
                                    
                                    }

                            </div>



                        </div>


                    </div>

                </div>
            </div>}
        </div>
    )
}

export default OurBlog