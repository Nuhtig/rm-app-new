import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import right from '../../images/right2.png'

const Navbar = (props) => {
    switch(props.page) {
        case 'Schedule':
            return (
                <div className='navbar red-bg'>
                    <Link to='/' className='row back'>
                        <img src={right} alt="right"/>
                        <h2>Today’s Schedule</h2>
                    </Link>
                </div>
            )
        case 'Birthday':
            return (
                <div className='navbar red-bg'>
                    <Link to='/' className='row back'>
                        <img src={right} alt="right"/>
                        <h2>Today’s Birthday</h2>
                    </Link>
                </div>
            )
        case 'topnews':
            return (
                <div className='navbar red-bg'>
                    <Link to='/' className='row back'>
                        <img src={right} alt="right"/>
                        <h2>Top News</h2>
                    </Link>
                </div>
            )
        case 'profile':
            return (
                <div className='navbar red-bg'>
                    <Link to='/Schedulepage' className='row back'>
                        <img src={right} alt="right"/>
                    </Link>
                </div>
            )        
        default:
        return (
            <div className='navbar red-bg'>
                <h2>Welcome, Yok Tien</h2>
                <div className='row'>
                    <p className='active'>Today</p>
                    <p>Week</p>
                    <p>Month</p>
                    <p>3 Month</p>
                </div>
            </div>
        )
    }
}

export default Navbar