// Navbar.js
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/logos/FBI-LOGO-H.webp";
import Bus from "../../assets/logos/Bus.webp";

const Navbar = ({ onHide, isSidebarOpen, onToggleSidebar }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Check if the user is scrolling up or down
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Set the visibility based on the scrolling direction
      setVisible(isScrollingDown ? false : true);

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarClasses = `navbar ${isSidebarOpen ? "open" : ""} ${
    visible ? "visible" : "none"
  }`;

  return (
    <div className={navbarClasses}>
      <div className="Nav-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className={`nav-links ${isSidebarOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          exact
          activeClassName="selected"
          onClick={onToggleSidebar}
        >
          Home
        </NavLink>
        <NavLink
          to="/ourstory"
          activeClassName="selected"
          onClick={onToggleSidebar}
        >
          Our Story
        </NavLink>

        <NavLink
          to="/menu"
          activeClassName="selected"
          onClick={onToggleSidebar}
        >
          Menu
        </NavLink>
        <NavLink
          to="/franchise"
          activeClassName="selected"
          onClick={onToggleSidebar}
        >
          Franchise
        </NavLink>
        <NavLink to="/faq" activeClassName="selected" onClick={onToggleSidebar}>
          FAQ
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="selected"
          onClick={onToggleSidebar}
        >
          Contact
        </NavLink>
      </div>
      <div className="right">
        <button className="hamburger" onClick={onToggleSidebar}>
          &#9776;
        </button>
        <div className="Nav-Bus">
          <img src={Bus} alt="Bus" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
