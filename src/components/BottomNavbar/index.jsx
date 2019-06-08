import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import homered from '../../images/homered.png';
import home from '../../images/home.png';
import customers from '../../images/avatar.png';
import notes from '../../images/edit.png';
import inbox from '../../images/envelope.png';
import account from '../../images/account.png';

const BottomNavbar = props => {
    console.log(props)
    return ( 
        <div className='row bottomnavbar'>
            <NavLink 
            to='/' 
            exact 
            className='group'
            >
                <div className='homeimg'></div>
                <p>Home</p>
            </NavLink>
            <NavLink 
            to='/CustomerListPage' 
            exact 
            className='group'
            >
                <div className='customerimg'></div>
                <p>Customers</p>
            </NavLink>
            <div className='group'>
                <img src={notes} alt="notes"/>
                <p>Notes</p>
            </div>
            <div className='group'>
                <img src={inbox} alt="inbox"/>
                <p>Inbox</p>
            </div>
            <div className='group'>
                <img src={account} alt="account"/>
                <p>Account</p>
            </div>
        </div>
     );
}
 
export default BottomNavbar;