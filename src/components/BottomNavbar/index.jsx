import React from 'react';

import home from '../../images/home.png';
import customers from '../../images/avatar.png';
import notes from '../../images/edit.png';
import inbox from '../../images/envelope.png';
import account from '../../images/account.png';

const BottomNavbar = () => {
    return ( 
        <div className='row bottomnavbar'>
            <div className='group active'>
                <img src={home} alt="home"/>
                <p>Home</p>
            </div>
            <div className='group'>
                <img src={customers} alt="customers"/>
                <p>Customers</p>
            </div>
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