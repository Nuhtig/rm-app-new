import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const UpdatesBirthdayCard = () => {
    return ( 
        <div className='card updatescard birthday'>
            <p className='title'>Birthday Soon!</p>
            <p className='desc'>Fusce Et Quam birthday fall at 7th June 2019.</p>
            <div className='row'>
                <p>Send message</p>
                <Link to='/RecommendedGiftsPage'>Send gift</Link>
            </div>
        </div>
     );
}
 
export default UpdatesBirthdayCard;