import './product.css'
import { useNavigate as Goto} from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

import love from '../../assest/images/wish-black.svg'
function renderCart({ brand, imgUrl, cancelPrice, price,descriptions,
imgOverlayUrl, deductPercent, productId, col_lg, col_md }, index) {
  if (!col_lg) {
    col_lg = 2
  }
  if (!col_md) {
    col_md = 4
  }
  cancelPrice=200
  price=237
  deductPercent=44
const startscount=Math.floor(Math.random()*6)
const navigate = Goto()

  
  
  return (
  <div  className={` col-lg-${col_lg}
  col-md-${col_md} col-6`} key={index} onClick={
  
  function (){
  return navigate(`/product/${productId}`)
  }
  }>
    
      <div className='d-flex flex-column gap-0
        position-relative  home__collection-container 
        overflow-hidden rounded-2  position-relative bg-white shadow'>
        <span className="position-absolute top-0 end-0 me-2 mt-2" style={{ zIndex: 3 }}>
          <img src={love} alt="love" style={{ width: "15px", height: "15px" }} />
        </span>
         <span className="position-absolute top-0 start-0 ms-2
          mt-2 btn btn-warning bg-opacity-25 px-2 rounded-pill py-1 lh-1 "
          style={{ zIndex: 5, fontSize: "0.6rem" }}>
          {`-${deductPercent}%`}
        </span>

        <div className="home__collection-img_container w-100 position-relative overflow-hidden">
          <img src={imgUrl} alt={index} className="img-fluid w-100" />
          <div className="home__collection-img_overlay-container position-absolute w-100 h-100 top-0 start-0 end-0 ">
            <img src={imgOverlayUrl} alt={index} className="img-fluid w-100" />
          </div>
          <div className="home__collection-price_container d-flex justify-content-between gap-1 mt-0 ff-manrope position-absolute bottom-0">
                <div className="d-flex gap-1 gap-md-2">
                <p className={` fw-bold  ${cancelPrice && "text-danger"}`}>{`$${price}`}</p>
                {cancelPrice && <p> <strike className="text-muted">{`$${cancelPrice}`}</strike></p>}</div>
                
                <div className="d-flex flex-wrap align-items-center gap-1 gap-sm-2 mb-1 border-0 m-0 ">
                <ReactStars count={5} 
                    size={15}
                    edit={false}
                    value={startscount}
                    activeColor="#ffd700" />
            </div>
                
            </div>
        </div>
        <div className='px-1 px-sm-2 px-lg-3 text-center text-md-start home__collection-content pt-2'>
            <h4 className='text-danger border-0 ff-manrope mb-0 clamp__height' style={{
             "--ch":"1"
            }}>{brand}</h4>
            <p className='text-dark description mt-1 clamp__height' style={{
            "--ch":"2"
            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus inventore eveniet tempora adipisci iure, rem </p>
            
            
        </div>
      </div>

    
    </div>

  )

}
export default renderCart