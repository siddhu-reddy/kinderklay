import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import bgImage from "../../assets/stacked-steps-haikei.png";

const Footer = () => {
  return (
    <>
    <img src={bgImage} alt="Footer Background" className="footer-bg" />
      <footer className="footer"> 
        <div className="footer-container">
          <div className="footer-section about">
            <img src={logo} alt="Logo" className="logo" />
            <p className="footer-text">
              Come visit The Kinderklay Center for yourself so you can tour the rooms
              and meet some of our educators. We offer high-quality early education.
            </p>
            <div className="socialIcons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF className="icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram className="icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube className="icon" />
              </a>
            </div>
          </div>
          <div className="footer-section contacts">
            <h2>Our Contacts</h2>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <p>Hyderabad</p>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <p>+91 9666123743</p>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <p>+91 1234567890</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <a className="v" href="kinderklay.com">kinderklay.com</a>
            </div>
          </div>
          <div className="footer-section hours">
            <h2 className="s">Open Hours</h2>
            <div className="hours-box">
              <p>Mon - Fri: <strong>8 am - 7 pm</strong></p>
              <p>Saturday: <strong>9 am - 4 pm</strong></p>
              <p>Sunday: <strong>Closed</strong></p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="cp">Copyright © {new Date().getFullYear()} Kinderklay . All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
