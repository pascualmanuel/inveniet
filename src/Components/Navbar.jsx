import React, { useState, useEffect } from "react";
import "../App.css";
import { ReactSVG } from "react-svg";
import Logo from "../assets/logo/InvenietLogoBlack.svg";
import LogoDoble from "../assets/logo/InvenietLogoDobleColor.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [vh, setVh] = useState(0); // Estado para almacenar el valor de vh

  useEffect(() => {
    const setViewportHeight = () => {
      // Calcula la altura real del viewport
      const newVh =
        window.innerHeight - 86 - 120 - 0.1 * (window.innerHeight - 86 - 120);
      // Establece la variable CSS

      // Guarda el valor en el estado
      setVh(newVh);
    };

    // Configura el tamaño al cargar la página
    setViewportHeight();

    // Ajusta el tamaño al cambiar el tamaño de la ventana
    window.addEventListener("resize", setViewportHeight);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", setViewportHeight);
    };
  }, []);

  // Ahora puedes usar el valor de vh en cualquier parte del componente
  console.log(vh); // Imprime el valor de vh en la consola

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorLogo, setColorLogo] = useState("black");

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      // Toggle the logo color based on the new state of isMobileMenuOpen
      const newMenuState = !prev;
      setColorLogo(newMenuState ? "white" : "black");
      return newMenuState;
    });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="lg:flex lg:flex-row lg:h-24 justify-between max-width items-center hidden center">
        <div className="logo">
          <Link to={"/"}>
            <ReactSVG src={Logo} />
          </Link>
        </div>
        <ul className="lg:flex lg:flex-row items-center">
          <li className="py-2 px-4 myPBold ">
            <Link to={"/nosotros"}>Nosotros</Link>
          </li>
          <li className="py-2 px-4 myPBold ">
            <Link to={"/equipamiento"}>Equipamiento</Link>
          </li>
          <li className="py-2 px-4 myPBold ">
            <Link to={"/faq"}>Preguntas frecuentes</Link>
          </li>
          <li className="lg:h-[50px] lg:w-[125px] flex justify-center items-center bg-iBlue rounded-lg ml-[18px]">
            {/* <a href="/#contact" > */}
            <Link to={"/contacto"} className="contact-button myCTA text-white">
              Contacto
            </Link>
            {/* </a> */}
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`flex justify-between items-center h-20 px-6 lg:hidden ${
          isMobileMenuOpen ? "nav-open" : ""
        }`}
      >
        <div className="logo">
          <Link to={"/"}>
            <ReactSVG
              src={LogoDoble}
              beforeInjection={(svg) => {
                svg.setAttribute("style", `fill: ${colorLogo};`);
              }}
              className="logo"
            />
          </Link>
        </div>
        <button
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <ul className="absolute h-[100vh] top-20 left-0 w-full bg-iDBlue shadow-md flex flex-col items-start space-y-2 transition-all duration-300 pt-7">
              <li className="py-2 pl-6 myH2 text-white">
                <Link to={"/contacto"} onClick={toggleMobileMenu}>
                  Contacto
                </Link>
              </li>
              <li className="py-2 pl-6 myH2 text-white">
                <Link to={"/nosotros"} onClick={toggleMobileMenu}>
                  Nosotros
                </Link>
              </li>
              <li className="py-2 pl-6 myH2 text-white">
                <Link to={"/equipamiento"} onClick={toggleMobileMenu}>
                  Equipamiento
                </Link>
              </li>
              <li className="py-2 pl-6 myH2 text-white">
                <Link to={"/faq"} onClick={toggleMobileMenu}>
                  Preguntas frecuentes
                </Link>
              </li>
              <div className="absolute" style={{ top: `${vh}px` }}>
                <li className="pl-6 text-[#8D9098]">
                  11 de septiembre 4717, 4° Piso, CABA, Buenos Aires, Argentina
                </li>
                <li className="pl-6 text-[#8D9098]">
                  Lunes - Viernes: 8 am - 6 pm
                </li>
                <li className="pl-6 text-[#8D9098]">contacto@inveniet.com</li>
                <li className="pl-6 text-[#8D9098]">(+52) 5555 147914</li>
              </div>
            </ul>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
