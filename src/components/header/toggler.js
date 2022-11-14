import React from 'react';

export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease'

   return (
      <div fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img">🌞</span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img">🌚</span>
         }
      </div>
   )
}