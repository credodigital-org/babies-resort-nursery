import React, { useState } from 'react';
import './Testimonials.css';
import top from '../assets/TestimonialsImage/top.png';
import bottom from '../assets/TestimonialsImage/bottom.png';
import father from '../assets/TestimonialsImage/father.png';
import giraffe from '../assets/TestimonialsImage/giraffe.png';


const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Ahmed Rahman",
    image: father, // Leave empty for your center circle image asset
    text: "“Babies Resort Nursery Has Provided A Wonderful Learning Environment For My Child. The Teachers Are Caring, Supportive, And Always Encourage Creativity And Confidence Through Fun Activities And Interactive Learning.”"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    image: father, // Leave empty for another test asset
    text: "“An exceptional space for early childhood growth! My daughter looks forward to attending every single day. The staff is professional, welcoming, and remarkably attentive.”"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section position-relative">
      {/* Top White Curved Image Shape Layer */}
      <img src={top} alt="" className="curve-shape top-curve" />

      {/* Playful Floating Giraffe Asset Layer */}
      <img src={giraffe} alt="" className="floating-giraffe-img" />

      <div className="container testimonials-interactive-container">
        
        {/* Playful Dashed Header System */}
        <div className="text-center mb-5">
          <div className="testimonials-title-container">
            <h2 className="testimonials-main-title">What Parents Say</h2>
            <div className="testimonials-title-underline"></div>
          </div>
        </div>

        {/* Slidable Framework Bounding Wrapper */}
        <div className="carousel-viewports-box position-relative mx-auto">
          
          {/* Navigation Controls System */}
          <button onClick={handlePrev} className="nav-arrow-btn prev-btn" aria-label="Previous Slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button onClick={handleNext} className="nav-arrow-btn next-btn" aria-label="Next Slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Core Sliding Window Track Container */}
          <div className="testimonial-slider-track">
            {TESTIMONIALS_DATA.map((item, index) => {
              let positionClass = "nextSlide";
              if (index === activeIndex) {
                positionClass = "activeSlide";
              } else if (index === activeIndex - 1 || (activeIndex === 0 && index === TESTIMONIALS_DATA.length - 1)) {
                positionClass = "lastSlide";
              }

              return (
                <div key={item.id} className={`testimonial-card-item ${positionClass}`}>
                  {/* Center Circle Image Frame Asset */}
                  <div className="profile-circle-frame mx-auto">
                    <img src={item.image || "https://via.placeholder.com/150"} alt={item.name} className="profile-display-img" />
                  </div>

                  <h3 className="parent-profile-name">{item.name}</h3>
                  <p className="parent-testimonial-quote mx-auto">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom White Curved Image Shape Layer */}
      <div className="bottom-curve-container">
        <img src={bottom} alt="" className="curve-shape bottom-curve" />
      </div>
    </section>
  );
}