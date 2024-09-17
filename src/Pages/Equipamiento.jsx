import React from "react";
import Eq1 from "../assets/eq-1.png";
import Eq2 from "../assets/eq-2.png";
import Eq3 from "../assets/eq-3.png";
import Eq4 from "../assets/equipment-fiscalia.jpg";

const Equipamiento = () => {
  return (
    <>
      <div className="w-screen h-[250px] equipment-bg lg:h-[350px] z-[-1] flex items-center">
        <div className="center max-width w-[100vw] ">
          <p className="myH1 text-white  lg: pt-12 lg:pt-24">Equipamiento</p>
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:mt-20 max-width center">
        <div className="lg:w-[50%]">
          <p className="labels text-iLBlue mt-8">MICRÓFONOS CUELLO DE GANSO</p>
          <h3 className="myH2 my-2">
            Claridad y precisión en cada declaración
          </h3>
          <p className="subH">
            Utilizamos micrófonos cuello de ganso de calidad profesional, para
            registrar cada declaración con máxima claridad
          </p>
        </div>
        <div className="flex justify-center lg:w-[30%]">
          <img
            src={Eq1}
            className="w-[440px] lg:w-[625px] max-w-none"
            alt="image"
          />
        </div>
      </div>

      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:my-20 max-width center flex flex-col-reverse">
        <div className="flex justify-center lg:w-[30%]">
          <img
            src={Eq2}
            className="w-[440px] lg:w-[625px] max-w-none"
            alt="image"
          />
        </div>
        <div className="lg:w-[50%]">
          <p className="labels text-iLBlue mt-8">PROCESADOR DIGITAL DE AUDIO</p>
          <h3 className="myH2 my-2">
            Gestioná todos los canales de audio con un solo dispositivo
          </h3>
          <p className="subH">
            Desarrollamos procesadores digitales de audio especificamente para
            este tipo de instalaciones, que permiten integrar y mezclar el audio
            reduciendo ruidos e interferencias
          </p>
        </div>
      </div>

      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between mt-20 max-width center my">
        <div className="lg:w-[50%]">
          <p className="labels text-iLBlue mt-8">CAMARAS IP</p>
          <h3 className="myH2 my-2">Alta definición de imagen</h3>
          <p className="subH">
            Nuestras cámaras IP capturan cada momento en altísima calidad, con
            grabación en formato MP4 para asegurar claridad visual en cada
            archivo.
          </p>
        </div>
        <div className="flex justify-center lg:w-[30%]">
          <img
            src={Eq3}
            className="w-[440px] lg:w-[625px] max-w-none"
            alt="image"
          />
        </div>
      </div>
      {/* <div className="bg-iGrey py-16">
        <div className="max-width mx-6 equ-fisc rounded-lg "></div>
        <div className="max-width center">
          <h3 className="myH2 my-4">Servicio de instalación</h3>
          <p className="myP subH">
            Implementamos y configuramos todo el equipamiento necesario para que
            tu sistema Inveniet esté listo para funcionar y estamos disponibles
            para resolver cualquier duda o inconveniente, garantizando un
            funcionamiento óptimo y continuo.
          </p>
        </div>
      </div> */}
      <div className="bg-iGrey mt-24 md:mt-56 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-width mx-6 center">
          <div className="equ-fisc w-full md:w-[30%] mr-4 md:mr-5 lg:mr-10 rounded-lg"></div>
          <div className="w-full md:w-[70%]">
            <h3 className="myH2 my-4">Servicio de instalación</h3>
            <p className="myP subH">
              Implementamos y configuramos todo el equipamiento necesario para
              que tu sistema Inveniet esté listo para funcionar y estamos
              disponibles para resolver cualquier duda o inconveniente,
              garantizando un funcionamiento óptimo y continuo.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:my-20 max-width center flex flex-col-reverse">
        <div className="flex justify-center lg:w-[30%]">
          <img
            src={Eq2}
            className="w-[440px] lg:w-[625px] max-w-none"
            alt="image"
          />
        </div>
        <div className="lg:w-[50%]">
          <p className="labels text-iLBlue mt-8">PROCESADOR DIGITAL DE AUDIO</p>
          <h3 className="myH2 my-2">
            Gestioná todos los canales de audio con un solo dispositivo
          </h3>
          <p className="subH">
            Desarrollamos procesadores digitales de audio especificamente para
            este tipo de instalaciones, que permiten integrar y mezclar el audio
            reduciendo ruidos e interferencias
          </p>
        </div>
      </div>
    </>
  );
};

export default Equipamiento;
