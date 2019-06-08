import React from 'react';
import Navbar from '../Navbar';
import ScheduleCard2 from '../Cards/ScheduleCard2/index.jsx';

import mily from '../../images/g.jpeg';
import bikesh from '../../images/bikesh.jpeg';
import Aditya from '../../images/Aditya.jpeg'

const SchedulePage = () => {
    return ( 
        <div>
            <Navbar page='Schedule' />
            <section>
                <ScheduleCard2
                    name='Mily Liang'
                    desc='Open bank account'
                    time='9:00 AM'
                    location='Ampang starbucks'
                    img={mily}
                />
                <ScheduleCard2
                    name='Bikesh Lakhmichand'
                    desc='Lunch appointment'
                    time='11:00 AM'
                    location='Pavilion'
                    img={bikesh}
                />
                <ScheduleCard2
                    name='Aditya Tuli'
                    desc='Financial report'
                    time='4:00 PM'
                    location='HSBC KL Branch'
                    img={Aditya}
                />
                <p className='bottomtext'>You have no more schedule for Today</p>
            </section>
        </div>
     );
}
 
export default SchedulePage;