// eslint-disable-line no-eval
/* eslint-disable */

import './css/App.css';
import react, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import NotFound from './Component/NotFound';
import Loader from './Component/Common/Loader';
import MeetingState from './Context/meetingState';
import TherapyList from './Component/Therapy/TherapyList';
import ParticipatorList from './Component/ParticipatorList';
import SpecificPerson from './Component/Therapy/SpecificPerson';
import Bimeh from './Component/Bimeh';
import Packet from './Component/Packet';
import LogingPage from './Component/Therapy/LogingPage';
import Prescription from './Component/Prescription';
import HomePage from './Component/HomePage';
import Search from './Component/Search';
import Reports from './Component/Reports';
import Personal from './Component/Personal';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PersonalHomePage from './Component/PersonalHomePage';
import ShowPrint from './Component/Print/DarmanPrint/ShowPrint';
import TestPrint from './Component/Print/DarmanPrint/TestPrint';
import DeleteSpecific from './Component/Forms/DeleteSpecific';
import Aelemandi from './Component/Aelemandi';
import MainReaport from './Component/Reaports/MainReaport';



function App() {


  return (
    <div>
      <MeetingState>
        <BrowserRouter basename="/RefahiClient">
        {/* <BrowserRouter basename="/HealthClient"> */}
          <Switch>
            <Route exact path="/" component={HomePage} />{' '}
            <Route exact path="/DeleteSpecific" component={DeleteSpecific} />{' '}
            <Route exact path="/SpecificPerson" component={SpecificPerson} />{' '}
            <Route exact path="/Login" component={LogingPage} />{' '}
            <Route exact path="/TherapyList" component={TherapyList} />{' '}
            <Route exact path="/Bimeh" component={Bimeh} />{' '}
            <Route exact path="/Prescription" component={Prescription} />{' '}
            <Route exact path="/Packet" component={Packet} />{' '}
            <Route exact path="/Participator" component={ParticipatorList} />{' '}
            <Route exact path="/loader" component={Loader} />{' '}
            <Route exact path="/ShowPrint/:Id" component={ShowPrint} />{' '}
            <Route exact path="/Reports" component={Reports} />{' '}
            <Route exact path="/TestPrint" component={TestPrint} />{' '}
            <Route exact path="/Search" component={Search} />{' '}
            <Route exact path="/Personal" component={Personal} />{' '}
            <Route exact path="/Aelemandi" component={Aelemandi} />{' '}
            <Route exact path="/MainReaport" component={MainReaport} />{' '}
            <Route exact path="/PersonalHomePage" component={PersonalHomePage} />{' '}
            <Route path="/" component={NotFound} />{' '}
          </Switch>{' '}
        </BrowserRouter>{' '}
      </MeetingState>{' '}
    </div>
  );
}

export default App;
