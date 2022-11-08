import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./header";
import Home from "./home/index";
import {Box, Grid} from "@mui/material";
import {  Route,Routes } from "react-router-dom"; 
import Papers from '../components/papers';
// import Footer from '../components/footer';
// import Header from '../components/header';
import Contact from '../components/contact';
import Contribute from '../components/contribute';
import Clubs from '../components/clubs';
import Syllabus from '../components/syllabus';
import CsePapers from '../containers/cse-papers';
import ItPapers from '../containers/it-papers';
import EcePapers from '../containers/ece-papers';
import MeePapers from '../containers/mee-papers';
import MsmePapers from '../containers/msme-papers';
import ChePapers from '../containers/che-papers';


export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
            
        
          {/* <Route exact path="/notes">
            <Notes/>
          </Route> */}
           <Route exact path="/Home">
            <Home />
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
               </Routes>
            </Grid>
         </Grid>
      </Box>
   )
}

