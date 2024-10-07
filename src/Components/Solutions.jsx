import React from "react";
import Icon1 from "../assets/icons/icon-1.svg";
import Icon2 from "../assets/icons/icon-2.svg";
import Icon3 from "../assets/icons/icon-3.svg";
import Icon4 from "../assets/icons/icon-4.svg";
import { ReactSVG } from "react-svg";
import { useEffect, useRef, useState } from "react";

const Solutions = () => {
  const data = [
    {
      icon: Icon1,
      title: "Planificación y programación de audiencias",
      text: "Elegí la locación, fecha y hora, participantes, y toda la información  relacionada a la audiencia para aprovechar al máximo la disponibilidad de las salas.",
    },
    {
      icon: Icon2,
      title: "Sistema de grabación de audio y video",
      text: "Grabá y almacená contenido audiovisual e identificá eventos dentro de las grabaciones para facilitar la reprodución.",
    },
    {
      icon: Icon3,
      title: "Catalogación y consulta web de audiencias registradas",
      text: "Accedé a todo el material registrado a través de diferentes parámetros de búsqueda en una base de datos y consulta estadísticas.",
    },
    {
      icon: Icon4,
      title: "Generación de actas y copias para exportar",
      text: "Generá y compartí actas firmadas digitalmente y copias para los intervinientes.",
    },
  ];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showBoxes, setShowBoxes] = useState(false); // Nuevo estado

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("true");
          observer.disconnect(); // Deja de observar una vez que es visible

          // Después de mostrar el título y el párrafo, muestra las cajas
          setTimeout(() => {
            setShowBoxes(true);
          }, 300); // Ajusta el tiempo (en milisegundos) según sea necesario
        }
      },
      {
        threshold: 0.6, // Ajusta el umbral según sea necesario
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observa la sección
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Limpia el observador en la limpieza
      }
    };
  }, []);

  return (
    <div className="bg-iGrey w-[100vw]" ref={sectionRef}>
      <div className="center max-width">
        <div className="pt-[40px] pb-[25px] lg:pt-[100px] lg:pb-[40px]">
          <h2
            className={`labels text-iGrey3 ${
              isVisible ? "fade-in" : "opacity-0"
            }`}
          >
            SOLUCIONES
          </h2>
          <p
            className={`myH2 mt-4 md:w-[620px] ${
              isVisible ? "fade-in" : "opacity-0"
            }`}
          >
            Brindamos soporte a las distintas etapas del proceso oral
          </p>
        </div>
        <div>
          <div
            className={` ${
              showBoxes
                ? `box-grid pb-[40px] lg:pb-[100px] `
                : "box-grid pb-[40px] lg:pb-[200px]"
            }`}
          >
            {data.map((item, index) => (
              <div
                className={` ${
                  showBoxes ? `fade-in fade-in-box-${index + 1} ` : "opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 400}ms` }} // Retraso en milisegundos
              >
                <div className={` ${showBoxes ? `box` : ""}`} key={index}>
                  <ReactSVG className="icon" src={item?.icon} />
                  <h3 className="myCTA my-[16px]">{item?.title}</h3>
                  <p className="myP2 text-iGrey3">{item?.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
