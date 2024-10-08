import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BarAnimation = () => {
  const [barsCount, setBarsCount] = useState(0);
  const [delays, setDelays] = useState([]);
  const [isMobile, setIsMobile] = useState(false); // Para detectar si es mobile

  useEffect(() => {
    const updateBarsCount = () => {
      const totalWidth = window.innerWidth; // Ancho total de la ventana

      // Ajustes según el tamaño de pantalla
      const barWidth = isMobile ? 2 : 3; // Ancho de barra: 2px en mobile, 3px en desktop
      const marginWidth = isMobile ? 9 : 16; // Espacio entre barras: 6.5px en mobile, 16px en desktop

      // Calcular la cantidad de barras que pueden caber
      const count = Math.floor(
        (totalWidth + marginWidth) / (barWidth + marginWidth)
      );
      setBarsCount(count);

      // Generar un arreglo de retrasos aleatorios para cada barra
      const randomDelays = Array.from(
        { length: count },
        () => Math.random() * 2
      );
      setDelays(randomDelays);
    };

    const handleResize = () => {
      const currentWidth = window.innerWidth;

      // Detectar si es mobile
      setIsMobile(currentWidth < 768); // Consideramos "mobile" si el ancho es menor a 768px

      // Si solo cambia la altura, no hacemos nada
      if (currentWidth === window.previousWidth) return;

      // Guardamos el nuevo ancho para compararlo la próxima vez
      window.previousWidth = currentWidth;
      updateBarsCount();
    };

    window.previousWidth = window.innerWidth; // Inicializamos con el ancho actual
    setIsMobile(window.innerWidth < 768); // Comprobamos al cargar si es mobile
    window.addEventListener("resize", handleResize);

    // Llamamos la función inicial para configurar las barras al cargar
    updateBarsCount();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: "200px",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        zIndex: "-1",
        userSelect: "none",
      }}
    >
      {Array.from({ length: barsCount }).map((_, index) => {
        const initialHeight = Math.random() * 150 + 50; // Altura aleatoria inicial
        console.log(initialHeight);

        return (
          <motion.div
            key={index}
            style={{
              width: "4px", // strokeWidth
              backgroundColor: "#F4F7FA", // color de la barra
              height: initialHeight, // altura inicial aleatoria
              borderRadius: "8px", // borderRadius para las barras
              zIndex: "-1",
              overflow: "hidden",
            }}
            animate={{
              height: [initialHeight, Math.random() * 150 + 50, initialHeight], // Animar la altura de la barra
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delays[index] || 0, // Retraso para cada barra basado en el arreglo de delays
            }}
          />
        );
      })}
    </div>
  );
};

export default BarAnimation;
