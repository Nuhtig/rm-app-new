import React from 'react';
import Navbar from '../Navbar';
import ScheduleCard2 from '../Cards/ScheduleCard2/index.jsx';

import kash from '../../images/kash.jpeg';
import stephen from '../../images/stephen.jpeg';
import Albert from '../../images/Albert.jpeg'

const SchedulePage = () => {
    return ( 
        <div>
            <Navbar page='Schedule' />
            <section>
                <ScheduleCard2
                    name='Kashminder Singh'
                    desc='Open bank account'
                    time='9:00 AM'
                    location='Ampang starbucks'
                    img={kash}
                />
                <ScheduleCard2
                    name='Stephen Cheshire'
                    desc='Lunch appointment'
                    time='11:00 AM'
                    location='Pavilion'
                    img={stephen}
                />
                <ScheduleCard2
                    name='Aditya Tuli'
                    desc='Financial report assessment'
                    time='4:00 PM'
                    location='HSBC KL Branch'
                    img={Albert}
                />
                <p className='bottomtext'>You have no more schedule for Today</p>
            </section>
        </div>
     );
}
 
export default SchedulePage;