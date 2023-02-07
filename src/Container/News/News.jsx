
import "./news.css"
import NewsCard from "../../components/NewCard/NewsCard"
import { blog_01 } from '../image'


const News = () => {

    const CardData = [
        {
            imgUrl: blog_01,
            heading: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, magnam!`,
            text1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus atque pariatur corrupti quam quis magnam rem rerum, quisquam error?`,
            text2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus atque pariatur corrupti quam quis magnam rem rerum, quisquam error?`,
        },
        {
            imgUrl: blog_01,
            heading: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, magnam!`,
            text1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus atque pariatur corrupti quam quis magnam rem rerum, quisquam error?`,
            text2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus atque pariatur corrupti quam quis magnam rem rerum, quisquam error?`,
        },
        {
            imgUrl: blog_01,
            heading: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, magnam!`,
            text1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus atque pariatur corrupti quam quis magnam rem rerum, quisquam error?`,
            text2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus atque pariatur corrupti quam quis magnam rem rerum, quisquam error?`,
        },
        {
            imgUrl: blog_01,
            heading: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, magnam!`,
            text1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus atque pariatur corrupti quam quis magnam rem rerum, quisquam error?`,
            text2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus atque pariatur corrupti quam quis magnam rem rerum, quisquam error?`,
        },
    ]

    return (

        <div className="home__news-container bg-light py-4 px-2 px-md-3 px-lg-4">
            <div className="container-xxl">
                <div className="row gy-4 gx-1">
                     {CardData.map(({text1,text2,imgUrl,heading},index)=><NewsCard index={index} text1={text1} text2={text2} heading={heading} imgUrl={imgUrl}/>)}
                </div>
            </div>
        </div>
    )
}

export default News