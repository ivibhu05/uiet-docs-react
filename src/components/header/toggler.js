import React from 'react';
import {Box} from "@mui/material";

export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 300ms ease'

   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-5px)', transition: transition}}}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img">🌞</span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img">🌚</span>
         }
      </Box>
   )
}