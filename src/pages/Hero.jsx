import React from 'react';
import kid from '../assets/HeroImage/KID.png';
import white2 from '../assets/HeroImage/white2.png';
import white from '../assets/HeroImage/white.png';
import white3 from '../assets/HeroImage/white3.png';



import './Hero.css';

export default function Hero() {
  return (
    <section className="container-fluid flex-grow-1 d-flex align-items-center py-4 px-4 custom-hero-section">
      <div className="row w-100 max-w-6xl mx-auto align-items-center">
        
        {/* LEFT COLUMN: Title & Action text */}
        <div className="col-12 col-lg-6 text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start justify-content-center">
          <h1 className="display-4 mb-4 font-weight-extrabold fw-black fw-bold hero-main-title">
              We Prepare Your <br className="d-none d-lg-block"/>
              <span className="hero-title-highlight">Child</span> For A <br className="d-none d-sm-block d-lg-none"/>
              Bright Future
          </h1>

        </div>

        {/* RIGHT COLUMN: The Graphic Illustration with Organic Background Blob */}
        <div className="col-12 col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
          {/* Container automatically manages container sizes and background design via CSS */}
          <div className="image-blob-container">
            <img 
              src={kid}
              alt="Child holding notebook with colorful graphics" 
              className="hero-kid-img"
            />
          </div>
        </div>

      </div>
      {/* THE WHITE CLUED WAVE HORIZON (Updated to use your custom image asset) */}
      <div className="hero-wave-1">
        <img 
          src={white2} 
          alt="White curved cloud backdrop" 
          className="wave-bg-graphic" 
        />
      </div>
      <div className="hero-wave">
        <img 
          src={white} 
          alt="White curved cloud backdrop" 
          className="wave-bg-graphic" 
        />
      </div>
      
      
      
    </section>
  );
}