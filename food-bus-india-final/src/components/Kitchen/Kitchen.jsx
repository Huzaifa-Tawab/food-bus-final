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
          <p>Over 193,000 customers have been served at Food Bus of India since our inception.</p>
        </div>
        <div className="Kitchen-fact red">
          <h1> Local Ingredients</h1>
          <p>
          70% of our ingredients are locally sourced, supporting community farmers and ensuring freshness.
          </p>
        </div>
        <div className="Kitchen-fact blue">
          <h1>Team Members</h1>
          <p>
          Our dedicated team comprises over 70 talented chefs and staff committed to delivering exceptional dining experiences.
          </p>
        </div>
        <div className="Kitchen-fact red">
          <h1>Cuisine Diversity </h1>
          <p>
          Offering a menu featuring dishes from different regions of India & worldwide. Its Handy , Trendy and Affordable
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kitchen;
