import React, { useState } from 'react';
import './Gallery.css'; 
import up from '../assets/GallerImage/up.png';
import down from '../assets/GallerImage/down.png';
import gal1 from '../assets/GallerImage/gal1.png';
import gal2 from '../assets/GallerImage/gal2.png';
import gal3 from '../assets/GallerImage/gal3.png';
import gal4 from '../assets/GallerImage/gal4.png';
import gal5 from '../assets/GallerImage/gal5.png';

export default function Gallery() {
  // 1. Store images in an array for easy mapping
  const images = [
    { src: gal1, alt: "Gallery Scene 1" },
    { src: gal2, alt: "Gallery Scene 2" },
    { src: gal3, alt: "Gallery Scene 3" },
    { src: gal4, alt: "Gallery Scene 4" },
    { src: gal5, alt: "Gallery Scene 5" }
  ];

  // 2. State to track the center image (starts at index 2, which is gal3)
  const [activeIndex, setActiveIndex] = useState(2);

  // 3. Helper function to determine the 3D position class for each index
  const getLevelClass = (index) => {
    const total = images.length;
    // Calculate relative distance in a circular array loop
    const offset = (index - activeIndex + total) % total;

    if (offset === 0) return "level-center";
    if (offset === 1) return "level-right";
    if (offset === 2) return "level-far-right";
    if (offset === total - 1) return "level-left";
    if (offset === total - 2) return "level-far-left";
    
    return "level-hidden"; // Fallback for extra items if added later
  };

  // 4. Handlers for manual arrow buttons
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="gallery-section">
      
      {/* --- TOP BACKDROP LAYER --- */}
      <div className="gallery-cloud-backdrop cloud-top">
        <img src={up} alt="Top Cloud Backdrop" className="cloud-svg-layer" />
      </div>

      <div className="container gallery-interactive-container">
        
        <div className="gallery-title-wrapper text-center mb-5">
          <div className="gallery-title-container">
            <h2 className="gallery-main-title">Our Photo Gallery</h2>
            <div className="gallery-title-underline"></div>
          </div>
        </div>

        {/* --- 3D PERSPECTIVE COVERFLOW SLIDER SYSTEM --- */}
        <div className="gallery-slider-viewport">
          <div className="gallery-slider-track">
            
            {images.map((img, index) => {
              const levelClass = getLevelClass(index);
              const isCenter = levelClass === "level-center";

              return (
                <div 
                  key={index} 
                  className={`gallery-slide ${levelClass}`}
                  onClick={() => setActiveIndex(index)} // Clicking a side image centers it!
                  style={{ cursor: isCenter ? 'default' : 'pointer' }}
                >
                  <div className={`slide-card-inner ${isCenter ? 'center-highlight' : ''}`}>
                    <img src={img.src} alt={img.alt} className="gallery-display-img" />
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* --- OPTIONAL: NAV NAVIGATION BUTTONS --- */}
        <div className="gallery-nav-controls text-center mt-4">
          <button className="gallery-nav-btn prev-btn" onClick={handlePrev}>←</button>
          <button className="gallery-nav-btn next-btn" onClick={handleNext}>→</button>
        </div>

      </div>

      {/* --- BOTTOM BACKDROP LAYER --- */}
      <div className="gallery-cloud-backdrop cloud-bottom">
        <img src={down} alt="Bottom Cloud Backdrop" className="cloud-svg-layer" />
      </div>

    </section>
  );
}