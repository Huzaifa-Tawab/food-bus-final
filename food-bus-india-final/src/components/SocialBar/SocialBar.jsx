// SocialBar.jsx

import React from "react";
import "./socialbar.css";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const SocialBar = () => {
  return (
    <div className="social-bar">
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="img"/>
      </a>
      
      <a
        href="https://www.pinterest.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPinterest className="img" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="img" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="img" />
      </a>
    </div>
  );
};

export default SocialBar;
