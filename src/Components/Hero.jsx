import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Fondo from "../assets/hero-img.png";
import Lines from "../assets/icons/bg-lines-2.svg";
import MailIcon from "../assets/icons/mail-icon.svg";
import DemoIcon from "../assets/icons/demo-icon.svg";
const Hero = () => {
  return (
    <>
      <div className=" max-w-[1360px] med:flex med:flex-row med:items-center med:justify-between my-0 mx-auto py-0 px-6 lg:pt-[70px]">
        <div className="flex flex-col  mb-[25px] lg:w-[52%] z-10">
          <h1 className="myH1 mb-[16px] mt-[30px] reveal-text">
            <span>Tecnología para modernizar la justicia</span>
          </h1>
          <p className="subH mb-[40px] lg:w-[500px] reveal-text">
            <span>
              Inveniet es una solución para la planificación, grabación
              audiovisual, y gestión de procesos judiciales orales.
            </span>
          </p>

          <div className="flex flex-col  ssm:flex-row items-start">
            <Link
              to={"/demo"}
              className="reveal-text button-effect w-full sm:w-auto group"
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
              className="reveal-text button-effect w-full sm:w-auto group"
            >
              <span>
                <div className="myCTA ssm:h-[50px] ssm:w-[159px] h-[47px] max-w-[450px] flex justify-center items-center bg-white rounded-lg mt-4 ssm:mt-0 ssm:ml-[8px] border border-iGrey2 relative overflow-hidden">
                  {/* Sección de "Contacto" */}
                  <div className="flex items-center transition-transform duration-300 ease-in-out transform sm:group-hover:-translate-y-16 contact-icon-cont">
                    <ReactSVG src={MailIcon} />
                    <span className="ml-[12px]">Contacto</span>
                  </div>

                  {/* Sección de "Gracias!" */}
                  <div className="absolute flex transition-transform duration-300 ease-in-out transform sm:group-hover:translate-y-[-44px] thx-icon-cont opacity-1 sm:group-hover:opacity-100 bottom-[-30px] items-center">
                    <ReactSVG src={MailIcon} />
                    <span className="ml-[12px]">Contacto</span>
                  </div>
                </div>
              </span>
            </Link>
          </div>
        </div>

        <div className=" mb-[30px] reveal-text  md:w-[100vw] md:flex md:justify-center lg:w-[43%] ">
          <span>
            <img
              src={Fondo}
              className="md:w-[430px] center  lg:m-0  lg:max-w-[570px] lg:w-[100%] lg:p-0 "
            />
          </span>
        </div>
        {/* <div className="hero-img-bg mb-[30px] lg:bg-center lg:m-0 lg:w-[43%] lg:max-w-none"></div> */}
      </div>

      {/* <div className="lines-bg h-[80px] lg:h-[153px]  z-[-2] lg:mt-[-70px] "></div> */}
      <div className="reveal-text overflow-visible  flex flex-row z-[-5] ">
        <bg className="flex flex-row">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                src={Lines}
                className="max-w-none lg:max-w-max z-[-100] lg:mt-[-80px] "
              />
            ))}
        </bg>
      </div>
    </>
  );
};

export default Hero;
