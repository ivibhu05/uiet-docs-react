import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons"; 

export default function Toggler({ darkMode, handleClick }) {
  const transition = "all 250ms ease";
  const hoverStyle = {
    transform: "translateY(-3px)",
    transition: transition
  };

  return (
    <div
      style={{
        fontSize: "1.5rem",
        cursor: "pointer",
        padding: "2px",
        ...hoverStyle // Spread the hover style here
      }}
      onClick={handleClick}
    >
      {darkMode ? (
        <span aria-label="Full Moon" role="img">
          <FontAwesomeIcon icon={faMoon} />
        </span>
      ) : (
        <span aria-label="New Moon" role="img">
         <FontAwesomeIcon icon={faMoon} color="black" />
        </span>
      )}
    </div>
  );
}
