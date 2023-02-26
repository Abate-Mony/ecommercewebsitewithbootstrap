
import './ourblog.css'
import ProductCard from '../../components/Product/Product'
import { AiOutlineMenu } from 'react-icons/ai'

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
    // .sort(()=>Math.random()-0.5)
    setTimeout(() => {
        setLoading(false)
    }, 2000);

    const setSectionFunction = (n) => {
        setSection(n)
    }
    return (
        <div className='ourblog__container border-0 bg-light overflow'>
            {loading && <Loader />}

            <h2 className="text-center bg-white py-3 mb-5 fw-normal">Home/ our store</h2>
            {!loading && <div className="container--xxl">
                <div className="row px-md-5 position-relative">
                    <div className="btn btn-outline-dark  d-md-none 
                    mx-4 mb-3 ms-auto bor border-3 fw-bolder p-2" style={{
                            width: "fit-content",
                            transition: "opacity 0.3s ease",
                            opacity: !toggle ? "1" : "0",
                        }}
                        onClick={e => setToggle(true)}
                    ><AiOutlineMenu size={20} /> </div>

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
                                    <p className='fw-ligher text-muted mb-0' onClick={e => setSectionFunction(0)}>All Products</p>
                                    <p className='fw-ligher shopby__dropdownitems text-muted mb-0 '
                                        onClick={e => setSectionFunction(1)}>
                                        Electronics

                                        <ul
                                            onClick={e => {

                                                setToggle(!toggle)
                                            }}>
                                            <li>phone</li>
                                            <li>Laptops</li>
                                            <li>Camera</li>
                                        </ul>

                                    </p>
                                    <p className='fw-ligher shopby__dropdownitems text-muted mb-0'
                                        onClick={e => setSectionFunction(2)}>
                                        Dresses

                                        <ul
                                            onClick={e => {

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
                                            onClick={e => {

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

                            <div className="row gx-1 gx-sm-2 gy-4 my-1 mb-4">

                                {
                                    ProductData.map((item, index) => {
                                        return <ProductCard
                                            col_lg={3} imgUrl={item.productImage[0]}
                                            imgOverlayUrl={item.productImage[1]}
                                            descriptions={item.productDescript} productId={index} brand={item.productName} onClick={() => document.scrollTo(0)} />

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