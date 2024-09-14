import React from "react";

const Equipamiento = () => {
  return (
    <>
      <div className="w-screen h-[250px] equipment-bg lg:h-[350px] relative z-[-1]">
        <p className="myH1 absolute text-white top-[130px]  lg:top-[190px] left-[25px] lg:left-[80px]">
          Equipamiento
        </p>
      </div>
      <div>
        <div>
          <p className="labels text-iLBlue">MICRÓFONOS CUELLO DE GANSO</p>
          <h3 className="myH2">Claridad y precisión en cada declaración</h3>
          <p className="subH">
            Nuestros micrófonos cuello de ganso capturan el sonido con una
            nitidez excepcional, asegurando que cada declaración sea registrada
            con la máxima claridad.
          </p>
        </div>
        <div>
          <img />
        </div>
      </div>
    </>
  );
};

export default Equipamiento;
