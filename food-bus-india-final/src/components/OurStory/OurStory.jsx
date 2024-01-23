import React from "react";
import "./ourstory.css";
import logo from "../../assets/logos/FBI-LOGO-H.webp";
function OurStory() {
  return (
    <div className="OurStory-C">
      <div className="OurStory-C-content">
        <div className="OurStory-C-content-changes">
          <img src={logo} className="changes-logo" />
          <p>India’s First</p>
          <h1>
            Double Decker Dine-in <br />
            Food Chain...
          </h1>
        </div>
        {/* <p>
          Step into the future
          of dining with Food Bus of India, an avant-garde concept that reshapes
          the way people encounter hospitality. We're more than a mere
          restaurant; we're a culinary unmatched hit untendelight of exquisite
          cuisine with an unmatched dining adventure.
        </p> */}
      </div>
    </div>
  );
}

export default OurStory;
