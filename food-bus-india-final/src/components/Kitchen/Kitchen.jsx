import React from "react";
import "./kitchen.css";
import KitchenImg from "../../assets/kitchen/kitchen.jpeg";
function Kitchen() {
  return (
    <div className="Kitchen">
      <span>Standardization and Quality Control:</span>
      <div className="Kitchen-Flex">
        <p>
          With a centralized base kitchen and meticulously crafted Standard
          Operating Procedures (SOPs), Food Bus of India has implemented a
          robust system that guarantees unwavering consistency in food quality
          and taste throughout its diverse network of outlets. Recognizing the
          inherent challenges of standardization in the culinary industry, the
          company has strategically positioned its central kitchen as the
          nucleus of its operations, meticulously overseeing every aspect of the
          food preparation process.
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
