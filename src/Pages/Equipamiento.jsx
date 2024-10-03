import React from "react";
import { Link } from "react-router-dom";
import Eq1 from "../assets/eq-1.png";
import Eq2 from "../assets/eq-2.png";
import Eq3 from "../assets/eq-3.png";
import Eq33 from "../assets/eq-3-mob.png";
import Eq4 from "../assets/equipment-fiscalia.jpg";
import Eq5 from "../assets/sa.png";
import Eq6 from "../assets/cg.png";

const Equipamiento = () => {
  let isNotDesktop = window.innerWidth < 1024;
  let Img3 = Eq3;

  if (isNotDesktop) {
    Img3 = Eq33;
  }

  return (
    <>
      <div className="w-screen h-[250px] equipment-bg lg:h-[350px] z-[-1] flex items-center">
        <div className="center max-w-[1360px] w-[100vw] ">
          <p className="myH1 text-white pt-12 lg:pt-24">Equipamiento</p>
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:mt-20 max-width center">
        <div className="lg:w-[45%]">
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
        <div className="lg:w-[45%]">
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
        <div className="lg:w-[45%]">
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
            src={Img3}
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
      {/* <div className="bg-iGrey mt-24 md:mt-56 py-16">
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
      </div> */}
      {/*  */}
      <div className="mx-[25px] my-[120px] md:my-[160px]">
        <div className="bg-fiscalia center">
          <div className=" md:w-[492px] text-white md:ml-[60px]">
            <h2 className="myH2">Servicio de instalación</h2>
            <p className="myP">
              Implementamos y configuramos todo el equipamiento necesario para
              que tu sistema Inveniet esté listo para funcionar y estamos
              disponibles para resolver cualquier duda o inconveniente,
              garantizando un funcionamiento óptimo y continuo.
            </p>
          </div>
        </div>
      </div>

      <h2 className="myH1 text-center mb-[30px] md:mb-auto">
        Diagramas de instalación técnica
      </h2>
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:my-20 max-width center flex flex-col-reverse">
        <div className="flex justify-center lg:w-[40%]">
          <img src={Eq5} className=" max-w-full hidden lg:block" alt="image" />
        </div>
        <div className="lg:w-[50%]">
          <p className="mt-8 h-[42px] w-[256px] subH flex justify-center items-center bg-iGrey rounded-lg">
            Diagrama de instalación
          </p>
          <h3 className="myH2 my-4">Sala de audiencias</h3>
          <img
            src={Eq5}
            className=" max-w-full block lg:hidden md:max-w-[70%] md:my-0 md:mx-auto"
            alt="image"
          />
          <p className=" my-4">
            Este diagrama muestra nuestra solución integrada de audio y video
            para salas de audiencias. Con un procesador digital central,
            micrófonos, cámaras y conexiones IP, gestionamos de forma eficiente
            la captura, mezcla y almacenamiento de todos los registros
            audiovisuales. Nuestro equipo se encarga de la instalación completa,
            asegurando una experiencia fluida y profesional.
          </p>
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
        </div>
      </div>

      <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:my-20 max-width center flex flex-col-reverse ">
        <div className="flex justify-center lg:w-[40%] mb-[50px]">
          <img
            src={Eq6}
            className=" max-w-full  hidden lg:block "
            alt="image"
          />
        </div>
        <div className="lg:w-[50%]">
          <p className="mt-8 h-[42px] w-[256px] subH flex justify-center items-center bg-iGrey rounded-lg">
            Diagrama de instalación
          </p>
          <h3 className="myH2 my-4">Cámara Gesell</h3>
          <img
            src={Eq6}
            className=" max-w-full block lg:hidden md:max-w-[70%] md:my-0 md:mx-auto"
            alt="image"
          />
          <p className=" my-4">
            Este diagrama ilustra nuestra solución audiovisual integrada para
            Cámaras Gesell. El sistema permite la captura y gestión eficiente de
            audio y video mediante micrófonos ambientales, cámaras domo y un
            procesador digital central. Todo se conecta a través de una red IP,
            con almacenamiento en DVR y monitoreo en tiempo real desde la sala
            de control. Nuestro equipo se encarga de la instalación completa
            para asegurar un funcionamiento impecable.
          </p>
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
        </div>
      </div>
    </>
  );
};

export default Equipamiento;
