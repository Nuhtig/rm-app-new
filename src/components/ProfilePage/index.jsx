import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar';
import ProfileCard from '../Cards/ProfileCard/index.jsx';
import NotesApp from '../NotesApp'
import UpdatesCard from '../Cards/UpdatesCard/index.jsx'
import UpdatesBirthdayCard from '../Cards/UpdatesBirthdayCard/index.jsx';

const ProfilePage = props => {
    const [content, changeContent] = useState({
        data: []
    })

    console.log(props)

    const nameQuery = props.location.state.name.split(' ').join('+');

    const fetchData = () => {
        const url = `https://gnews.io/api/v2/?q=${nameQuery}&token=${process.env.REACT_APP_API_KEY_2}&country=my`;
        const req = new Request(url);

        fetch(req).then((response) => {
            return response.json()
        }).then((myJson) => {
            console.log(myJson)
            changeContent({
                data: myJson.articles
            })
        })
    }

    const populateUpdates = () => {
        return content.data.map((article, index) => {
            if(index > 2) {
                return
            }
            return (
                <UpdatesCard 
                    title={article.title}
                    desc={article.desc}
                    phone='0123027527'
                    textbody='Congratulation for your ECF license'
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
                    desc='Founder of 1337 Ventures'
                    date='15th May 2019'
                    products={['Current account','Credit card','Home Mortgage']}
                />
                <h2 className='title profile-title'>Notes</h2>
                <NotesApp 
                    name={props.location.state.name}
                />
                <h2 className='title'>Updates</h2>
                {populateUpdates()}
                <UpdatesBirthdayCard />
            </section>
        </div>
     );
}
 
export default ProfilePage;