import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <nav className="navbarContainer">
      <div className="logoSection">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menuSection">
        <NavLink exact to="/" activeClassName="activeLink">
          <h1>Home</h1>
        </NavLink>
        <NavLink to="/admission" activeClassName="activeLink">
          <h1>Admission</h1>
        </NavLink>
        <NavLink to="/franchise" activeClassName="activeLink">
          <h1>Franchise</h1>
        </NavLink>
        <NavLink to="/branches" activeClassName="activeLink">
          <h1>Branches</h1>
        </NavLink>
        <NavLink to="/blog" activeClassName="activeLink">
          <h1>Blog</h1>
        </NavLink>
        <NavLink to="/contact" activeClassName="activeLink">
          <h1>Contact</h1>
        </NavLink>
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
  );
};

export default Nav;
