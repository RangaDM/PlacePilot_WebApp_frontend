import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <Link to="home" smooth={true}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
        <div className="rights">
        <p className="text-center text-white">
            &copy; 2024 Ranga. All rights reserved.
        </p>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>+94 770548789</span>
          <span>rangamaithreepala@gmail.com</span>
          <span>maithreepala_ugrd_e22@engug.ruh.ac.lk</span>
        </div>
        {/* <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
