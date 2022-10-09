
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import About from './components/About';
import Footer1 from './components/Footer1';
 import Navbar1 from './components/Navbar1';
import Alumni from './components/Alumni';
import Contact from './components/Contact';
import Contribute from './components/Contribute';
import Clubs from './components/Clubs';



function App() {
  return (

    <>
      <Router>
       <Navbar1/>
        <Switch>

          <Route exact  path="/about">
            <About />
          </Route>
          <Route exact path="/alumni">
            <Alumni />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/contributers">
            <Contribute/>
          </Route>
          <Route exact path="/clubs">
            <Clubs/>
          </Route>
        </Switch>
        <Footer1 />

      </Router>


    </>
  );
}

export default App;
