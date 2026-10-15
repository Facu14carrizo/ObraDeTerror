import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Ticket, Flame, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import './Shows.css';

export default function Shows({ onBookShow }) {
  const [selectedShow, setSelectedShow] = useState(null);
  const [ticketsCount, setTicketsCount] = useState(2);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const shows = [
    {
      id: 1,
      date: "Sábado 24 de Octubre",
      special: "Noche de Terror en La Fábrica • Estreno Oficial",
      time: "20:00 HS",
      remaining: 18,
      price: "Entrada General",
      hall: "Fábrica Cultural (Av. Ángel T. de Alvear 1632, Don Torcuato, Tigre)",
      status: "Cupos Limitados",
      extras: "Incluye experiencia completa: Teatro + Charla de Brujas + Proyección de Cortos + Tarot & Buffet"
    }
  ];

  const handleSelect = (show) => {
    setSelectedShow(show);
    setBookingSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Disparar confeti rojizo/dorado siniestro
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#ff2200', '#ff8800', '#220000', '#ffffff']
      });
    } catch (err) {
      console.error(err);
    }

    setBookingSuccess(true);
  };

  return (
    <section id="funciones" className="horror-shows">
      <div className="shows-container">
        <div className="section-header text-center">
          <span className="section-tag font-creep">CARTELERA OFICIAL</span>
          <h2 className="section-title font-cinzel">ELIGE TU CONDENA: FECHAS & TICKETS</h2>
          <p className="section-sub">Asegura tu lugar en la fogata antes de que el cupo se agote por completo.</p>
          <div className="title-divider"></div>
        </div>

        <div className="shows-grid">
          {shows.map((show) => {
            const isSelected = selectedShow?.id === show.id;
            return (
              <div 
                key={show.id} 
                className="show-card"
              >
                <div className="show-header">
                  <span className="show-special font-creep">{show.special}</span>
                  <span className={`show-status-pill ${show.remaining <= 10 ? 'urgent' : ''}`}>
                    {show.status}
                  </span>
                </div>

                <div className="show-date-group">
                  <div className="date-icon-box">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <h3 className="show-date font-cinzel">{show.date}</h3>
                    <div className="show-time">
                      <Clock size={16} />
                      <span>{show.time}</span>
                    </div>
                  </div>
                </div>

                <div className="show-venue">
                  <MapPin size={16} />
                  <span>{show.hall}</span>
                </div>

                <div className="show-footer">
                  <div className="price-box">
                    <span className="price-lbl">Precio por entrada</span>
                    <span className="price-val font-cinzel">{show.price}</span>
                  </div>
                  <button 
                    type="button"
                    className="btn-primary-horror show-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Por el momento no hace nada (luego se vinculará a WhatsApp)
                    }}
                  >
                    <Ticket size={18} />
                    <span>Comprar</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal / Panel de Reserva Dinámico */}
        {selectedShow && (
          <div className="booking-panel animate-fade-in">
            <div className="booking-inner">
              <div className="booking-header">
                <div>
                  <span className="font-creep text-blood text-sm">PROCESO DE RESERVA DIRECTA</span>
                  <h3 className="font-cinzel booking-title">
                    Reserva para: {selectedShow.date} ({selectedShow.time})
                  </h3>
                </div>
                <button 
                  className="close-booking-btn" 
                  onClick={() => setSelectedShow(null)}
                >
                  ✕
                </button>
              </div>

              {bookingSuccess ? (
                <div className="booking-success-box text-center">
                  <CheckCircle2 size={56} className="success-icon" />
                  <h4 className="font-cinzel text-xl">¡Tu reserva ha sido registrada con éxito!</h4>
                  <p className="success-desc">
                    Hemos enviado las instrucciones de confirmación y el código QR de acceso a <strong>{formData.email}</strong>. 
                    Por favor presentate 20 minutos antes en la boletería del Teatro del Bosque.
                  </p>
                  <button 
                    className="btn-secondary-horror"
                    onClick={() => {
                      setSelectedShow(null);
                      setBookingSuccess(false);
                    }}
                  >
                    Cerrar y ver más detalles
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nombre y Apellido</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ej. Lucas Albarracín"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Correo Electrónico (Para recibir QR)</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="tuemail@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Teléfono / WhatsApp</label>
                      <input 
                        type="tel" 
                        placeholder="Ej. +54 9 11 1234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Cantidad de Entradas</label>
                      <div className="qty-selector">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <button
                            key={num}
                            type="button"
                            className={`qty-btn ${ticketsCount === num ? 'active' : ''}`}
                            onClick={() => setTicketsCount(num)}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="booking-summary-bar">
                    <div className="summary-left">
                      <span>Ubicación: </span>
                      <strong className="summary-total font-cinzel">
                        Fábrica Cultural
                      </strong>
                      <span className="summary-note">({ticketsCount} {ticketsCount === 1 ? 'entrada solicitada' : 'entradas solicitadas'})</span>
                    </div>

                    <a
                      href={`https://wa.me/5491132167594?text=${encodeURIComponent(`¡Hola! Quiero reservar ${ticketsCount} entradas para ver la obra 'La Prueba del Hambre' (Compañía La Colmena) este Sábado 24 de Octubre a las 20hs en la Fábrica Cultural. Mi nombre es ${formData.name || 'Espectador'}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary-horror confirm-btn"
                    >
                      <Flame size={18} />
                      <span>RESERVAR VÍA WHATSAPP OFICIAL</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
