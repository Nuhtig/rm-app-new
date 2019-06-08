import React from 'react';
import Navbar from '../Navbar';
import ProfileCard from '../Cards/ProfileCard/index.jsx';
import NotesApp from '../NotesApp'
import UpdatesCard from '../Cards/UpdatesCard/index.jsx'
import UpdatesBirthdayCard from '../Cards/UpdatesBirthdayCard/index.jsx';

const ProfilePage = props => {
    return ( 
        <div>
            <Navbar page='profile' />
            <section>
                <ProfileCard 
                    img={props.location.state.img}
                    name={props.location.state.name}
                    desc='Fusce et quam non augue mattis ullamcorper.'
                    date='15th March 2019'
                    products={['Current account','Credit card','Loan']}
                />
                <h2 className='title profile-title'>Notes</h2>
                <NotesApp 
                    name={props.location.state.name}
                />
                <h2 className='title'>Updates</h2>
                <UpdatesCard />
                <UpdatesBirthdayCard />
            </section>
        </div>
     );
}
 
export default ProfilePage;