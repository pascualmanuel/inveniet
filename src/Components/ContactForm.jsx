import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(form);
  };

  return (
    <>
      <div className="contact-page ">
        <form onSubmit={handleSubmit} className="contact-form">
          <label for="fname">Nombre:*</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="form-field myP"
            required
          />
          <div className=" flex flex-col lg:flex lg:flex-row lg:justify-between">
            <div className="">
              <label for="fname">Email:*</label>
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
              <label for="fname">Télefono:*</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Télefono"
                className="form-field myP"
                required
              />
            </div>
          </div>
          <label for="fname">Asunto:</label>

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Asunto"
            className="form-field myP"
            required
          />
          <label for="fname">Mensaje:</label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Mensaje"
            className="form-field myP message-field"
            required
          />
          <button
            type="submit"
            className="w-full h-[50px] md:w-[148px] flex justify-center items-center bg-iBlue rounded-lg text-white myCTA self-end mt-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
