import './product.css'
import { useParams } from 'react-router-dom'
const Product = () => {

const {id}=useParams()
  return (
    <div className='bg-dark text-center text-white d-flex align-items-center justify-content-center  py-5'  >{id}</div>
  )
}

export default Product