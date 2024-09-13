import React from "react";
import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Client4 from "../assets/clientes/catamarca.png";
import Client6 from "../assets/clientes/corrientes.png";
import Client3 from "../assets/clientes/formosa.png";
import Client5 from "../assets/clientes/mendoza.png";
import Client2 from "../assets/clientes/rio_negro.png";
import Client1 from "../assets/clientes/santa_fe.png";
const logos = [
  { src: Client1, width: 109, height: 40, deskWidth: 171, deskHeight: 64 },
  { src: Client2, width: 59, height: 43, deskWidth: 113, deskHeight: 90 },
  { src: Client3, width: 96, height: 24, deskWidth: 206, deskHeight: 52 },
  { src: Client4, width: 92, height: 28, deskWidth: 191, deskHeight: 60 },
  { src: Client6, width: 38, height: 32, deskWidth: 76, deskHeight: 62 },
  { src: Client5, width: 110, height: 28, deskWidth: 196, deskHeight: 50 },
];

const WhyUs = () => {
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
      <div className="pb-[125px] lines-bg">
        <div className="flex justify-center pt-10 pb-[32px]">
          <h2 className="myH2">¿Por qué Inveniet?</h2>
        </div>
        <Carousel />
        <div className="flex justify-center pt-[80px] pb-[60px] lg:pt-[170px]">
          <h2 className="myH2 text-center">
            Algunas de nuestras implementaciones
          </h2>
        </div>
        <div className="flex justify-center lg:mb-[70px]">
          <div className="logo-section">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo?.src}
                alt={`Logo ${index + 1}`}
                // loading="lazy"
                style={{
                  width: isDesktop ? logo.deskWidth : logo.width,
                  height: isDesktop ? logo.deskHeight : logo.height,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
