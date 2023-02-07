import './wishlist.css'
import love from  '../../assest/images/wish.svg'

const WishList = ({text}) => {
    return (
        <div className='position-absolute d-flex  justify-content-between px-2 py-2 top-0 start-0 w-100 end-0'>
            
            <span className="bg-warning p-0 m-0 px-2 rounded-pill d-flex align-items-center "
                style={{ zIndex: 22, fontSize: "0.5rem" }}>
                {text}
            </span>
            <span className="" style={{ zIndex: 22 }}>
                <img src={love} alt="love" style={{ width: "15px", height: "15px" }} />
            </span>
            


        </div>
    )
}

export default WishList