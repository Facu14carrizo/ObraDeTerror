import React from 'react';
import { EyeOff, Sparkles, Volume2, Users, HeartPulse, Flame } from 'lucide-react';
import './Features.css';

export default function Features() {
  const perks = [
    {
      icon: EyeOff,
      title: "Oscuridad Total Sensorial",
      desc: "Escenas clave transcurren en penumbra absoluta donde el sonido binaural y la cercanía de los actores pondrán a prueba tu templanza."
    },
    {
      icon: HeartPulse,
      title: "Sobresaltos Inmersivos",
      desc: "No hay cuarta pared fija. Los personajes deambulan entre las butacas sintiendo que el monstruo los acecha a escasos centímetros."
    },
    {
      icon: Flame,
      title: "Efectos Prácticos & Fuego Fatuo",
      desc: "Atmósfera cargada de niebla densa, iluminación tenue con proyeccion de fogatas de campamento y olores a tierra húmeda y ceniza."
    }
  ];

  return (
    <section id="experiencia" className="horror-features">
      <div className="features-container">
        <div className="section-header text-center">
          <span className="section-tag font-creep">EL MONTAJE</span>
          <h2 className="section-title font-cinzel">UNA EXPERIENCIA QUE TRASPASA EL ESCENARIO</h2>
          <div className="title-divider"></div>
        </div>

        <div className="features-grid">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon size={28} />
                </div>
                <h3 className="feature-title font-cinzel">{p.title}</h3>
                <p className="feature-desc">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
