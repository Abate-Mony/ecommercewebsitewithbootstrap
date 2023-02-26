// import React from 'react'
import './card.css'
import _person from './../../Constants/clothimages/product_02.jpg'
import {useState,useRef} from 'react'
import { RiCloseFill } from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai' 
import { useNavigate } from 'react-router-dom'
const Card = ({ price, item_name, description,imgUrl,productId ,closeSidebar}) => {
const [counter,setCounter] =useState(1)
const parent=useRef(null)
const navigate=useNavigate()
  return (
  

    <div className="card-grid my-3 rounded-3 shadow p-2 align-items-center" ref={parent}>
      <div className="m-0">
        <img src={imgUrl} alt="user" className='
text-dark bg-dark img-fluid
border-4 border-danger me-2 rounded-3' style={{
            width: "90px",
            height: "100px"
          }}  onClick={
  
            function (){
            return [navigate(`/product/${productId}`),closeSidebar(false)]
            }
            }/>

      </div>
      <div className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between pe-2">
          <div>
            <h1 className='m-0 ff-manrope'>{item_name}</h1>
            <p className=' text-muted ff-shadow'>
              {description}
            </p>
          </div>
          <div className="bg-danger d-flex align-items-center justify-content-center rounded px-1"
            style={{
              height: "20px",
              width: "20px",
            }} onClick={()=>parent.current.remove()}
          > <RiCloseFill size={20} color="white"/>  </div>

        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="price fw-bolder ff-manrope">
            {`$ ${price}`}
          </h1>
          <div className="increment px-3 fw-bolder fs-shadow">
            <span className='ms-3'  onClick={()=>setCounter((counter)=>counter+1)}>+</span>
            <span className='ms-3 text'>{counter}</span>
            <span className={`ms-3 ${counter<=1&&'text-muted'}`}  onClick={()=>{
            if(counter>1){
              setCounter((counter)=>counter-1)}
            }}>-</span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Card