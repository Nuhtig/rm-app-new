import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const UpdatesCard = props => {
    const sms = `sms:${props.phone}?body=${props.textbody}`;

    return ( 
        <div className='card updatescard'>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
            <div className='row'>
                <a href={sms}>Send message</a>
                <Link to='/RecommendedGiftsPage'>Send gift</Link>
            </div>
        </div>
     );
}
 
export default UpdatesCard;