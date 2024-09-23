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
          <div className="pt-10 lg:pt-20 pb-7 mb-7 border-b border-iGrey3 md:border-none md:flex md:flex-row md:justify-between">
            <div className="lg:w-1/2">
              <Link to={"/"}>
                <ReactSVG className="mb-6" src={Logo} />
              </Link>
              <p className="mb-8 myP2 w-[265px]">
                Solución para la grabación y gestión audiovisual de procesos
                orales judiciales.
              </p>

              <div className="flex flex-row items-start">
                <Link to={"/demo"} className="">
                  <span>
                    <div className=" text-iGrey  h-[50px] w-[165px] myCTA  flex justify-center items-center bg-iBlue rounded-lg ">
                      Solicitar demo
                    </div>
                  </span>
                </Link>

                <Link to={"/contacto"} className="">
                  <span>
                    <div className="myCTA h-[50px] w-[125px] flex justify-center items-center rounded-lg ml-[8px] text-[]  ">
                      Contacto
                    </div>
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-16 md:mt-0">
              <Link to={"/contacto"}>
                <li className="myPBold text-iGrey3">Contacto</li>
              </Link>
              <Link to={"/faq"}>
                <li className="myPBold text-iGrey3 my-2">
                  Preguntas frecuentes
                </li>
              </Link>
              <Link to={"/equipamiento"}>
                <li className="myPBold text-iGrey3">Equipamiento</li>
              </Link>
              <Link to={"/nosotros"}>
                <li className="myPBold text-iGrey3 mt-2 mb-8">Nosotros</li>
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
          <p className="myP3 pb-10 text-center text-iGrey3">
            © 2000 - 2024 Inveniet. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
