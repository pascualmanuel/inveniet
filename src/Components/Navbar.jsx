import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-links bg-slate-200">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="/#contact" className="contact-button">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
