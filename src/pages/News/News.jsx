
import axios from 'axios'
import { NewsCard } from '../../components'
import { useState, useEffect } from 'react'
export default function News() {
    const [news, setNews] = useState([])
    useEffect(() => {
        const apiKey = "0aba99f265b14bb3a08a065614122bc1"
        axios.get(`http://newsapi.org/v2/everything?q=Apple&from2022-03-11&sortBy=popularity&apiKey=${apiKey}`)
            .then(res => {
                // console.log(res)

                const { data: { articles } } = res
                console.log(articles)
                setNews([...articles])
            }).catch(err => { console.log(err) })
    }, [])

    return (<div>

        <div className="container">
            <div className="row gy-2 gx-3">
                {news?.map((article, index) => {
                    return (<NewsCard   
                        imgUrl={article.urlToImage} heading={article.content} text1={article.publishedAt}
                        text2={article.description} key={index}
                    />)
                })}
            </div>
        </div>

    </div>)
}