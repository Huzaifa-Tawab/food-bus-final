// SocialBar.jsx

import React from "react";
import "./socialbar.css";

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="youtube-icon.png" alt="YouTube" />
      </a>
      <a
        href="https://www.pinterest.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="pinterest-icon.png" alt="Pinterest" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="instagram-icon.png" alt="Instagram" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <img src="twitter-icon.png" alt="Twitter" />
      </a>
    </div>
  );
};

export default SocialBar;
