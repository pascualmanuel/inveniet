import React, { useState, useRef } from "react";
// import "./FAQ.css"; // Add your styles here

const FAQItem = ({ number, title, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null); // Reference to the answer div

  return (
    <div className="faq-item select-none" onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-header">
        <div className="faq-left">
          <div className="faq-number subH">{number}</div>
          <div className="faq-title subH w-[220px] sm:w-auto">{title}</div>
        </div>
        <div className="faq-right">
          {isOpen ? (
            <svg
              width="16"
              height="2"
              viewBox="0 0 16 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1L0.999999 1"
                stroke="#0057BE"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1V15"
                stroke="#0057BE"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M15 8H0.999999"
                stroke="#0057BE"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        ref={answerRef}
        className="faq-answer"
        style={{
          maxHeight: isOpen ? `${answerRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className="faq-answer-content myP">{answer}</div>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const faqData = [
    {
      number: 1,
      title: "¿Qué es Inveniet y cómo funciona?",
      answer:
        "Inveniet es una solución de equipamiento y software que cubre las necesidades  de preparación, registro audiovisual de procesos judiciales orales, resguardando dichos registros en un catálogo asociado a una base de datos para consultas, estadísticas y reproducción o descarga. Cuenta con componentes centrales en un servidor, un cliente web que permite prácticamente todas las funciones, y un cliente en cada sala de audiencias, que además soporta la grabación de las mismas",
    },
    {
      number: 2,
      title:
        "¿Qué medidas de seguridad implementa Inveniet para proteger la información?",
      answer:
        "Además de los controles de acceso asignados al usuario, ante cada consulta se verifica que el material catalogado no haya sufrido adulteraciones a través de controles criptográficos. Por otro lado cuenta con logs de auditoría sobre los datos asociados.",
    },
    {
      number: 3,
      title:
        "¿Inveniet es compatible con diferentes sistemas operativos y dispositivos?",
      answer:
        "Tanto sus componentes centrales como cliente, funcionan en los sistemas operativos mas difundidos para servidores y estaciones de trabajo.",
    },
    {
      number: 4,
      title: "¿Qué tipo de soporte ofrece Inveniet a sus usuarios?",
      answer:
        "Nuestras implementaciones cuentan con soporte de segundo nivel basado en un sistema de tickets, tanto para consultas o incidentes funcionales, como técnicos o de equipamiento. Contamos con mas de 10 años de experiencia y un equipo con especialización en todos los componentes para responder ante cada necesidad.",
    },
    {
      number: 5,
      title: "¿Cómo puedo empezar a usar Inveniet?",
      answer:
        "La implementación de la solución se define de acuerdo a la infraestructura, distribución geográfica y  necesidades operativas, montando uno o mas servidores que atenderán las salas de audiencias, cámaras Gesell, salas de reconocimiento, de mediación, etc. En otros casos implementamos los componentes centrales en la nube.",
    },
    {
      number: 6,
      title: "¿Cómo puedo integrar Inveniet con los sistemas que utilizamos?",
      answer:
        "Inveniet ofrece una API Rest de integración, con diferentes funciones que permiten integrarse con sistemas de como el de manejo de expedientes, agenda, notificaciones, etc.",
    },
    {
      number: 7,
      title: "¿Quiénes pueden utilizar Inveniet?",
      answer:
        "La solución y el equipamiento están orientados a que cualquier usuario con dominio básico de una computadora, pueda operar el sistema",
    },
    // Add more FAQ items here
  ];

  return (
    <div className="faq-page max-w-[1360px] center">
      <h2 className="myH1 sm:py-20 py-5">Preguntas frecuentes</h2>
      {faqData.map((faq) => (
        <FAQItem
          key={faq.number}
          number={faq.number}
          title={faq.title}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FAQPage;
