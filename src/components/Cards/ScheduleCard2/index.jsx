import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ScheduleCard2 = (props) => {
    return ( 
        <Link to={{
            pathname: '/ProfilePage',
            state: {
                img: props.img,
                name: props.name
            }
        }} className='card row schedulecard card-image' img={props.img}>
            <img src={props.img} alt="hsbc"/>
            <div className='content'>
                <p className='desc'>{props.desc}</p>
                <p className='time'>{props.time}</p>
                <p className='location'>{props.location}</p>
            </div>
        </Link>
     );
}
 
export default ScheduleCard2;