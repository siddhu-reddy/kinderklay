import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <div className="navbar">
      <nav className="navbarContainer">
        <div className="logoSection">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="menuSection">
          <Link to="/" className="nav-link"><h1>Home</h1></Link>
          <Link to="/About_Us" className="nav-link"><h1>About Us</h1></Link>
          <Link to="/Admission" className="nav-link"><h1>Admission</h1></Link>
          <Link to="/Franchise" className="nav-link"><h1>Franchise</h1></Link>
          <Link to="/Branches" className="nav-link"><h1>Branches</h1></Link>
          <Link to="/Blog" className="nav-link"><h1>Blog</h1></Link>
        </div>

        <div className="socialIcons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="icon" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
