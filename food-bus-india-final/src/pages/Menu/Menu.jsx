import React from "react";
import "./menu.css";
import DesktopMenu from "../../assets/menu/Menu-D.png";
import MobileMenu1 from "../../assets/menu/Menu-M1.png";
import MobileMenu2 from "../../assets/menu/Menu-M2.png";
import MobileMenu3 from "../../assets/menu/Menu-M3.png";

function Menu() {
  return (
    <div className="Menu">
      <div className="Menu-desktop">
        <img src={DesktopMenu} alt="Desktop Menu" />
      </div>
      <div className="Menu-mobile">
        <div className="Menu-mobile-alltime">
          <img src={MobileMenu1} alt="Mobile Menu" />
        </div>
        <div className="Menu-mobile-extra">
          <img src={MobileMenu2} alt="Mobile Menu" />
        </div>
        <div className="Menu-mobile-bevrages">
          <img src={MobileMenu3} alt="Mobile Menu" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
