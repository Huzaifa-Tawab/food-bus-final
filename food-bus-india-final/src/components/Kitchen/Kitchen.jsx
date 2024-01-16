import React from "react";
import "./kitchen.css";
import KitchenImg from "../../assets/kitchen/kitchen.jpeg";
function Kitchen() {
  return (
    <div className="Kitchen">
      <span>Standardization and Quality Control:</span>
      <div className="Kitchen-Flex">
        <p className="hedr">
        With a centralized base kitchen and rigorous SOPs, Food Bus of India ensures consistent food quality and taste across all outlets, addressing the standardization challenge.
        </p>
        <img src={KitchenImg} alt="" />
      </div>
      <div className="Kitchen-facts">
        <div className="Kitchen-fact blue">
          <h1>Customers Served</h1>
          <p>India’s first double decker dine in food chain</p>
        </div>
        <div className="Kitchen-fact red">
          <h1> Local Ingredients</h1>
          <p>
          Served over 200000 customers
          </p>
        </div>
        <div className="Kitchen-fact blue">
          <h1>Team Members</h1>
          <p>
          More than 70 talented chefs and staff to deliver exceptional service
          </p>
        </div>
        <div className="Kitchen-fact red">
          <h1>Cuisine Diversity </h1>
          <p>
          Handy , Trendy and Affordable menu
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kitchen;
