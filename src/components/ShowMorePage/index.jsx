import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar';
import TopNewsCard from '../Cards/TopNewsCard/index.jsx';

const ShowMorePage = () => {
    const [content, changeContent] = useState({
        data: []
    })

    const fetchData = () => {
        const url = `https://newsapi.org/v2/everything?q=Apple&from=2019-06-07&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`;
        const req = new Request(url);

        fetch(req).then((response) => {
            return response.json()
        }).then((myJson) => {
            changeContent({
                data: myJson.articles
            })
        })
    }

    const populateNews = () => {
        return content.data.map((article, index) => {
            return (
                <TopNewsCard
                    key={index}
                    title={article.title}
                    link={article.url}
                    date={article.publishedAt}
                    desc={article.description}
                    img={article.urlToImage}
                />
            )
        })
    }

    useEffect(()=> {
        fetchData();
    },[])

    return ( 
        <div>
            <Navbar page='topnews' />
            <section>
                {populateNews()}
            </section>
        </div>
     );
}
 
export default ShowMorePage;