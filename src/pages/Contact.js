// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dati inviati:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Resetta il form dopo l'invio
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contattami</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="contact-label">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />

        <label htmlFor="email" className="contact-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />

        <label htmlFor="message" className="contact-label">Messaggio</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-textarea"
        />

        <button type="submit" className="contact-submit-button">Invia</button>
        {submitted && <p className="success-message">Messaggio inviato con successo!</p>}
      </form>
    </div>
  );
}