import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import map from "../Assets/2.svg";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Unlock the Secrets of Your City</h1>
          <p className="primary-text">
            Experience the convenience of having every Pizza Hut shop in your
            city at your fingertips. Simply search for what you crave, and let
            us organize it all for you, effortlessly...
          </p>
          <Link to="logic" smooth={true}>
            <button className="secondary-button">
              Find Now <FiArrowRight />
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
