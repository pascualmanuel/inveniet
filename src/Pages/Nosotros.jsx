import React from "react";
import { useEffect } from "react";

const Nosotros = () => {
  useEffect(() => {
    document.title = "Inveniet - Nosotros";
  }, []);
  return (
    <>
      <div className="w-screen h-[250px] nosotros-bg lg:h-[350px] z-[-1] flex items-center">
        <div className="center max-w-[1360px] w-[100vw] ">
          <p className="myH1 text-white  lg: pt-12 lg:pt-24">Nosotros</p>
        </div>
      </div>
      <div className="max-width center" style={{ marginBottom: "80px" }}>
        <div className="lg:max-w-[1077px]">
          <h3 className="myH2 mt-[40px] lg:mt-[115px] mb-[33px] max-w-[670px]">
            Nuestra misión es
            <span className="text-iLBlue">
              &nbsp; modernizar y agilizar los procesos judiciales
            </span>
          </h3>
          <p className="subH ">
            Inveniet nació de la necesidad de modernizar y optimizar la gestión
            de procesos orales judiciales en un mundo cada vez más digitalizado.
            Fundada por un equipo de expertos en tecnología y derecho, nuestra
            empresa se dedica a ofrecer soluciones innovadoras que faciliten la
            grabación, almacenamiento y gestión de registros audiovisuales en
            procedimientos legales. Desde nuestros inicios, desarrollamos
            Inveniet en colaboración directa con profesionales del sector
            judicial para crear una plataforma que no solo sea poderosa, sino
            también intuitiva y fácil de usar.
          </p>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
