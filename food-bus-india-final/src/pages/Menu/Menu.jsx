import React from "react";
import "./menu.css";
import Menu1 from "./Page1.png";
import Menu2 from "./Page2.png";
import Menu3 from "./Page3.png";

function Menu() {
  return (
    <div className="Menu">
      <div className="Menu-mobile">
        <div className="Menu-mobile-alltime">
          <img src={Menu1} alt="Mobile Menu" />
        </div>
        <div className="Menu-mobile-extra">
          <img src={Menu2} alt="Mobile Menu" />
        </div>
        <div className="Menu-mobile-bevrages">
          <img src={Menu3} alt="Mobile Menu" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
