import React from "react";
import { ReactSVG } from "react-svg";
import Logo from "../assets/logo/InvenietLogoBlack.svg";
const Footer = () => {
  return (
    <>
      <div className="bg-iGrey  w-[100vw] ">
        <div className="center max-w-[570px]">
          <ReactSVG src={Logo} />
          <p>
            Somos la solución integrada para la grabación y gestión audiovisual
            de procesos orales judiciales, diseñada para simplificar y asegurar
            el manejo de información legal.
          </p>
          <li>Contacto</li>
          <li>Preguntas frecuentes</li>
          <li>Equipamiento</li>
          <li>Nosotros</li>

          <li className="pl-6 text-[#8D9098]">
            11 de septiembre 4717, 4° Piso, CABA, Buenos Aires, Argentina
          </li>
          <li className="pl-6 text-[#8D9098]">Lunes - Viernes: 8 am - 6 pm</li>
          <li className="pl-6 text-[#8D9098]">contacto@inveniet.com</li>
          <li className="pl-6 text-[#8D9098]">(+52) 5555 147914</li>
        </div>
      </div>
    </>
  );
};

export default Footer;
