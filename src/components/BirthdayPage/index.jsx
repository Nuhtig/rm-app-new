import React from 'react';
import Navbar from '../Navbar';
import BirthdayCard2 from '../Cards/BirthdayCard2/index.jsx';

import hannah from '../../images/hannah.png';

const BirthdayPage = () => {
    return ( 
        <div>
            <Navbar page='Birthday' />
            <section>
                <BirthdayCard2
                    name='Hannah Soto'
                    dob='12th June 1988'
                    img={hannah}
                />
                <p className='bottomtext'>You have no more schedule for Today</p>
            </section>
        </div>
     );
}
 
export default BirthdayPage;