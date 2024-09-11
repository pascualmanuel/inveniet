import React from "react";
import { ReactSVG } from "react-svg";
import Logo from "../assets/logo/InvenietLogoBlack.svg";
const Footer = () => {
  return (
    <>
      <div className="bg-iGrey  w-[100vw] ">
        <div className="center max-w-[570px] ">
          <div className="py-10">
            <ReactSVG className="mb-6" src={Logo} />
            <p className="mb-8">
              Somos la solución integrada para la grabación y gestión
              audiovisual de procesos orales judiciales, diseñada para
              simplificar y asegurar el manejo de información legal.
            </p>
            <li className="myPBold">Contacto</li>
            <li className="myPBold my-1.5">Preguntas frecuentes</li>
            <li className="myPBold">Equipamiento</li>
            <li className="myPBold mt-1.5 mb-8">Nosotros</li>

            <li className=" myP2">
              11 de septiembre 4717, 4° Piso, CABA, Buenos Aires, Argentina
            </li>
            <li className=" myP2 my-1.5">Lunes - Viernes: 8 am - 6 pm</li>
            <li className=" myP2">contacto@inveniet.com</li>
            <li className=" myP2 mt-1.5">(+52) 5555 147914</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
