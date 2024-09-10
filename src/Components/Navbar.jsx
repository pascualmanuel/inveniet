import React, { useState } from "react";
import "../App.css";
import { ReactSVG } from "react-svg";
import Logo from "../assets/logo/InvenietLogoBlack.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="md:flex md:flex-row md:h-24 justify-between max-width items-center hidden sm:flex">
        <div className="logo">
          <ReactSVG src={Logo} />
        </div>
        <ul className="md:flex md:flex-row items-center">
          <li className="py-2 px-4 myPBold">
            <a href="#home">Nosotros</a>
          </li>
          <li className="py-2 px-4 myPBold">
            <a href="#about">Equipamiento</a>
          </li>
          <li className="py-2 px-4 myPBold">
            <a href="#services">Preguntas frecuentes</a>
          </li>
          <li className="md:h-[50px] md:w-[125px] flex justify-center items-center bg-iBlue rounded-lg ml-[18px]">
            <a href="/#contact" className="contact-button myCTA text-white">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex justify-between items-center h-16 px-4 sm:hidden">
        <div className="logo">
          <ReactSVG src={Logo} className="w-20" />{" "}
          {/* Adjust width as needed */}
        </div>
        <button
          className="hamburger focus:outline-none transition-transform duration-500"
          onClick={toggleMobileMenu}
        >
          {/* Toggle between hamburger and cross icon */}
          {isMobileMenuOpen ? (
            // Cross SVG
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_160_3141)">
                <circle cx="17.7634" cy="17.5" r="17.5" fill="#2C3242" />
              </g>
              <path
                d="M12.4 25L11 23.6L16.6 18L11 12.4L12.4 11L18 16.6L23.6 11L25 12.4L19.4 18L25 23.6L23.6 25L18 19.4L12.4 25Z"
                fill="#F4F7FA"
              />
              <defs>
                <filter
                  id="filter0_b_160_3141"
                  x="-3.73657"
                  y="-4"
                  width="43"
                  height="43"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_160_3141"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_160_3141"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          ) : (
            // Hamburger SVG
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_159_239)">
                <circle cx="17.7634" cy="17.5" r="17.5" fill="#F4F7FA" />
              </g>
              <rect x="10.2634" y="13" width="15" height="2" fill="#161C2D" />
              <rect x="10.2634" y="21" width="15" height="2" fill="#161C2D" />
              <defs>
                <filter
                  id="filter0_b_159_239"
                  x="-3.73657"
                  y="-4"
                  width="43"
                  height="43"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_159_239"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_159_239"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-2 transition-all duration-300">
            <li className="py-2 px-4 myPBold">
              <a href="#home" onClick={toggleMobileMenu}>
                Nosotros
              </a>
            </li>
            <li className="py-2 px-4 myPBold">
              <a href="#about" onClick={toggleMobileMenu}>
                Equipamiento
              </a>
            </li>
            <li className="py-2 px-4 myPBold">
              <a href="#services" onClick={toggleMobileMenu}>
                Preguntas frecuentes
              </a>
            </li>
            <li className="py-2 px-4 myPBold">
              <a
                href="#contact"
                className="contact-button myCTA text-white"
                onClick={toggleMobileMenu}
              >
                Contacto
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
