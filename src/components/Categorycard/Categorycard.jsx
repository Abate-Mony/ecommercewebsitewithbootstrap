import ReactStars from 'react-rating-stars-component'
import { useNavigate } from "react-router-dom"
const Categorycard = ({ view, _id, shoe }) => {
    var classlist = "col-6  flex-column rounded-3"
    const navigate = useNavigate()
    return (
        <div className={`d-flex py-3 _card col-lg-4 bg-white shadow-sm  ${view ? classlist : ""}`} key={_id} style={{
            rowGap: "1.2rem",
            transition: "all 0.3s ease-in-out"
        }} onClick={() => navigate(`/product/${_id}`)} >
            <div style={{
                height: "120px",
                width: view ? "100%" : "140px",
                flex: "none"
            }} className={`me-3 `}>
                <img src={shoe} alt={_id} className="h-100 w-100 img-fluids" />
            </div>
            <div className="text-box">
                <p className='fw-light lh-sm clamp__height mb-1' style={{
                    "--ch": "2"
                }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis dolor deleniti nulla, quod id.</p>

                <div className="d-flex align-items-center justify-content-between-">
                    <h1 className="mt-1 fw-simibold fs-5 ff-manrope mb-0">$6.78</h1>
                    <p className='text-muted text-decoration-line-through ff-shadow fs-5 ms-3 mb-0'>$8.20</p>
                </div>
                <div className="d-flex justify-content-between pe-2">
                    <div className="d-flex flex-wrap align-items-center gap-1 gap-sm-2 mb-1 border-0 m-0 ">
                        <ReactStars count={5}
                            size={15}
                            edit={false}
                            value={3}
                            activeColor="#ffd700" />
                    </div>
                    <p className="ff-manrope mb-0 text-muted ">124 orders</p>

                </div>
            </div>
        </div>
    )
}

export default Categorycard