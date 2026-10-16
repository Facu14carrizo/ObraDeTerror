import React, { useEffect, useState } from 'react';
import './Embers.css';

export default function Embers() {
  const [particles] = useState(() => {
    // 85 partículas cinemáticas repartidas por toda la pantalla con ascuas vivas
    return Array.from({ length: 85 }).map((_, i) => {
      const layer = Math.random();
      // Partículas más visibles y variadas
      const size = layer > 0.85 ? Math.random() * 4 + 4 : layer > 0.45 ? Math.random() * 2.5 + 2.5 : Math.random() * 2 + 1.2;
      const driftX = (Math.random() - 0.5) * 160; 
      const duration = layer > 0.85 ? Math.random() * 3.5 + 4.5 : Math.random() * 5 + 6.5;

      let color = '#ff7700';
      let shadowGlow = 'rgba(255, 120, 0, 0.9)';
      if (layer > 0.88) {
        color = '#fff6b3'; // chispa de núcleo blanco-dorado incandescente
        shadowGlow = 'rgba(255, 230, 140, 1)';
      } else if (layer > 0.6) {
        color = '#ff9900';
        shadowGlow = 'rgba(255, 150, 0, 0.9)';
      } else if (layer > 0.3) {
        color = '#ff4400';
        shadowGlow = 'rgba(255, 70, 0, 0.8)';
      } else {
        color = '#ff2200';
        shadowGlow = 'rgba(255, 30, 0, 0.7)';
      }

      return {
        id: i,
        left: Math.random() * 100,
        size,
        duration,
        delay: Math.random() * 8,
        driftX,
        blur: layer < 0.25 ? 1 : 0,
        opacity: layer > 0.8 ? 0.95 : layer > 0.4 ? 0.85 : 0.65,
        color,
        shadowGlow,
      };
    });
  });

  return (
    <div className="embers-container" aria-hidden="true">
      {/* Resplandor de fogata ardiente en la base */}
      <div className="campfire-bottom-glow"></div>
      <div className="campfire-flame-flicker"></div>

      {particles.map((p) => (
        <span
          key={p.id}
          className="ember"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.shadowGlow}, 0 0 ${p.size * 6}px ${p.color}`,
            filter: p.blur ? `blur(${p.blur}px)` : 'none',
            opacity: p.opacity,
            '--drift-x': `${p.driftX}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
