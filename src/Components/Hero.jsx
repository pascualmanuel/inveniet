import React from "react";

const Hero = () => {
  return (
    <>
      <div className="max-w-[570px] center">
        <div className="flex flex-col  mb-[25px]">
          <h1 className="myH1 mb-[16px] mt-[30px]">
            Tecnología para modernizar la justicia
          </h1>
          <p className="subH mb-[40px]">
            Inveniet es una solución para la planificación, grabación
            audiovisual, y gestión de procesos judiciales orales.
          </p>
          <div className="flex flex-row items-start">
            <div className=" h-[50px] w-[165px] flex justify-center items-center bg-iBlue rounded-lg">
              <a href="/#contact" className="contact-button myCTA text-white">
                Solicitar demo
              </a>
            </div>
            <div className=" h-[50px] w-[125px] flex justify-center items-center bg-white rounded-lg ml-[8px] border border-iBlue ">
              <a href="/#contact" className="contact-button myCTA">
                Contacto
              </a>
            </div>
          </div>
        </div>
        <div className="hero-img-bg mb-[30px]"></div>
      </div>
    </>
  );
};

export default Hero;
