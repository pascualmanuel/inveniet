import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import CheckIcon from "../assets/icons/Check.svg";
import "swiper/css"; // Core Swiper styles
import { ReactSVG } from "react-svg";
import "swiper/css/pagination";
const data = [
  {
    title: "Fácil de usar",
    text: "No se requiere soporte técnico para operar la plataforma; es intuitiva y accesible para todos.",
  },
  {
    title: "Gestión eficiente",
    text: "Búsqueda ágil de registros, y generación de actas y copias al finalizar las audiencias.",
  },
  {
    title: "Búsqueda ágil",
    text: "Encontrá rápidamente archivos y registros audiovisuales con un motor de búsqueda flexible.",
  },
  {
    title: "Acceso seguro",
    text: "Control de acceso personalizado por usuario, con auditoría de todas las acciones realizadas.",
  },
  {
    title: "Integración avanzada",
    text: "Compatible con otros sistemas y equipo de audio/video, incluídos sistemas de videoconferencia.",
  },
  {
    title: "Disponibilidad 24/7",
    text: "Acceso desde cualquier lugar con conexión a LAN, WAN o internet.",
  },
  {
    title: "Seguridad y respaldo",
    text: "Recuperación de registros en caso de fallas, asegurando que ningún dato se pierda.",
  },
  {
    title: "Adaptabilidad",
    text: "Flexibilidad de implementación a cualquier infraestructura de red, centralizada o descentralizada.",
  },
  {
    title: "Regulación de calidad",
    text: "Ajustá la calidad de grabación y generá archivos del tamaño y peso acorde a tu infraestructura.",
  },
  {
    title: "Exportación de archivos",
    text: "Fácil exportación de actas y archivos de video para las partes intervinientes.",
  },
  {
    title: "Planificación de audiencias",
    text: "Herramientas integradas para planificar y gestionar audiencias de manera eficiente.",
  },
  {
    title: "Identificación de eventos",
    text: "Permite el registro y navegación por diferentes eventos registrados dentro de la grabación.",
  },
];

function Carousel() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Function to update the state based on window width
  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      {!isDesktop && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={8} // Margin between boxes
          slidesPerView="auto" // Allows the display of partial boxes
          centeredSlides={false} // Aligns the first box to the left
          pagination={{ clickable: true }}
          // autoplay={true}
          // loop={true}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="carousel-box ">
              <div className="flex flex-row items-center mb-[16px] ">
                <ReactSVG src={CheckIcon} />
                <h3 className="myCTA  ml-2">{item.title}</h3>
              </div>
              <p className="myP">{item.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {isDesktop && (
        <>
          <div className="flex flex-row flex-wrap justify-center gap-[30px] center max-w-[1400px]">
            {data.map((item, index) => (
              <div key={index} className="carousel-box flex">
                <div className="flex flex-row items-center mb-[16px] ">
                  <ReactSVG src={CheckIcon} />
                  <h3 className="myCTA  ml-2">{item.title}</h3>
                </div>
                <p className="myP">{item.text}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Carousel;
