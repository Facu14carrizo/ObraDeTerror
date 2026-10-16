import React, { useState, useEffect } from 'react';
import { Skull, Ticket, Menu, X, Flame } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenTickets }) {
  const [scrolled, setScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2026-10-24T20:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className={`horror-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-brand">
          <div className="brand-beast-container">
            <div className="brand-beast-aura"></div>
            <img 
              src="/assets/beastIcon.png" 
              alt="La Bestia" 
              className="brand-beast-icon" 
            />
          </div>
          <div className="brand-text">
            <span className="brand-title font-cinzel">LA PRUEBA DEL HAMBRE</span>
            <div className="brand-countdown-wrapper" title="Tiempo restante para el estreno">
              <span className="brand-countdown-label font-cinzel">ESTRENO EN:</span>
              <div className="brand-countdown-timer">
                <span className="count-unit">
                  <strong className="count-num font-cinzel">{String(timeLeft.days).padStart(2, '0')}</strong>
                  <small className="count-tag">D</small>
                </span>
                <span className="count-colon">:</span>
                <span className="count-unit">
                  <strong className="count-num font-cinzel">{String(timeLeft.hours).padStart(2, '0')}</strong>
                  <small className="count-tag">H</small>
                </span>
                <span className="count-colon">:</span>
                <span className="count-unit">
                  <strong className="count-num font-cinzel">{String(timeLeft.minutes).padStart(2, '0')}</strong>
                  <small className="count-tag">M</small>
                </span>
                <span className="count-colon">:</span>
                <span className="count-unit">
                  <strong className="count-num font-cinzel">{String(timeLeft.seconds).padStart(2, '0')}</strong>
                  <small className="count-tag">S</small>
                </span>
              </div>
            </div>
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
