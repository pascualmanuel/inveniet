import React from "react";
import "../App.css";
import { ReactSVG } from "react-svg";
import Logo from "../assets/logo/InvenietLogoBlack.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar md:flex md:flex-row md:h-24 justify-between max-width items-center hidden sm:flex">
        <div className="logo">
          <ReactSVG src={Logo} />
        </div>
        <ul className="nav-links md:flex md:flex-row items-center">
          <li className="py-2 px-4">
            <a href="#home">Nosotros</a>
          </li>
          <li className="py-2 px-4">
            <a href="#about">Equipamiento</a>
          </li>
          <li className="py-2 px-4">
            <a href="#services">Preguntas frecuentes</a>
          </li>
          <li className=" md:h-[50px] md:w-[125px] flex justify-center items-center bg-iBlue rounded-lg ml-[18px]">
            <a href="/#contact" className="contact-button text-white">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
