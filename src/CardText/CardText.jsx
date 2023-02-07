import ReactStars from 'react-rating-stars-component'

import './cardtext.css'
const CardText = ({ brand, price, cancelPrice }) => {
    return (
        <div className='px-3 home__collection-content'>
            <h4 className='text-danger'>{brand}</h4>
            <p className='fw-bold'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="d-flex flex-wrap align-items-center gap-1 gap-sm-2 mb-3">
                <ReactStars count={5} 
                    size={20}
                    edit={false}
                    value={3}
                    activeColor="#ffd700" />
            </div>
            <div className="home__collection-price_container d-flex gap-1">
                <p className={` fw-bold  ${cancelPrice && "text-danger"}`}>{`$${price}`}</p>
                {cancelPrice && <p> <strike className="text-muted">{`$${cancelPrice}`}</strike></p>}
            </div>
        </div>
    )
}

export default CardText