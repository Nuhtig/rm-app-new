import React from 'react'
import calenderImg from '../../../images/schedule.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ScheduleCard = () => {
    return ( 
        <Link to="/Schedulepage" className='card row col-2 top-card'>
        <img width='40px' height='40px' src={calenderImg} alt="calenderimg"/>
        <div>
            <h3>Schedule</h3>
            <div className='number'>3</div>
            <span>Appointment</span>
        </div>
        </Link>
        
     );
}
 
export default ScheduleCard;