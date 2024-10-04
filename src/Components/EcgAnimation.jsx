// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const BarAnimation = () => {
//   const [barsCount, setBarsCount] = useState(0);
//   const barMargin = 16; // Margen entre las barras en px

//   useEffect(() => {
//     const updateBarsCount = () => {
//       const totalWidth = window.innerWidth; // Ancho total de la ventana
//       const barWidth = 3; // Ancho de cada barra (strokeWidth)
//       const marginWidth = barMargin; // Margen entre barras

//       // Calcular la cantidad de barras que pueden caber
//       const count = Math.floor(
//         (totalWidth + marginWidth) / (barWidth + marginWidth)
//       );
//       setBarsCount(count);
//     };

//     // Inicializar el conteo de barras
//     updateBarsCount();

//     // Actualizar el conteo de barras al redimensionar la ventana
//     window.addEventListener("resize", updateBarsCount);

//     return () => {
//       window.removeEventListener("resize", updateBarsCount);
//     };
//   }, [barMargin]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between", // Distribuir las barras
//         alignItems: "flex-end",
//         height: "200px",
//         width: "100vw", // Asegurarse de que el contenedor tenga 100vw
//         overflow: "hidden",
//         position: "relative", // Para manejar la posición de las barras
//       }}
//     >
//       {Array.from({ length: barsCount }).map((_, index) => {
//         // Generar una altura aleatoria para cada barra
//         const initialHeight = Math.random() * 150 + 50; // Altura aleatoria inicial
//         return (
//           <motion.div
//             key={index}
//             style={{
//               width: "3px", // strokeWidth
//               backgroundColor: "#ccc", // color de la barra
//               height: initialHeight, // altura inicial aleatoria
//               borderRadius: "8px", // borderRadius para las barras
//             }}
//             animate={{
//               height: [initialHeight, Math.random() * 150 + 50, initialHeight], // Animar la altura de la barra
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//               //   delay: index * 0.2, // Retraso para cada barra basado en su índice
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default BarAnimation;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const BarAnimation = () => {
//   const [barsCount, setBarsCount] = useState(0);
//   const barMargin = 16; // Margen entre las barras en px

//   useEffect(() => {
//     const updateBarsCount = () => {
//       const totalWidth = window.innerWidth; // Ancho total de la ventana
//       const barWidth = 3; // Ancho de cada barra (strokeWidth)
//       const marginWidth = barMargin; // Margen entre barras

//       // Calcular la cantidad de barras que pueden caber
//       const count = Math.floor(
//         (totalWidth + marginWidth) / (barWidth + marginWidth)
//       );
//       setBarsCount(count);
//     };

//     // Inicializar el conteo de barras
//     updateBarsCount();

//     // Actualizar el conteo de barras al redimensionar la ventana
//     window.addEventListener("resize", updateBarsCount);

//     return () => {
//       window.removeEventListener("resize", updateBarsCount);
//     };
//   }, [barMargin]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between", // Distribuir las barras
//         alignItems: "flex-end",
//         height: "200px",
//         width: "100vw", // Asegurarse de que el contenedor tenga 100vw
//         overflow: "hidden",
//         position: "relative", // Para manejar la posición de las barras
//       }}
//     >
//       {Array.from({ length: barsCount }).map((_, index) => (
//         <motion.div
//           key={index}
//           style={{
//             width: "3px", // strokeWidth
//             backgroundColor: "#ccc", // color de la barra
//             height: "100px", // altura inicial
//             borderRadius: "8px", // borderRadius para las barras
//           }}
//           animate={{
//             height: [50, Math.random() * 150 + 50, 50], // Animar la altura de la barra
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: index * 0.2, // Retraso para cada barra basado en su índice
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default BarAnimation;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BarAnimation = () => {
  const [barsCount, setBarsCount] = useState(0);
  const barMargin = 16; // Margen entre las barras en px
  const [delays, setDelays] = useState([]);

  useEffect(() => {
    const updateBarsCount = () => {
      const totalWidth = window.innerWidth; // Ancho total de la ventana
      const barWidth = 3; // Ancho de cada barra (strokeWidth)
      const marginWidth = barMargin; // Margen entre barras

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

    // Inicializar el conteo de barras
    updateBarsCount();

    // Actualizar el conteo de barras al redimensionar la ventana
    window.addEventListener("resize", updateBarsCount);

    return () => {
      window.removeEventListener("resize", updateBarsCount);
    };
  }, [barMargin]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", // Distribuir las barras
        alignItems: "flex-end",
        height: "200px",
        width: "100vw", // Asegurarse de que el contenedor tenga 100vw
        overflow: "hidden",
        position: "relative", // Para manejar la posición de las barras
      }}
    >
      {Array.from({ length: barsCount }).map((_, index) => {
        // Generar una altura aleatoria para cada barra
        const initialHeight = Math.random() * 150 + 50; // Altura aleatoria inicial
        return (
          <motion.div
            key={index}
            style={{
              width: "4px", // strokeWidth
              backgroundColor: "#F4F7FA", // color de la barra
              height: initialHeight, // altura inicial aleatoria
              borderRadius: "8px", // borderRadius para las barras
            }}
            animate={{
              height: [initialHeight, Math.random() * 150 + 50, initialHeight], // Animar la altura de la barra
            }}
            transition={{
              duration: 2,
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
