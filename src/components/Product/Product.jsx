import './product.css'
// import { BsBook as Bsstar } from 'react-icons/bs'
import {Link } from 'react-router-dom'
import CardText from '../../CardText/CardText'
import love from '../../assest/images/wish-black.svg'
function renderCart({ brand, imgUrl, cancelPrice, price, imgOverlayUrl, deductPercent, heading, col_lg, col_md }, index) {
  if (!col_lg) {
    col_lg = 2
  }
  if (!col_md) {
    col_md = 4
  }
  const productId=Math.floor(Math.random()*10)
  return (
  <Link to={`/product/${productId}`} className={`col-lg-${col_lg} col-md-${col_md} col-6  px-1`} key={index}>
    
      <div className='d-flex flex-column gap-2
        position-relative shadow rounded-top home__collection-container overflow-hidden'>
        <span className="position-absolute top-0 end-0 me-2 mt-2" style={{ zIndex: 22 }}>
          <img src={love} alt="love" style={{ width: "15px", height: "15px" }} />
        </span>
        {deductPercent && <span className="position-absolute top-0 start-0 ms-2
          mt-2 btn btn-warning bg-opacity-25 px-2 rounded-pill py-1 lh-1 "
          style={{ zIndex: 22, fontSize: "0.6rem" }}>
          {`-${deductPercent}%`}
        </span>}

        <div className="home__collection-img_container w-100 position-relative overflow-hidden">
          <img src={imgUrl} alt={index} className="img-fluid w-100" />
          <div className="home__collection-img_overlay-container position-absolute w-100 h-100 top-0 start-0 end-0 ">
            <img src={imgOverlayUrl} alt={index} className="img-fluid w-100" />
          </div>

        </div>
        <CardText brand={brand} cancelPrice={cancelPrice} price={price} heading={heading} />
      </div>

    
    </Link>

  )

}
export default renderCart