import React from 'react';
import { Calendar, Clock, MapPin, Flame, AlertTriangle } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenTickets }) {
  return (
    <section id="hero" className="horror-hero">
      {/* Fondo con la imagen del Flyer integrado en blur dramático */}
      <div className="hero-backdrop" style={{ backgroundImage: `url('/La%20prueba%20del%20Hambre.jpeg')` }}></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-main-layout">
          {/* Columna Flyer a ancho completo prioritario en mobile */}
          <div className="hero-flyer-side">
            <div className="flyer-card-wrapper">
              <div className="flyer-glow-flame"></div>
              <img 
                src="/La%20prueba%20del%20Hambre.jpeg" 
                alt="Flyer Oficial La Prueba del Hambre - Una Obra de Terror" 
                className="flyer-poster-img"
              />
              <div className="flyer-caption">
                <span className="font-creep">ESPECIAL DE HALLOWEEN</span>
              </div>
            </div>
          </div>

          {/* Columna Texto y Título */}
          <div className="hero-text-side">
            <h1 className="hero-main-title font-cinzel">
              <span className="title-fire text-gradient-fire">LA PRUEBA DEL HAMBRE</span>
              <span className="title-sub-terror font-creep">OBRA DE TERROR</span>
              <span className="title-company font-cinzel">POR COMPAÑÍA TEATRAL LA COLMENA</span>
            </h1>

            <p className="hero-tagline">
              Cuatro jóvenes scouts adentrándose en un bosque maldito. Un pacto ancestral ha despertado a una bestia hambrienta... En una velada especial de terror inmersivo.
            </p>

            {/* Fila destacada de Fecha, Hora y Lugar */}
            <div className="hero-event-highlight">
              <div className="event-item">
                <Calendar className="event-icon" size={24} />
                <div className="event-texts">
                  <span className="event-label">FECHA</span>
                  <span className="event-value font-cinzel">Sábado 24 de Octubre</span>
                </div>
              </div>

              <div className="event-item">
                <Clock className="event-icon" size={24} />
                <div className="event-texts">
                  <span className="event-label">HORARIO</span>
                  <span className="event-value font-cinzel">20:00 HS</span>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Av.+%C3%81ngel+T.+de+Alvear+1632,+Don+Torcuato,+Provincia+de+Buenos+Aires" 
                target="_blank" 
                rel="noreferrer"
                className="event-item event-item-location"
                title="Tocar para abrir en Google Maps"
              >
                <MapPin className="event-icon pulse-icon" size={24} />
                <div className="event-texts">
                  <span className="event-label">LUGAR & SALA</span>
                  <span className="event-value font-cinzel">Fábrica Cultural - Don Torcuato, Tigre</span>
                  <span className="event-sub">Av. Ángel T. de Alvear 1632</span>
                </div>
              </a>

              {/* Botón sutil de Cómo llegar */}
              <a 
                href="https://maps.google.com/?q=Av.+%C3%81ngel+T.+de+Alvear+1632,+Don+Torcuato,+Provincia+de+Buenos+Aires" 
                target="_blank" 
                rel="noreferrer"
                className="btn-directions-subtle"
              >
                <MapPin size={16} />
                <span>Como llegar</span>
              </a>
            </div>

            <div className="hero-cta-group">
              <button className="btn-primary-horror hero-cta-btn" onClick={onOpenTickets}>
                <Flame size={20} />
                <span>RESERVAR ENTRADAS</span>
              </button>
              
              <a href="#sinopsis" className="btn-secondary-horror">
                <span>CONOCER LA TRAMA</span>
              </a>
            </div>

            <div className="hero-advisory">
              <AlertTriangle size={16} />
              <span>Apta mayores de 13 años. Contiene efectos de oscuridad total, luces estroboscópicas y sobresaltos reales.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
