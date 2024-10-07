import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Fondo from "../assets/hero-img.png";
import Lines from "../assets/icons/bg-lines-2.svg";
import MailIcon from "../assets/icons/mail-icon.svg";
import DemoIcon from "../assets/icons/demo-icon.svg";
import EcgAnimation from "./EcgAnimation";
import { useEffect } from "react";
const Hero = () => {
  return (
    <>
      <div className="h-[80vh] z-[100]">
        <div className="max-width med:flex med:flex-row med:items-center med:justify-between my-0 mx-auto py-0 px-6 lg:pt-[70px]">
          <div className="flex flex-col mb-[25px] lg:w-[52%] z-10">
            <h1 className="myH1 mb-[16px] mt-[30px] reveal-text h1-reveal ">
              <span>Tecnología para modernizar la justicia</span>
            </h1>
            <p className="subH mb-[40px] lg:w-[500px] reveal-text p-reveal ">
              <span>
                Inveniet es una solución para la planificación, grabación
                audiovisual, y gestión de procesos judiciales orales.
              </span>
            </p>

            <div className="flex flex-col ssm:flex-row items-start">
              <Link
                to={"/demo"}
                className="reveal-text button-effect w-full sm:w-auto group link-reveal"
              >
                <span>
                  <div className="ssm:h-[50px] ssm:w-[199px] h-[47px] max-w-[450px] myCTA text-white flex justify-center items-center bg-iBlue rounded-lg overflow-hidden relative">
                    <div className="flex items-center transition-transform duration-300 ease-in-out transform sm:group-hover:-translate-y-16 demo-icon-cont">
                      <ReactSVG src={DemoIcon} />
                      <span className="ml-[12px]">Solicitar demo</span>
                    </div>
                    <div className="absolute flex transition-transform duration-300 ease-in-out transform sm:group-hover:translate-y-[-44px] thx-icon-cont opacity-1 sm:group-hover:opacity-100 bottom-[-30px] items-center">
                      <ReactSVG src={DemoIcon} />
                      <span className="ml-[12px]">Solicitar demo</span>
                    </div>
                  </div>
                </span>
              </Link>

              <Link
                to={"/contacto"}
                className="reveal-text button-effect w-full sm:w-auto group link-reveal"
              >
                <span>
                  <div className="myCTA ssm:h-[50px] ssm:w-[159px] h-[47px] max-w-[450px] flex justify-center items-center bg-white rounded-lg mt-4 ssm:mt-0 ssm:ml-[8px] border border-iGrey2 relative overflow-hidden">
                    <div className="flex items-center transition-transform duration-300 ease-in-out transform sm:group-hover:-translate-y-16 contact-icon-cont">
                      <ReactSVG src={MailIcon} />
                      <span className="ml-[12px]">Contacto</span>
                    </div>
                    <div className="absolute flex transition-transform duration-300 ease-in-out transform sm:group-hover:translate-y-[-44px] thx-icon-cont opacity-1 sm:group-hover:opacity-100 bottom-[-30px] items-center">
                      <ReactSVG src={MailIcon} />
                      <span className="ml-[12px]">Contacto</span>
                    </div>
                  </div>
                </span>
              </Link>
            </div>
          </div>

          <div className="mb-[30px] reveal-text image-reveal md:w-[100vw] flex md:justify-center lg:w-[43%]">
            <span>
              <img
                src={Fondo}
                className="md:w-[430px] center lg:m-0 lg:max-w-[570px] lg:w-[100%] lg:p-0"
              />
            </span>
          </div>
        </div>
      </div>

      <div className="reveal-text lines-reveal  block mt-[-140px] z-[-10]">
        <span className="">
          <EcgAnimation />
        </span>
      </div>
    </>
  );
};

export default Hero;
