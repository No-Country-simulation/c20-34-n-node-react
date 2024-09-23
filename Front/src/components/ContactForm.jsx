import React, { useState } from 'react';
import './ContactForm.css'; // Estilos para el formulario

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="text-black contact-form overflow-y-auto">
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* <div className="form-group">
        <label htmlFor="inquiry">I am requesting more information to</label>
        <select
          id="inquiry"
          name="inquiry"
          value={formData.inquiry}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select an option</option>
          <option value="product">Product Inquiry</option>
          <option value="service">Service Inquiry</option>
          <option value="other">Other</option>
        </select>
      </div> */}

      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          maxLength="500"
          required
        ></textarea>
      </div>

      <div className="form-group checkbox-group">
        <label>
          <input
            type="checkbox"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            required
          />
          I have read and accepted the <a href="/privacy-policy">privacy policy</a>
        </label>
      </div>

      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
};

export default ContactForm;
