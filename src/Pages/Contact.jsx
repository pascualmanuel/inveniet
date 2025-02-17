import React from "react";
import ContactForm from "../Components/ContactForm";
import { useEffect, useState } from "react";

const Contacto = () => {
  useEffect(() => {
    document.title = "Inveniet - Contacto";
  }, []);
  return (
    <>
      <div className="flex justify-center mt-12 px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-center max-w-[1248px] w-full xl:justify-between gap-6">
          <div className="flex justify-center">
            <div className="left-contact h-[356px]  md:h-[400px] lg:h-[560px] lg:w-[390px] xl:w-[430px] w-full bg-iDBlue rounded-lg flex flex-col justify-center px-[40px]">
              <h3 className="myH2 text-white mb-8 md:mb-12">Contactanos</h3>
              <li className="subH text-white">
                11 de septiembre 4717, 4° Piso, CABA, Buenos Aires, Argentina
              </li>
              <li className="subH text-white my-4">
                Lunes - Viernes: 8 am - 6 pm
              </li>
              <li className="subH text-white">
                <a href="mailto:contacto@inveniet.info">
                  contacto@inveniet.info
                </a>
              </li>
              <li className=" subH text-white mt-4">
                <a href="tel:+5491152523301">(+54 11) 5252-3301</a>
              </li>
            </div>
          </div>
          <div className="lg:max-w-[600px] xl:max-w-[750px] w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
