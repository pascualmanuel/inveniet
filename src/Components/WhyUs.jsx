import React from "react";
import Carousel from "./Carousel";

const WhyUs = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center pt-[100px] pb-[32px]">
          <h2>¿Por qué Inveniet?</h2>
        </div>
        <Carousel />
        <div className="flex justify-center pt-[130px] pb-[60px]">
          <h2> Algunas de nuestras implementaciones</h2>
        </div>
        <div className="flex justify-center">Logos Logos logos logos</div>
      </div>
    </>
  );
};

export default WhyUs;
