import React from "react";
import "./kitchen.css";
import KitchenImg from "../../assets/kitchen/kitchen.jpeg";
import first from "../../assets/kitchen/trophy.png";
import served from "../../assets/kitchen/served.png";
import team from "../../assets/kitchen/team.png";
import food from "../../assets/kitchen/food.png";
function Kitchen() {
  return (
    <div className="Kitchen">
      {/* <div className="Kitchen-Flex">
        <p className="hedr">
          <span>Standardization and Quality Control:</span>
          <br />
          With a centralized base kitchen and rigorous SOPs, Food Bus of India
          ensures consistent food quality and taste across all outlets,
          addressing the standardization challenge.
        </p>
        <img src={KitchenImg} alt="" />
      </div> */}
      <div className="Kitchen-facts">
        <div className="Kitchen-fact blue">
          <img src={first} alt="" />
          <h1>First of it's kind</h1>
          <p>India’s first double decker dine in food chain</p>
        </div>
        <div className="Kitchen-fact red">
          <img src={served} alt="" />
          <h1>Exceptional Growth</h1>
          <p>Served over 2,00,000 + customers till now</p>
        </div>
        <div className="Kitchen-fact blue">
          <img src={team} alt="" />
          <h1>Team Members</h1>
          <p>
            More than 70 talented chefs & staff to deliver exceptional service
          </p>
        </div>
        <div className="Kitchen-fact red">
          <img src={food} alt="" />

          <h1>Cuisine Diversity </h1>
          <p>Handy , Trendy and Affordable 50 + SKU’s menu</p>
        </div>
      </div>
    </div>
  );
}

export default Kitchen;
