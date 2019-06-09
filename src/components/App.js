import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import './App.scss';
import BottomNavbar from './BottomNavbar';

import HomePage from './HomePage';
import SchedulePage from './SchedulePage';
import BirthdayPage from './BirthdayPage';
import ShowMorePage from './ShowMorePage';
import ProfilePage from './ProfilePage';
import RecommendedGiftsPage from './RecommendedGiftsPage';
import CustomerListPage from './CustomerListPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0}}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className='switch-wrapper'
        >
          <Route path='/' exact component={HomePage} />
          <Route path='/Schedulepage' exact component={SchedulePage} />
          <Route path='/BirthdayPage' exact component={BirthdayPage} />
          <Route path='/ShowMorePage' exact component={ShowMorePage} />
          <Route path='/ProfilePage' exact component={ProfilePage} />
          <Route path='/RecommendedGiftsPage' exact component={RecommendedGiftsPage} />
          <Route path='/CustomerListPage' exact component={CustomerListPage} />
          
        </AnimatedSwitch>
        <BottomNavbar />
      </Router>
    </div>
  );
}

export default App;
