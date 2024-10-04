import React from "react";
import { ReactSVG } from "react-svg";
import Logo from "../assets/logo/InvenietLogoBlack.svg";
import { Link } from "react-router-dom";
import EcgAnimation from "./EcgAnimation";
const Footer = () => {
  return (
    <>
      {/* <div className="lines-bg  "></div> */}
      <div className="reveal-text lines-reveal hidden md:block mt-[20px] ">
        <span className="">
          <EcgAnimation />
        </span>
      </div>
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
                <Link to={"/demo"} className="group">
                  <span>
                    <div className="text-iGrey h-[50px] w-[165px] myCTA flex justify-center items-center bg-iBlue rounded-lg relative overflow-hidden">
                      <div className="flex items-center transition-transform duration-300 ease-in-out transform sm:group-hover:-translate-y-16">
                        <span className="">Solicitar demo</span>
                      </div>

                      <div className="absolute flex items-center transition-transform duration-300 ease-in-out transform sm:group-hover:translate-y-[-44px]  bottom-[-30px]">
                        <span className="">Solicitar demo</span>
                      </div>
                    </div>
                  </span>
                </Link>

                <Link to={"/demo"} className="group">
                  <span>
                    <div className="text-iDBlue h-[50px] w-[125px] myCTA flex justify-center items-center  rounded-lg relative overflow-hidden">
                      <div className="flex items-center transition-transform duration-300 ease-in-out transform sm:group-hover:-translate-y-16">
                        <span className="">Contacto</span>
                      </div>

                      <div className="absolute flex items-center transition-transform duration-300 ease-in-out transform sm:group-hover:translate-y-[-44px]  bottom-[-30px]">
                        <span className="">Contacto</span>
                      </div>
                    </div>
                  </span>
                </Link>

                {/* <Link to={"/contacto"} className="">
                  <span>
                    <div className="myCTA h-[50px] w-[125px] flex justify-center items-center rounded-lg ml-[8px] text-[]  ">
                      Contacto
                    </div>
                  </span>
                </Link> */}
              </div>
            </div>
            <div className="mt-16 md:mt-0">
              <Link to={"/contacto"}>
                <li className="myPBold   text-iGrey3">
                  <p className="myPBold links w-fit"> Contacto </p>
                </li>
              </Link>
              <Link to={"/faq"}>
                <li className="myPBold   text-iGrey3 my-2">
                  <p className="myPBold links w-fit"> Preguntas frecuentes</p>
                </li>
              </Link>
              <Link to={"/equipamiento"}>
                <li className="myPBold   text-iGrey3">
                  <p className="myPBold links w-fit"> Equipamiento</p>
                </li>
              </Link>
              <Link to={"/nosotros"}>
                <li className="myPBold   text-iGrey3 mt-2 mb-8">
                  <p className="myPBold links w-fit"> Nosotros</p>
                </li>
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
