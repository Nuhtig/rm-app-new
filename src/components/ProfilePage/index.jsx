import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar';
import ProfileCard from '../Cards/ProfileCard/index.jsx';
import NotesApp from '../NotesApp'
import UpdatesCard from '../Cards/UpdatesCard/index.jsx'
import UpdatesBirthdayCard from '../Cards/UpdatesBirthdayCard/index.jsx';
import TopNewsCard from '../Cards/TopNewsCard/index.jsx';

const ProfilePage = props => {
    const [content, changeContent] = useState({
        data: []
    })

    const [dataLoaded, changeDataHasLoaded] = useState(false)

    const nameQuery = props.location.state.name.split(' ').join('+');

    const fetchData = () => {
        const url = `https://gnews.io/api/v2/?q=${nameQuery}&token=${process.env.REACT_APP_API_KEY_2}&country=my`;
        const req = new Request(url);

        fetch(req).then((response) => {
            return response.json()
        }).then((myJson) => {
            changeDataHasLoaded(true)
            changeContent({
                data: myJson.articles
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    const populateUpdates = () => {
        return content.data.map((article, index) => {
            if(index > 2) {
                return
            }
            return (
                <UpdatesCard
                    key={index}
                    title={article.title}
                    desc={article.desc}
                    phone='0123027527'
                    textbody='Congratulation on your pitchIN achievement.'
                />
            )
        })
    }

    useEffect(()=> {
        fetchData();
    },[])

    return ( 
        <div>
            <Navbar page='profile' />
            <section>
                <ProfileCard 
                    img={props.location.state.img}
                    name={props.location.state.name}
                    desc='Co-founder, pitchIN and WTF Accelerator'
                    date='15th May 2019'
                    products={['Current account','Credit card','Home Mortgage']}
                />
                <h2 className='title profile-title'>Notes</h2>
                <NotesApp 
                    name={props.location.state.name}
                />
                <h2 className='title'>Updates</h2>
                {
                    !dataLoaded ? <TopNewsCard /> : null
                }
                {
                    !dataLoaded ? <TopNewsCard /> : null
                }
                {
                    !dataLoaded ? <TopNewsCard /> : null
                }
                {populateUpdates()}
                <UpdatesBirthdayCard />
            </section>
        </div>
     );
}
 
export default ProfilePage;