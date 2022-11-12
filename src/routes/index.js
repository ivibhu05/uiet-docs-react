import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Papers from '../components/papers';
import Footer from '../components/footer';
import Header from '../components/header';
import Contact from '../components/contact';
import Contribute from '../components/contribute';
import Clubs from '../components/clubs';
import Home from '../components/home';
import Syllabus from '../components/syllabus';
import CsePapers from '../containers/cse-papers';
import ItPapers from '../containers/it-papers';
import EcePapers from '../containers/ece-papers';
import MeePapers from '../containers/mee-papers';
import MsmePapers from '../containers/msme-papers';
import ChePapers from '../containers/che-papers';
const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/my-app">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          {/* <Route exact path="/notes">
            <Notes/>
          </Route> */}
          <Route exact path="/papers">
            <Papers />
          </Route>
          <Route exact path="/cse-papers">
            <CsePapers />
          </Route>
          <Route exact path="/it-papers">
            <ItPapers />
          </Route>
          <Route exact path="/ece-papers">
            <EcePapers />
          </Route>
          <Route exact path="/msme-papers">
            <MsmePapers />
          </Route>
          <Route exact path="/che-papers">
            <ChePapers />
          </Route>
          <Route exact path="/mee-papers">
            <MeePapers />
          </Route>
          <Route exact path="/syllabus">
            <Syllabus />
          </Route>
          <Route exact path="/clubs">
            <Clubs />
          </Route>
          <Route exact path="/contributers">
            <Contribute />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Routes;
