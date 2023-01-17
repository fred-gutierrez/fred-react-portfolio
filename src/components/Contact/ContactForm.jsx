import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    console.log(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formsubmit.co/b97417cbbf645cc7a42a069a69b7dd50"
      method="POST"
      id="contact-form"
      className="lh-lg"
    >
      <input
        name="name"
        type="text"
        placeholder="Name"
        required=""
        className="col-12 ps-3"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        required="@"
        className="col-12 ps-3"
        id="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="col-12 ps-3"
        onChange={handleChange}
        value={formData.message}
      />
      <button id="submit" className="button">
        SUBMIT
      </button>
    </form>
  );
}
