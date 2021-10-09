import React from "react";
import "../Landing/Landing.css";
import FF from '../../Images/FeastFinder-logos_white.png';

function Landing() {
  return (
    <div>
      <div className="row" id="logoRow" className="justify-content-md-center">
        <div className="column" id="logo/column">
          <img
            id="#logo"
            alt="Feast Finder Logo"
            src={FF}
          />
        </div>
      </div>
    
    </div>
  );
}

export default Landing;
