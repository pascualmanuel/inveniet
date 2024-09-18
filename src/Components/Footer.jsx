import React from "react";
import { ReactSVG } from "react-svg";
import Logo from "../assets/logo/InvenietLogoBlack.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="lines-bg h-[80px] lg:h-[153px] "></div>
      <div className="bg-iGrey  w-[100vw]">
        <div className="center max-width ]">
          <div className="pt-10 lg:pt-20 pb-7 mb-7 border-b border-iGrey3 lg:flex lg:flex-row lg:justify-between">
            <div className="lg:w-1/2">
              <ReactSVG className="mb-6" src={Logo} />
              <p className="mb-8">
                Somos la solución integrada para la grabación y gestión
                audiovisual de procesos orales judiciales, diseñada para
                simplificar y asegurar el manejo de información legal.
              </p>
            </div>
            <div>
              <Link to={"/contacto"}>
                <li className="myPBold">Contacto</li>
              </Link>
              <Link to={"/faq"}>
                <li className="myPBold my-1.5">Preguntas frecuentes</li>
              </Link>
              <Link to={"/equipamiento"}>
                <li className="myPBold">Equipamiento</li>
              </Link>
              <Link to={"/nosotros"}>
                <li className="myPBold mt-1.5 mb-8">Nosotros</li>
              </Link>
            </div>
            <div className="w-[210px]">
              <li className="myP2">
                11 de septiembre 4717, 4° Piso, CABA, Buenos Aires, Argentina
              </li>
              <li className=" myP2 my-1.5 lg:my-4">
                Lunes - Viernes: 8 am - 6 pm
              </li>
              <li className=" myP2">
                <a href="mailto:contacto@inveniet.info">
                  contacto@inveniet.info
                </a>
              </li>
              <li className=" myP2 mt-1.5 lg:mt-4">
                <a href="tel:+5491152523301">(+54 11) 5252-3301</a>
              </li>
            </div>
          </div>
          <p className="myP3 pb-10 text-center">
            © 2000 - 2024 Inveniet. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
