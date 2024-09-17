import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    demoType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Aquí envías los datos o los manejas como necesites.
  };
  return (
    <>
      <div className="contact-page py-8 px-4 md:py-14 md:px-[62px]">
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
          <div className="block mb-4">
            <span className="text-gray-700">Tipo de demo:</span>
            <div className="flex flex-row  mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="demoType"
                  value="Demo presencial"
                  checked={form.demoType === "Demo presencial"}
                  onChange={handleChange}
                  className="custom-radio"
                  required
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
                  required
                />
                <span className="ml-2 select-none">Demo virtual</span>
              </label>
            </div>
          </div>

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
