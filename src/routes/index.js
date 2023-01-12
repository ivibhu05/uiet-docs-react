import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Papers from "../components/papers";
import Notes from "../components/notes";
import Footer from "../components/footer";
import Header from "../components/header";
import Contact from "../components/contact";
import Contribute from "../components/contribute";
import Clubs from "../components/clubs";
import Home from "../components/home";
import Syllabus from "../components/syllabus";
import CsePapers from "../containers/cse-papers";
import Csenotes from "../containers/cse-notes/csenotes";
import ItPapers from "../containers/it-papers";
import EcePapers from "../containers/ece-papers";
import MeePapers from "../containers/mee-papers";
import ItNotes from "../containers/it-notes";
import CheNotes from "../containers/che-notes";
import EceNotes from "../containers/ece-notes/index";
import MeeNotes from "../containers/mee-notes";
import MsmeNotes from "../containers/msme-notes";
import MsmePapers from "../containers/msme-papers";
import ChePapers from "../containers/che-papers";
import ContributeMsg from "../components/contributemsg";
import Style from "../routes/routes.module.css";

export default function Routes() {
  let getDarkmode = () => {
    return JSON.parse(localStorage.getItem("darkmode"));
  };
  let [darkMode, setDarkMode] = useState(getDarkmode);
  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? Style.dark : Style.light}>
      <div
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <div item>
          <Header darkMode={darkMode} handleClick={handleClick} />
        </div>
        <Router>
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
            <Route exact path="/notes">
              <Notes />
            </Route>
            <Route exact path="/cse-notes">
              <Csenotes />
            </Route>
            <Route exact path="/ece-notes">
              <EceNotes />
            </Route>
            <Route exact path="/it-notes">
              <ItNotes />
            </Route>
            <Route exact path="/che-notes">
              <CheNotes />
            </Route>
            <Route exact path="/mee-notes">
              <MeeNotes />
            </Route>
            <Route exact path="/msme-notes">
              <MsmeNotes />
            </Route>
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
            <Route exact path="/contributemsg">
              <ContributeMsg />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}
