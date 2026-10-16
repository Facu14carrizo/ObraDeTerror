import React from 'react';
import { Skull, MessageCircle, MapPin, Mail, Flame, Share2 } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenTickets }) {
  return (
    <footer className="horror-footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        
        <div className="footer-top-cta">
          <div className="cta-box">
            <span className="font-creep text-blood">¿TE ATREVES A VIVIRLO?</span>
            <h3 className="font-cinzel cta-title">NO DEJES QUE TE LO CUENTEN</h3>
            <p className="cta-desc">
              Las funciones de Halloween cuentan con cupos estrictamente limitados para preservar la atmósfera íntima e inmersiva.
            </p>
            <button className="btn-primary-horror" onClick={onOpenTickets}>
              <Flame size={18} />
              <span>RESERVAR MI BUTACA AHORA</span>
            </button>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img 
                src="/assets/beastIcon.webp" 
                alt="La Bestia" 
                className="brand-beast-icon" 
                loading="lazy"
                decoding="async"
                width="46"
                height="46"
              />
              <span className="font-cinzel footer-brand-name">LA PRUEBA DEL HAMBRE</span>
            </div>
            <p className="footer-desc">
              Una producción teatral independiente de terror psicológico y horror folclórico. 
              Especial de temporada Halloween 2026.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title font-cinzel">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#sinopsis">La Historia</a></li>
              <li><a href="#personajes">Personajes y Elenco</a></li>
              <li><a href="#experiencia">Efectos & Montaje</a></li>
              <li><a href="#funciones">Fechas de Funciones</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title font-cinzel">Ubicación & Contacto</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} />
                <span>Fábrica Cultural — Av. Ángel T. de Alvear 1632, Don Torcuato, Tigre</span>
              </li>
              <li>
                <MessageCircle size={18} />
                <span>Reservas WhatsApp: +54 9 11 3216-7594</span>
              </li>
              <li>
                <Mail size={18} />
                <span>Compañía Teatral La Colmena</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 La Prueba del Hambre - Obra Teatral. Todos los derechos reservados.</p>
          <div className="footer-developer">
            <span>Desarrollado por</span>
            <a 
              href="https://waveframe.com.ar/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="developer-link"
              title="Visitar WaveFrame Studio"
            >
              <strong className="developer-name">WaveFrame Studio</strong>
              <div className="waveframe-3d-wrapper">
                <model-viewer
                  src="/3D/waveframelogo3dmodel.glb"
                  alt="WaveFrame Studio 3D Logo"
                  auto-rotate
                  rotation-per-second="45deg"
                  interaction-prompt="none"
                  disable-zoom
                  disable-pan
                  camera-controls="false"
                  shadow-intensity="0"
                  style={{ width: '28px', height: '28px', pointerEvents: 'none' }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
