import React from 'react';

import Navbar from '../Navbar';
import ScheduleCard from '../Cards/ScheduleCard/index.jsx';
import BirthdayCard from '../Cards/BirthdayCard/index.jsx';
import FollowUpCard from '../Cards/FollowUpCard/index.jsx';
import TopNewsCard from '../Cards/TopNewsCard/index.jsx';
import ShowMoreCard from '../Cards/ShowMoreCard/index.jsx';
import ProfessionalCard from '../Cards/ProfessionalCard/index.jsx';

import ventures from '../../images/1337.jpeg';
import tara from '../../images/tara.jpg';
import openlab from '../../images/openlab.jpg';
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
            link='https://fintechnews.my/20582/various/hsbc-openlab-innovation-challenge-retail-banking-registration-teams/?fbclid=IwAR2_ru9aOrrA4bsC0tXASEbOpyn3Smn9PbpE4AtY8Pz9nIvSJOUnbbYjrpw'
            title='Hackathons are Outdated, HSBC’s New Challenge Lets You Solve Retail Banking Problems from Home'
            date='26 April 2019'
            desc='Tara Latini, Country Head, Retail Banking and Wealth Management, HSBC Malaysia said: tara latini hsbc openlab innovation challenge....'
            // img={openlab}
          />
          <TopNewsCard 
            link='https://www.thedrum.com/news/2019/05/31/hsbc-champions-internationalism-football-full-english-final-ad'
            title='1337 VENTURES RECEIVES EQUITY CROWDFUNDING LICENSE'
            date='20 May 2019'
            desc='1337 Ventures associate, Max Teh, founding partner Bikesh Lakhmichand, Malaysian Minister of Finance Lim Guan Eng and SC ...'
            img={ventures}
          />
          <TopNewsCard 
            link='https://www.linkedin.com/company/tun-razak-exchange/'
            title='HSBC Malaysia names Tara Latini as new retail banking head'
            date='23 Aug 2018'
            desc='KUALA LUMPUR (Aug 23): HSBC Bank Malaysia Bhd (HSBC Malaysia) has appointed Tara Latini as its new head of Retail Banking and ...'
            img={tara}
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
