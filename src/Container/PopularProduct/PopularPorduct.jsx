import './popularproduct.css'
import ProductCart from '../../components/Product/Product'
import { tv, watch, laptop, speaker } from './image'
const PopularPorduct = () => {


    const cartCollections = [


        {
            price: 0, brand: "Havels",
            heading: "Computers & Laptop",
            imgUrl: tv,
            imgOverlayUrl: speaker

        },
        {
            price: 200, brand: "Sony",
            heading: "Cameras & Laptop",
            imgUrl: watch,
            imgOverlayUrl: tv


        },
        {
            price: 1000, brand: "Haviels",
            heading: "Portable Speakers",
            imgUrl: speaker,
            imgOverlayUrl: laptop


        },
        {
            price: 1000, brand: "Bajaj",
            heading: "Accessories",
            imgUrl: tv,
            cancelPrice: 99.0,
            imgOverlayUrl: watch,
            deductPercent: 33,


        }]
    return (
        <div className='conta py-4 px-2 px-md-4 px-lg-5'>
            <h2 className="text-black fs-2 py-3 text-center text-sm-start">Our Popular Products</h2>
            <div className="row gx-2 gy-4">
                {cartCollections.map(ProductCart)}
            </div>
        </div>
    )
}

export default PopularPorduct