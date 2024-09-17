import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className=" center max-width lg:flex lg:flex-row lg:items-center lg:justify-between lg:">
        <div className="flex flex-col  mb-[25px] lg:w-[52%]">
          <h1 className="myH1 mb-[16px] mt-[30px]">
            Tecnología para modernizar la justicia
          </h1>
          <p className="subH mb-[40px] lg:w-[500px]">
            Inveniet es una solución para la planificación, grabación
            audiovisual, y gestión de procesos judiciales orales.
          </p>
          <div className="flex flex-row items-start">
            <Link to={"/demo"}>
              <div className=" h-[50px] w-[165px] myCTA text-white flex justify-center items-center bg-iBlue rounded-lg">
                Solicitar demo
              </div>
            </Link>

            <Link to={"/contact"}>
              <div className=" myCTA h-[50px] w-[125px] flex justify-center items-center bg-white rounded-lg ml-[8px] border border-iBlue ">
                Contacto
              </div>
            </Link>
          </div>
        </div>
        <div className="hero-img-bg mb-[30px]  lg:bg-center lg:m-0 lg:w-[43%] lg:max-w-none"></div>
      </div>
    </>
  );
};

export default Hero;
