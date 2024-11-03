import React from 'react';
import './Home.css';
import ProfilePicture from '../assets/profile-picture.png'; // Assicurati di avere un'immagine in questa posizione

export default function Home() {
  return (
    <div className="home-container">
      <div className="split-container">
        {/* Sezione sinistra per il testo */}
        <div className="left-section">
          <h1>Benvenuto nel mio sito!</h1>
          <p>Sono <strong>Salvatore Sipala</strong></p>
          <p>Sono un <strong>ingegnere informatico</strong></p>
          <p>Gestore Database con <strong>SQL Server</strong> e <strong>PostgreSQL</strong></p>
          <p>Sviluppatore Back-end in <strong>.NET (C#), Java e Python</strong></p>
          <p>Sviluppatore Front-end di base con <strong>HTML, Javascript, CSS e React.js</strong></p>
        </div>

        {/* Sezione destra per l'immagine */}
        <div className="right-section">
          <img src={ProfilePicture} alt="Salvatore Sipala" />
        </div>
      </div>
    </div>
  );
}
