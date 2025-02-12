import React, { useState } from "react";

const DemoForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    demoType: "",
    message: "",
    isDemo: true, // Se agrega este campo para identificar que es una solicitud de demo
  });
  const [status, setStatus] = useState(""); // Para el estado del formulario (Enviando, éxito, error)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch(
        "/wp-json/my_namespace/v1/submit-contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form), // Enviar directamente el objeto 'form'
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("Formulario enviado con éxito.");
        setForm({
          name: "",
          email: "",
          phone: "",
          demoType: "",
          message: "",
          isDemo: true,
        });
      } else {
        setStatus(result.message || "Hubo un error al enviar el formulario.");
      }
    } catch (error) {
      setStatus("Hubo un error de conexión.");
    }
  };

  return (
    <>
      <div className="contact-page py-8 px-4 md:py-14 md:px-[62px]">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="fname">Nombre:*</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="form-field myP"
            required
          />
          <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
            <div>
              <label htmlFor="fname">Email:*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="form-field myP"
                required
              />
            </div>
            <div>
              <label htmlFor="fname">Teléfono:*</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Teléfono"
                className="form-field myP"
                required
              />
            </div>
          </div>

          <div className="block mb-4">
            <span className="text-gray-700">Tipo de demo:</span>
            <div className="flex flex-row mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="demoType"
                  value="Demo presencial"
                  checked={form.demoType === "Demo presencial"}
                  onChange={handleChange}
                  className="custom-radio"
                />
                <span className="ml-2 select-none">Demo presencial</span>
              </label>
              <label className="flex items-center ml-4">
                <input
                  type="radio"
                  name="demoType"
                  value="Demo virtual"
                  checked={form.demoType === "Demo virtual"}
                  onChange={handleChange}
                  className="custom-radio"
                />
                <span className="ml-2 select-none">Demo virtual</span>
              </label>
            </div>
          </div>

          <label htmlFor="fname">Mensaje:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Mensaje"
            className="form-field myP message-field"
            required
          />
          <div className="flex flex-col-reverse md:flex-row-reverse md:items-center justify-between">
            <button
              type="submit"
              className="w-full h-[50px] md:w-[148px] flex justify-center items-center bg-iBlue rounded-lg text-white myCTA self-end mt-2"
            >
              Enviar
            </button>
            {status && <p>{status}</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default DemoForm;
