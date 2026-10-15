import React, { useState, useEffect } from 'react';
import { Skull, Ticket, Menu, X, Flame } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenTickets }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`horror-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-brand">
          <img 
            src="/assets/beastIcon.png" 
            alt="La Bestia" 
            className="brand-beast-icon" 
          />
          <div className="brand-text">
            <span className="brand-title font-cinzel">LA PRUEBA DEL HAMBRE</span>
            <span className="brand-sub font-creep">ESPECIAL HALLOWEEN</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#sinopsis">La Historia</a>
          <a href="#personajes">Elenco</a>
          <a href="#funciones">Fechas & Sala</a>
          <a href="#experiencia">Experiencia</a>
          <button 
            className="btn-primary-horror nav-btn"
            onClick={onOpenTickets}
          >
            <Ticket size={18} />
            <span>RESERVAR AHORA</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
