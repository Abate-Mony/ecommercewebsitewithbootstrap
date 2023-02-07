import './marquee.css'

import { brand_01,brand_02,brand_03,brand_04,brand_05,brand_06,brand_07,brand_08} from './image'
const Marquee = () => {
  return (
  <marquee behavior="alternate" direction="right" className="d-flex  gap-5 py-3 ">
  <img src={brand_01} alt="brand " style={{width:"60px",height:"70px"}} className='ms-5'/>
  <img src={brand_02} alt="brand " style={{width:"60px",height:"70px"}} className='ms-5'/>
  <img src={brand_03} alt="brand " style={{width:"60px",height:"70px"}} className='ms-5'/>
  <img src={brand_04} alt="brand " style={{width:"60px",height:"70px"}} className='ms-5'/>
  <img src={brand_05} alt="brand " style={{width:"60px",height:"70px"}} className='ms-5'/>
  <img src={brand_06} alt="brand " style={{width:"60px",height:"70px"}} className='ms-5'/>
  <img src={brand_07} alt="brand " style={{width:"60px",height:"70px"}} className='ms-5'/>
  
  
  </marquee>
  )
}

export default Marquee