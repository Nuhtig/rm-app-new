import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar';
import TopNewsCard from '../Cards/TopNewsCard/index.jsx';

const ShowMorePage = () => {
    const [content, changeContent] = useState({
        data: []
    })

    const [dataLoaded, changeDataHasLoaded] = useState(false)

    const fetchData = () => {
        const url = `https://gnews.io/api/v2/?q=bikesh+lakhmichand&token=${process.env.REACT_APP_API_KEY_2}&country=my`;
        const req = new Request(url);

        fetch(req).then((response) => {
            return response.json()
        }).then((myJson) => {
            changeContent({
                data: myJson.articles
            })
            changeDataHasLoaded(true)
        }).catch((err)=> {
            alert(err)
        })
    }

    const populateNews = () => {
        return content.data.map((article, index) => {
            return (
                <TopNewsCard
                    key={index}
                    title={article.title}
                    link={article.link}
                    website={article.website}
                    date={article.date}
                    desc={article.desc}
                    img={article.image}
                    dataLoaded={dataLoaded}
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
                {
                    !dataLoaded ? <TopNewsCard /> : null
                }
                {
                    !dataLoaded ? <TopNewsCard /> : null
                }
                {
                    !dataLoaded ? <TopNewsCard /> : null
                }
                {
                    !dataLoaded ? <TopNewsCard /> : null
                }
                {populateNews()}
            </section>
        </div>
     );
}
 
export default ShowMorePage;