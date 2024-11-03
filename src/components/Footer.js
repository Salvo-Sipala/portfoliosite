// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Il Tuo Nome
    </footer>
  );
}

export default Footer;
