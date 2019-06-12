import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const UpdatesBirthdayCard = () => {
    return ( 
        <div className='card updatescard birthday'>
            <p className='title'>Birthday Soon!</p>
            <p className='desc'>Kashminder Singh birthday fall at 17th Sept 2019.</p>
            <div className='row'>
                <p>Send message</p>
                <Link to='/RecommendedGiftsPage'>Send gift</Link>
            </div>
        </div>
     );
}
 
export default UpdatesBirthdayCard;