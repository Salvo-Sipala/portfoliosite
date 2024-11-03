// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Salvatore Sipala
    </footer>
  );
}

export default Footer;
