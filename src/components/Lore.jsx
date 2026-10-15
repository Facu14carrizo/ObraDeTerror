import React from 'react';
import { Compass, Flame, Skull, Ghost, Eye, Radio } from 'lucide-react';
import './Lore.css';

export default function Lore() {
  const characters = [
    {
      name: "EDGAR",
      role: "El Guía de Patrulla",
      desc: "Trata de mantener la calma y el mapa en sus manos. Pero cuando las ramas crujen y la brújula gira desquiciada, su liderazgo se quiebra.",
      trait: "La linterna titilante",
      icon: Compass
    },
    {
      name: "Anabel",
      role: "La Escéptica",
      desc: "Decía que los mitos del Wendigo eran inventos para asustar niños. Ahora es la primera en escuchar los lamentos en el viento.",
      trait: "El silbato que nadie responde",
      icon: Radio
    },
    {
      name: "HORACIO",
      role: "El Observador",
      desc: "Lentes rotos, ojos desorbitados. Descubrió las marcas de garras a tres metros de altura sobre los troncos de los árboles.",
      trait: "La libreta de notas ensangrentada",
      icon: Eye
    },
    {
      name: "RUBÉN",
      role: "El paranoico",
      desc: "El hambre no es solo física; es una voz en la nuca que le pide correr y abandonar a los demás antes de la medianoche.",
      trait: "La mochila pesada con secretos",
      icon: Skull
    }
  ];

  return (
    <section id="sinopsis" className="horror-lore">
      <div className="lore-container">
        <div className="section-header text-center">
          <span className="section-tag font-creep">EL RELATO</span>
          <h2 className="section-title font-cinzel">LA PESADILLA QUE ACERCHA EN EL BOSQUE</h2>
          <div className="title-divider"></div>
        </div>

        <div className="lore-story-card">
          <div className="story-glow"></div>
          <div className="story-content">
            <h3 className="story-quote font-cinzel">
              "No es el frío lo que te congela los huesos... es saber que algo te está cazando y tiene hambre."
            </h3>
            <p className="story-p">
              Presentada por la <strong>Compañía teatral La Colmena</strong> en el marco de la <em>Noche de Terror en La Fábrica</em>, 
              esta pieza sumerge a los espectadores en la agonía de una reserva forestal olvidada por los mapas, donde cuatro scouts emprenden su fatídica prueba de orientación.
            </p>
            <p className="story-p">
              Una entidad con sangre titánica y cuencas vacías despierta entre las llamas del fuego fatuo. Posee una insaciable hambre ancestral que solo se calma cuando el pánico alcanza su punto más alto. Aislados, sin señal y con las baterías de sus linternas agotándose segundo a segundo, deberán descubrir el secreto del ritual antes de que el bosque los devore por completo.
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

          <div className="characters-grid">
            {characters.map((char, index) => {
              const IconComp = char.icon;
              return (
                <div key={index} className="character-card">
                  <div className="char-badge">
                    <IconComp size={20} />
                  </div>
                  <h4 className="char-name font-cinzel">{char.name}</h4>
                  <span className="char-role font-creep">{char.role}</span>
                  <p className="char-desc">{char.desc}</p>
                  <div className="char-trait">
                    <Flame size={14} />
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
