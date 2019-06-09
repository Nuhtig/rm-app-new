import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const UpdatesBirthdayCard = () => {
    return ( 
        <Link to='/RecommendedGiftsPage' className='card updatescard birthday'>
            <p className='title'>Birthday Soon!</p>
            <p className='desc'>Bikesh Lakhmichand birthday fall at 17th Nov 2019.</p>
            <div className='row'>
                <p>Send message</p>
                <p>Send gift</p>
            </div>
        </Link>
     );
}
 
export default UpdatesBirthdayCard;