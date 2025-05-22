import React from "react";
import '../assets/home.css'; // Nous allons créer ce fichier CSS spécifique

function Home() {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1 className="hero-title">Bienvenue sur <span>SkillUp</span></h1>
        <p className="hero-subtitle">Votre plateforme d'apprentissage personnalisée pour atteindre de nouveaux sommets.</p>
        <button className="cta-button">Explorer les cours</button>
      </div>
    </div>
  );
}

export default Home;