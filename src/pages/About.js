// src/pages/About.js
import React from 'react';
import './About.css'

export default function About() {
    return (
        <div className='about-container'>
            <div className='content'>
                <h1>Benvenuto nel mio sito!</h1>
                <p>
                    Mi chiamo <strong>Salvatore Sipala</strong> e sono un <strong>ingegnere informatico</strong> con una
                    solida esperienza nella gestione di database e nello sviluppo di soluzioni software.
                </p>
                <p>
                    Ho lavorato attivamente nella progettazione e integrazione di dati tramite software API,
                    utilizzando tecnologie <strong>REST</strong> e <strong>SOAP</strong>.
                </p>
                <p>
                    Le mie competenze principali includono:
                </p>
                <div class="list-container">
                    <ol class="alternating-colors">
                        <li><strong>Sviluppo Back-end:</strong> .NET (C#, VB), Python</li>
                        <li><strong>Database Management:</strong> Microsoft SQL Server, PostgreSQL</li>
                        <li><strong>Sviluppo Front-end:</strong> Esperienza base in React.js</li>
                    </ol>
                </div>
                <p>
                    Sono appassionato di tecnologia e sempre alla ricerca di nuove sfide che mi permettano di crescere
                    professionalmente e contribuire a progetti significativi.
                </p>
            </div>
        </div>
    );
}