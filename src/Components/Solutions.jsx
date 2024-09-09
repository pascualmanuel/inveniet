import React from "react";
import Icon1 from "../assets/icons/icon-1.svg";
import Icon2 from "../assets/icons/icon-2.svg";
import Icon3 from "../assets/icons/icon-3.svg";
import Icon4 from "../assets/icons/icon-4.svg";
import { ReactSVG } from "react-svg";
const Solutions = () => {
  const data = [
    {
      icon: Icon4,
      title: "Planificación y programación de audiencias",
      text: "Elegí la locación, fecha y hora, participantes, y toda la información  relacionada a la audiencia para aprovechar al máximo la disponibilidad de las salas.",
    },
    {
      icon: Icon1,
      title: "Sistema de grabación de audio y video",
      text: "Grabá y almacená contenido audiovisual e identificá eventos dentro de las grabaciones para facilitar la reprodución.",
    },
    {
      icon: Icon3,
      title: "Catalogación y consulta web de audiencias registradas",
      text: "Accedé a todo el material registrado a través de diferentes parámetros de búsqueda en una base de datos y consulta estadísticas.",
    },
    {
      icon: Icon2,
      title: "Generación de actas y copias para exportar",
      text: "Generá y compartí actas firmadas digitalmente y copias para los intervinientes.",
    },
  ];
  return (
    <>
      <div className="bg-iGray  w-[100vw]">
        <div className="center max-w-[570px] ">
          <div className="pt-[40px] pb-[25px]">
            <h2>SOLUCIONES</h2>
            <p>Brindamos soporte a las disintas etapas del proceso oral</p>
          </div>
          <div>
            <div className="box-grid pb-[40px]">
              {data.map((item, index) => (
                <div className="box" key={index}>
                  <ReactSVG className="icon" src={item?.icon} />
                  <h3>{item?.title}</h3>
                  <p>{item?.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
