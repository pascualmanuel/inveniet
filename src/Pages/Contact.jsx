import React from "react";
import ContactForm from "../Components/ContactForm";

const Contacto = () => {
  return (
    <>
      <div className="flex justify-center mt-12">
        <div className="flex   max-w-[1248px] w-screen  md:justify-around  xl:justify-between ">
          <div>
            <div className="left-contact h-[560px] md:w-[340px] lg:w-[390px] xl:w-[430px] bg-iDBlue rounded-lg flex flex-col justify-center px-[40px]">
              <h3 className="myH2 text-white mb-12">Contactanos</h3>
              <li className="subH text-white">
                11 de septiembre 4717, 4° Piso, CABA, Buenos Aires, Argentina
              </li>
              <li className="subH text-white my-1.5 lg:my-4">
                Lunes - Viernes: 8 am - 6 pm
              </li>
              <li className="subH text-white">
                <a href="mailto:contacto@inveniet.info">
                  contacto@inveniet.info
                </a>
              </li>
              <li className=" subH text-white mt-1.5 lg:mt-4">
                <a href="tel:+5491152523301">(+54 11) 5252-3301</a>
              </li>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
