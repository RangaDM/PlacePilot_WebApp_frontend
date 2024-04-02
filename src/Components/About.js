import React from "react";
import AboutBackground from "../Assets/about-background.svg";
import map from "../Assets/4.svg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={map} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Navigate Your Next Location</h1>
        <p className="primary-text">
          Unlock the secrets of your city, one location at a time. save your
          favorite locations and share them with friends ...
        </p>
        <p className="primary-text">
          Find your way with ease and precision ...
        </p>
        <div className="about-buttons-container">
        <Link to="contact" smooth={true}>
          <button className="secondary-button">
            Contact <FiArrowRight />{" "}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
