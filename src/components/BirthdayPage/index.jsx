import React from 'react';
import Navbar from '../Navbar';
import BirthdayCard2 from '../Cards/BirthdayCard2/index.jsx';

import birthday1 from '../../images/birthday1.png';
import birthday2 from '../../images/birthday2.png';
import birthday3 from '../../images/birthday3.png';
import birthday4 from '../../images/birthday4.png';
import birthday5 from '../../images/birthday5.png';

const BirthdayPage = () => {
    return ( 
        <div>
            <Navbar page='Birthday' />
            <section>
                <BirthdayCard2
                    name='Hannah Soto'
                    dob='12th June 1988'
                    img={birthday1}
                />
                <BirthdayCard2
                    name='Nathan Weaver'
                    dob='12th June 1988'
                    img={birthday2}
                />
                <BirthdayCard2
                    name='Bruce Walker'
                    dob='12th June 1988'
                    img={birthday3}
                />
                <BirthdayCard2
                    name='Brian Warren'
                    dob='12th June 1988'
                    img={birthday4}
                />
                <BirthdayCard2
                    name='Linda Munoz'
                    dob='12th June 1988'
                    img={birthday5}
                />
                <p className='bottomtext'>You have no more schedule for Today</p>
            </section>
        </div>
     );
}
 
export default BirthdayPage;