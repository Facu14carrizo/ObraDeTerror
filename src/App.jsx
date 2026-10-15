import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lore from './components/Lore';
import Features from './components/Features';
import Shows from './components/Shows';
import Footer from './components/Footer';
import Embers from './components/Embers';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const scrollToShows = () => {
    const el = document.getElementById('funciones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="horror-app">
      {/* Pantalla de carga sutil con Beast Icon */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Sistema de partículas y ascuas de fuego */}
      <Embers />

      {/* Navegación superior fija con blur */}
      <Navbar onOpenTickets={scrollToShows} />

      <main>
        {/* Portada cinematográfica con el póster y cuenta regresiva */}
        <Hero onOpenTickets={scrollToShows} />

        {/* Trama, mitología y elenco de scouts */}
        <Lore />

        {/* Montaje sensorial y advertencias */}
        <Features />

        {/* Cartelera de funciones y checkout interactivo */}
        <Shows onBookShow={scrollToShows} />
      </main>

      {/* Pie de página con enlaces y redes */}
      <Footer onOpenTickets={scrollToShows} />
    </div>
  );
}

export default App;
