import React from "react";
import Dining from "../../assets/ourstory/image1.jpg";
import burger from "../../assets/ourstory/image2.jpg";
import image3rd from "../../assets/ourstory/pizza3.png";
import bussimage from "../../assets/ourstory/imgneww.png";
import KitchenImg from "../../assets/kitchen/kitchen.jpeg";

import "./ourstory.css";
function OurStory() {
  return (
    <div className="OurStory">
      <div className="OurStory-hero"></div>
      <div className="OurStory-content">
        <div className="OurStory-content-card">
          <div className="OurStory-content-card-text">
            <h1>Unique Dining Concept</h1>
            <p>
              Food Bus of India introduces a truly unique dining concept with
              its double-decker bus restaurant, setting it apart from
              traditional restaurants and attracting a broad audience.
            </p>
          </div>
          <div className="OurStory-content-card-img">
            <img src={Dining} alt="Dining" />
          </div>
        </div>
        <div className="OurStory-content-card reverse">
          <div className="OurStory-content-card-text">
            <h1>Diverse Menu</h1>
            <p>
              Our menu is a culinary journey that spans Indian, Contiental ,
              Chinese, and more, offering a wide variety of around 50+ SKUs
            </p>
          </div>
          <div className="OurStory-content-card-img">
            <img src={burger} alt="Dining" />
          </div>
        </div>
        <div className="OurStory-content-card ">
          <div className="OurStory-content-card-text">
            <h1>Tech and Chef’s Collaboration</h1>
            <p>
              Our Technologists collaborate closely with our chef’s to ensure a
              top-notch dining experience combining the best of technology and
              culinary expertise
            </p>
          </div>
          <div className="OurStory-content-card-img">
            <img src={image3rd} alt="Dining" />
          </div>
        </div>
        <div className="OurStory-content-card reverse">
          <div className="OurStory-content-card-text">
            <h1> Location Flexibility</h1>
            <p>
              We eliminate location constraints, allowing it to adapt to various
              settings, such as hospitals, universities, and high-traffic areas,
              expanding its customer base.
            </p>
          </div>
          <div className="OurStory-content-card-img">
            <img src={bussimage} alt="Dining" />
          </div>
        </div>
        <div className="OurStory-content-card ">
          <div className="OurStory-content-card-text">
            <h1> Standardization and Quality Control</h1>
            <p>
              With a centralized base kitchen and rigorous SOPs, Food Bus of
              India ensures consistent food quality and taste across all
              outlets, addressing the standardization challenge.
            </p>
          </div>
          <div className="OurStory-content-card-img">
            <img src={KitchenImg} alt="Dining" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
