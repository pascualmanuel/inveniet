import React from "react";
import Carousel from "./Carousel";

const WhyUs = () => {
  return (
    <>
      <div className="pb-[190px]">
        <div className="flex justify-center pt-10 pb-[32px]">
          <h2 className="myH2">¿Por qué Inveniet?</h2>
        </div>
        <Carousel />
        <div className="flex justify-center pt-[80px] pb-[60px]">
          <h2 className="myH2 text-center">
            Algunas de nuestras implementaciones
          </h2>
        </div>
        <div className="flex justify-center">Logos Logos logos logos</div>
      </div>
    </>
  );
};

export default WhyUs;
