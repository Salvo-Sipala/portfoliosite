// src/pages/Portfolio.js
import React from 'react';
import './Portfolio.css';

// Dati dei progetti (esempio)
const projects = [
  {
    title: 'Progetto 1',
    description: 'Descrizione breve del Progetto 1. Questo progetto si focalizza su...',
    link: 'https://github.com/tuo-username/progetto1',
  },
  {
    title: 'Progetto 2',
    description: 'Descrizione breve del Progetto 2. È un progetto che...',
    link: 'https://github.com/tuo-username/progetto2',
  },
  {
    title: 'Progetto 3',
    description: 'Descrizione breve del Progetto 3. Questo progetto mira a...',
    link: 'https://github.com/tuo-username/progetto3',
  },
];


export default function Portfolio() {
    return (
      <div className="portfolio-container">
        <h1 className="portfolio-title">Il Mio Portfolio</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Guarda il progetto
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }