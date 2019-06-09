import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BirthdayCard2 = (props) => {
    return ( 
        <div className='card row bithdaycard card-image'>
            <img src={props.img} alt="hsbc"/>
            <div className='content'>
                <p className='name'>{props.name}</p>
                <p className='dob'>{props.dob}</p>
                <p className='desc'>Wish {props.name} a happy birthday or send a gift!</p>
                <div className='row notif'>
                    <Link className='gift' to='/RecommendedGiftsPage'>Send gift</Link>
                    <p>Send message</p>
                </div>
            </div>
        </div>
     );
}
 
export default BirthdayCard2;