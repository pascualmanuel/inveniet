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
      {/* max-width: 750px; 600 */}
      <div className="contact-page lg:max-w-[600px] xl:max-w-[750px]">
        <form onSubmit={handleSubmit} className="contact-form">
          <label for="fname">Nombre:*</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-field myP"
            required
          />
          <div className="contact-row">
            <div>
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
                placeholder="Phone"
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
            placeholder="Subject"
            className="form-field myP"
            required
          />
          <label for="fname">Mensaje:</label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="form-field myP message-field"
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
