import React from "react";
import { ReactSVG } from "react-svg";
import Beepannel from "../assets/icons/beepanel.svg";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <>
      <div className="bg-iDBlue  w-[100vw]">
        <div className="center max-w-[570px] lg:max-w-[1360px] lg:flex lg:items-center">
          <div className="pt-[40px] pb-8">
            <h2 className="text-white myH2 mb-2">
              El futuro de los procesos judiciales orales
            </h2>
            <p className="subH text-iGrey3 pb-[16px] lg:w-[85%]">
              Inveniet ofrece tecnología orientada a los diferentes procesos
              judiciales.
            </p>
            <div className=" h-[50px] w-[192px] flex justify-center items-center bg-[#f4f7fa1a] rounded-lg">
              <Link
                to={"/nosotros"}
                className="contact-button myCTA text-white flex flex-row items-center"
              >
                <span className="mr-[10px] text-white">Sobre nosotros</span>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.93335 2.36621L14 7.99954L7.93335 13.6329"
                    stroke="#F4F7FA"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M1 7.76708H13.1333"
                    stroke="#F4F7FA"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="bevel"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div
            className="pb-[43px] lg:pb-[100px] lg:pt-[100px] "
            style={{
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <ReactSVG
              src={Beepannel}
              beforeInjection={(svg) => {
                svg.setAttribute(
                  "style",
                  "width: 100%; max-width: 500px; height: auto;"
                );
              }}
              className="wrapper-class-name"
              fallback={() => <span>Error loading SVG!</span>}
              loading={() => <span>Loading...</span>}
              onClick={() => console.log("SVG clicked")}
              onError={(error) => console.error("Error loading SVG:", error)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
