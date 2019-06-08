import React from 'react'
import birthdayImg from '../../../images/birthday.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BirthdayCard = () => {
    return ( 
        <Link to="/birthdaypage"  className='card row col-2 top-card'>
            <img width='40px' height='40px' src={birthdayImg} alt="calenderimg"/>
            <div>
                <h3>Birthday</h3>
                <div className='number'>5</div>
                <span>People</span>
            </div>
        </Link>
     );
}
 
export default BirthdayCard;