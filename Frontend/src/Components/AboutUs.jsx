import React from "react";
import { Link } from "react-router-dom";
import { FaBoxes, FaChartLine } from "react-icons/fa";
import "../StylesComponents/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="backgroundOverlay"></div>
      <div className="content">
        <div className="textContainer">
          <h2 className="heading">Welcome to Easy Mart</h2>
          <p className="description">
            Easy Mart is your trusted inventory management solution, making stock 
            tracking and business operations seamless. We help businesses reduce 
            waste, optimize supply chains, and enhance efficiency.
          </p>
          <Link to="/features">
            <button className="button_moto">Discover Features</button>
          </Link>
        </div>
        <div className="iconContainer">
          <FaBoxes className="icon" />
          <FaChartLine className="icon" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
