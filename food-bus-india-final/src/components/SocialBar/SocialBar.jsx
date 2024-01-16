// SocialBar.jsx

import React from "react";
import "./socialbar.css";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const SocialBar = () => {
  return (
    <div className="social-bar">
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook  className="img you"/>
      </a>
      
      {/* <a
        href="https://www.pinterest.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPinterest className="img pin" />
      </a> */}
      <a
        href="https://www.instagram.com/foodbusofindia/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="img inst" />
      </a>
      {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="img twi" />
      </a> */}
    </div>
  );
};

export default SocialBar;
