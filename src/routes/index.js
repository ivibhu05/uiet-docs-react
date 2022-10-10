import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../components/about';
import Footer from '../components/footer';
import Header from '../components/header';
import Contact from '../components/contact';
import Contribute from '../components/contribute';
import Clubs from '../components/clubs';
import Home from '../components/home';

const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/contributers">
            <Contribute />
          </Route>
          <Route exact path="/clubs">
            <Clubs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Routes;
