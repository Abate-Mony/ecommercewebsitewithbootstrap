import './cardanimation.css'
export default function CardAnimation({top,left,toggle}) {



    return (

        <div className={`position-fixed  cardanimation__container ${toggle?"animation-down":"animation-up"} `}
        style={{
        "--top":`${top}px`,"--left":`${left}px`
        
        }}></div>
    )
}