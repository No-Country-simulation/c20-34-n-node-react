import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/ContactForm';
import './ContactPage.css';
import backgroundImage from '../assets/background.jpg';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-background">
        <img src={backgroundImage} alt="Building background" />
      </div>
      <div className="contact-form-section">
        <div className="contact-info">
          <h2>Contact</h2>
          <p><FontAwesomeIcon icon={faPhone} /> +1-302-123-0000 (WhatsApp)</p>
          <p><FontAwesomeIcon icon={faPhone} /> +1-302-123-0000</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@proptech.us</p>
          <p><FontAwesomeIcon icon={faGlobe} /> PropTech</p>
        </div>
        <p>Do you have any questions?</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
