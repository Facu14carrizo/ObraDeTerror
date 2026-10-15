import React, { useEffect, useState } from 'react';
import './Embers.css';

export default function Embers() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 55 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 6,
      blur: Math.random() > 0.7 ? 2 : 0,
      color: Math.random() > 0.6 
        ? '#ff3b19' 
        : Math.random() > 0.3 
        ? '#ff7700' 
        : '#ffbb00',
    }));
    setParticles(items);
  }, []);

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
            boxShadow: `0 0 ${p.size * 2.5}px ${p.color}`,
            filter: `blur(${p.blur}px)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
