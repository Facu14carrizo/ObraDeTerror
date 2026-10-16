import React, { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Mantener la pantalla visible un momento sutil (1.4s) y luego fade out suave
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 650); // Tiempo del fade out
    }, 1400);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`horror-loader ${fading ? 'fade-out' : ''}`}>
      <div className="loader-backdrop-glow"></div>
      
      <div className="loader-center-content">
        <div className="loader-icon-wrapper">
          <img 
            src="/assets/beastIcon.webp" 
            alt="La Bestia" 
            className="loader-beast-img"
            width="120"
            height="120"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
