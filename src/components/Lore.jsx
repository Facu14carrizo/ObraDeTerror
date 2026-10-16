import React from 'react';
import { Compass, Flame, Skull, Eye, Radio } from 'lucide-react';
import './Lore.css';

export default function Lore() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calibrado específico para el recorrido visible del encabezado:
          // Comienza a moverse cuando el inicio de Lore asoma abajo
          // Completa el cruce total de lado a lado durante los primeros 700px de scroll
          const startY = windowHeight; // justo asomando
          const endY = -150; // cuando el título ya pasó arriba
          const currentY = rect.top;
          
          const progress = Math.max(0, Math.min(1, (startY - currentY) / (startY - endY)));

          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const characters = [
    {
      name: "EDGAR",
      role: "El Guía de Patrulla",
      desc: "Trata de mantener la calma y el mapa en sus manos. Pero cuando las ramas crujen y la brújula gira desquiciada, su liderazgo se quiebra.",
      trait: "La linterna titilante",
      icon: Compass
    },
    {
      name: "ANABEL",
      role: "La Escéptica",
      desc: "Decía que los mitos del Wendigo eran inventos para asustar niños. Ahora es la primera en escuchar los lamentos en el viento.",
      trait: "El silbato que nadie responde",
      icon: Radio
    },
    {
      name: "RUBÉN",
      role: "El Paranoico",
      desc: "El hambre no es solo física; es una voz en la nuca que le pide correr y abandonar a los demás antes de la medianoche.",
      trait: "La mochila pesada con secretos",
      icon: Skull
    },
    {
      name: "HORACIO",
      role: "El Observador",
      desc: "Lentes rotos, ojos desorbitados. Descubrió las marcas de garras a tres metros de altura sobre los troncos de los árboles.",
      trait: "La libreta de notas ensangrentada",
      icon: Eye
    }
  ];

  // Mapear de completamente afuera a la izquierda (-120vw) hasta completamente afuera a la derecha (+125vw)
  const beastTranslateX = -120 + scrollProgress * 245; 
  // Opacidad viva y presente que aparece al entrar y se disuelve al terminar de salir
  const beastOpacity = scrollProgress < 0.1 
    ? scrollProgress * 9.5 
    : scrollProgress > 0.82 
    ? Math.max(0, (1 - scrollProgress) * 5.5) 
    : 0.95;

  return (
    <section ref={sectionRef} id="sinopsis" className="horror-lore">
      {/* Bestia colosal cruzando sincronizada fluidamente con el scroll */}
      <div 
        className="lore-beast-stalker scroll-driven"
        style={{
          transform: `translate3d(${beastTranslateX}vw, 0, 0) scale(1.05)`,
          opacity: beastOpacity
        }}
      >
        <div className="lore-beast-ambient-light"></div>
        <img 
          src="/assets/beast.png" 
          alt="La Bestia acechando en el bosque" 
          className="lore-beast-img" 
        />
      </div>

      <div className="lore-container">
        <div className="section-header text-center">
          <span className="section-tag font-creep">EL RELATO</span>
          <h2 className="section-title font-cinzel">LA PESADILLA QUE ACECHA EN EL BOSQUE</h2>
          <div className="title-divider"></div>
        </div>

        <div className="lore-story-card">
          <div className="story-glow"></div>
          <div className="story-content">
            <h3 className="story-quote font-cinzel">
              "No es el frío lo que te congela los huesos... es saber que algo te está cazando y tiene hambre."
            </h3>
            <p className="story-p">
              Presentada por la <strong className="lore-highlight-amber">Compañía teatral La Colmena</strong> en el marco de la <span className="lore-highlight-fire">Noche de Terror en La Fábrica</span>, 
              esta pieza sumerge a los espectadores en la agonía de una <span className="lore-highlight-forest">reserva forestal olvidada por los mapas</span>, donde <strong className="lore-highlight-scouts">cuatro scouts</strong> emprenden su fatídica prueba de orientación.
            </p>
            <p className="story-p">
              Una <strong className="lore-highlight-blood">entidad con sangre titánica y cuencas vacías</strong> despierta entre las llamas del fuego fatuo. Posee una <span className="lore-highlight-fire">insaciable hambre ancestral</span> que solo se calma cuando el pánico alcanza su punto más alto. Aislados, sin señal y con las <span className="lore-highlight-amber">baterías de sus linternas agotándose segundo a segundo</span>, deberán descubrir el secreto del ritual antes de que el <strong className="lore-highlight-blood">bosque los devore por completo</strong>.
            </p>
          </div>
        </div>

        {/* Personajes / Elenco */}
        <div id="personajes" className="characters-section">
          <div className="section-header text-center">
            <span className="section-tag font-creep">LOS CONDENADOS</span>
            <h3 className="section-title font-cinzel">CONOCE A LA PATRULLA</h3>
            <p className="section-sub">Cuatro entraron a la espesura. ¿Cuántos saldrán con vida?</p>
          </div>

          {/* Banner Cinematográfico: Tropa con Linternas al Frente */}
          <div className="troop-banner-wrapper">
            <div className="troop-lights-glow"></div>

            {/* Nombres sutiles arriba de cada cabeza de izquierda a derecha */}
            <div className="troop-names-row">
              <span className="troop-head-name font-cinzel pos-edgar">EDGAR</span>
              <span className="troop-head-name font-cinzel pos-anabel">ANABEL</span>
              <span className="troop-head-name font-cinzel pos-ruben">RUBÉN</span>
              <span className="troop-head-name font-cinzel pos-horacio">HORACIO</span>
            </div>

            <img 
              src="/assets/TropaFrente.png" 
              alt="La Patrulla Scout: Edgar, Anabel, Rubén y Horacio" 
              className="troop-banner-img"
            />
            <div className="troop-bottom-fade"></div>
            <div className="troop-flashlight-flare flare-1"></div>
            <div className="troop-flashlight-flare flare-2"></div>
            <div className="troop-flashlight-flare flare-3"></div>
            <div className="troop-flashlight-flare flare-4"></div>
          </div>

          <div className="characters-grid">
            {characters.map((char, index) => {
              const IconComp = char.icon;
              return (
                <div key={index} className="character-card">
                  <div className="char-card-header">
                    <div className="char-identity">
                      <h4 className="char-name font-cinzel">{char.name}</h4>
                      <span className="char-role font-creep">{char.role}</span>
                    </div>
                    <div className="char-badge">
                      <IconComp size={18} />
                    </div>
                  </div>
                  <p className="char-desc">{char.desc}</p>
                  <div className="char-trait">
                    <Flame size={13} />
                    <span>{char.trait}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
