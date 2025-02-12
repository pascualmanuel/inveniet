import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    isDemo: false, // Agregar campo para identificar si es demo
  });
  const [status, setStatus] = useState("");

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
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("Formulario enviado con éxito.");
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          isDemo: false,
        });
      } else {
        setStatus(data.message || "Hubo un error al enviar el formulario.");
      }
    } catch (error) {
      setStatus("Hubo un error de conexión.");
    }
  };

  return (
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
        <label htmlFor="fname">Asunto:</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Asunto"
          className="form-field myP"
          required
        />
        <label htmlFor="fname">Mensaje:</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Mensaje"
          className="form-field myP message-field"
          required
        />

        {/* Campo oculto para indicar si es una demo */}
        <input
          type="hidden"
          name="isDemo"
          value={form.isDemo ? "true" : "false"}
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
  );
};

export default ContactForm;
