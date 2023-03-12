import './newcard.css'
import img from '../../assest/images/blog-1.jpg'
const NewsCard = ({ imgUrl, heading, text1, text2 ,index}) => {
    return (

        <div className='col-sm-6 col-lg-3' key={index}>
            <div className='home__news-card 
            pb-4 overflow-hidden  rounded-top  px-0 shadow'>
                <div className="
                home__news-card_img-container">
                    <img src={imgUrl} alt="newimage" className='img-fluid w-100' />
                </div>
                <div className="px-3 pt-4">
                    <p className="text-muted mb-2">{text1}</p>
                    <h3 className='fw-bolder'>{heading}</h3>
                    <p className='text-muted'>{text2}</p>
                    <div className="btn btn-lg py-1 bg-dark text-white rounded-pill text-uppercase px-4">Read More</div>
                </div>

            </div>
        </div>

    )
}

export default NewsCard