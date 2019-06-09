import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const UpdatesCard = props => {
    return ( 
        <Link className='card updatescard'>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
            <div className='row'>
                <p>Send message</p>
                <Link to='/RecommendedGiftsPage'>Send gift</Link>
            </div>
        </Link>
     );
}
 
export default UpdatesCard;