import React from 'react';

import Navbar from '../Navbar';
import ScheduleCard from '../Cards/ScheduleCard/index.jsx';
import BirthdayCard from '../Cards/BirthdayCard/index.jsx';
import FollowUpCard from '../Cards/FollowUpCard/index.jsx';
import TopNewsCard from '../Cards/TopNewsCard/index.jsx';
import ShowMoreCard from '../Cards/ShowMoreCard/index.jsx';
import ProfessionalCard from '../Cards/ProfessionalCard/index.jsx';

import hsbcimg from '../../images/s3-news.jpg';
import hsbcimg2 from '../../images/0.jpeg';
import property from '../../images/property.jpg';
import mily from '../../images/g.jpeg';
import milyimg from '../../images/mily1.png';
import Aditya from '../../images/Aditya.jpeg';
import Adityaimg from '../../images/adityaimg.jpeg';

function Homepage() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <div className='row'>
          <ScheduleCard />
          <BirthdayCard />
        </div>
        <div className='row'>
          <FollowUpCard />
        </div>
      </section>
      <section>
        <h2 className='title'>Top News</h2>
          <TopNewsCard 
            link='https://www.thestar.com.my/business/business-news/2019/05/08/malaysians-spend-more-time-looking-at-properties-than-going-to-the-gym-or-reading/'
            title='Malaysians spend more time looking at properties...'
            date='Wednesday, 8 May 2019'
            desc='...watching the news,” said country head for retail banking and wealth management Tara Latini.'
            img={property}
          />
          <TopNewsCard 
            link='https://www.thedrum.com/news/2019/05/31/hsbc-champions-internationalism-football-full-english-final-ad'
            title='Tara Latini likes this'
            date='31 May 2019'
            desc='HSBC UK has championed internationalism in football to celebrate the first all English Champions League and Europa League finals.'
            img={hsbcimg}
          />
          <TopNewsCard 
            link='https://www.linkedin.com/company/tun-razak-exchange/'
            title='Tara Latini likes this'
            date='5d'
            desc='As you traverse the city, you may not always notice the multi-faceted shapes of the KL metropolis.'
            img={hsbcimg2}
          />
          <ShowMoreCard />
      </section>
      <section>
        <h2 className='title'>Professional</h2>
        <ProfessionalCard 
          link='https://www.linkedin.com/feed/update/activity:6539106732319350784/'
          name='Aditya Tuli'
          position='Technology and Innovation Director. Running startup bootcamps, accelerators, and impact programmes.'
          postTime='3d'
          desc='Inviting all social innovators and social entrepreneurs to apply for this. You could be an aspiring entrepreneur, marketing expert, designer, or developer...'
          profileImg={Aditya}
          img={Adityaimg}
          imgDesc='MaGIC Social Entrepreneurship (SE) Bootcamp is currently open for application.'
        />
        <ProfessionalCard 
          link='https://www.linkedin.com/feed/update/activity:6527024284886503424/'
          name='Mily Liang'
          position='Head of Customer Value Management at HSBC Retail Banking and Wealth Management'
          postTime='1mo'
          desc='If you are passionate about leading change to our teams and customers, check out this great opportunity at HSBC Malaysia.'
          profileImg={mily}
          img={milyimg}
          imgDesc='We are currently seeking for a subject matter expert in change delivery to lead...'
        />
        <ProfessionalCard 
          link='https://www.linkedin.com/in/tara-latini-1990025/detail/recent-activity/shares/'
          name='Tara Latini'
          position='Successful Business Transformation Leader & Passionate Advocate of the Customer Experience'
          postTime='1w'
          desc='Great ideas are born from great environments where the appetite for change exist.'
        />
        <ShowMoreCard />
      </section>
    </div>
  );
}

export default Homepage;
