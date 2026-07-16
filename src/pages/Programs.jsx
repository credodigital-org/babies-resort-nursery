import React, { useState } from 'react';
import './Programs.css';

// Exact updated structural image asset pathways
import swimImg from '../assets/ProgramImage/swimImg.png'; 
import creative from '../assets/ProgramImage/creative.png'; 
import music from '../assets/ProgramImage/music.png'; 
import early from '../assets/ProgramImage/early.png'; 
import science from '../assets/ProgramImage/science.png'; 
import sun from '../assets/ProgramImage/sun.png'; 
import cloud1 from '../assets/ProgramImage/cloud1.png'; 
import children from '../assets/ProgramImage/children.png'; 



export default function Programs() {
  const programData = [
    {
      id: 1,
      title: "Swimming Program",
      description: "Fun And Safe Swimming Activities That Help Children Build Confidence, Coordination, And Water Safety Skills In A Supervised Environment.",
      image: swimImg,
    },
    {
      id: 2,
      title: "Creative Arts",
      description: "Nurturing self-expression and motor skills through colorful painting, crafting, and hands-on structural creations.",
      image: creative, 
    },
    {
      id: 3,
      title: "Music & Movement",
      description: "Exploring rhythm, basic instruments, and physical coordination through playful songs and interactive group dances.",
      image: music, 
    },
    {
      id: 4,
      title: "Early Literacy",
      description: "Building foundational language tools, engaging story times, and phonics recognition in an exciting environment.",
      image: early,
    },
    {
      id: 5,
      title: "Science Discovery",
      description: "Encouraging curious minds to observe, question, and explore basic nature patterns through safe sensory setups.",
      image: science,
    }
  ];

  const faqData = [
    {
      id: 1,
      question: "What Age Groups Do You Accept?",
      answer: "We Welcome Children Aged 2 To 5 Years Through Age-Appropriate Learning Programs."
    },
    {
      id: 2,
      question: "What Are Your Nursery Timings?",
      answer: "Our core nursery and early learning programs operate from 8:00 AM to 2:00 PM, Monday through Friday, with optional extended afternoon care."
    },
    {
      id: 3,
      question: "How Can I Enroll My Child?",
      answer: "You can submit an application form online through our portal or visit our admissions office directly to schedule a campus tour."
    },
    {
      id: 4,
      question: "Do You Provide Transportation Services?",
      answer: "Yes, we provide safe, supervised air-conditioned bus transportation options covering major designated residential routes."
    },
    {
      id: 5,
      question: "Are Meals Or Snacks Provided For Children?",
      answer: "We provide highly nutritious, allergen-aware morning snacks and well-balanced warm lunches planned by pediatric nutritionists."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaqId, setOpenFaqId] = useState(1); // Default first FAQ open matching the layout

  const currentProgram = programData[activeIndex];

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="programs-section">
      <div className="container programs-interactive-container">
        
        {/* --- DYNAMIC HEADER SYSTEM --- */}
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="programs-title-container">
              <h2 className="programs-main-title">Programs</h2>
              <div className="programs-title-underline"></div>
            </div>
            <p className="programs-subtitle mt-3 mb-4 mb-md-5">
              Fun And Engaging Programs Designed To Support Creativity, Confidence, And Early Childhood Development Through Interactive Learning Experiences.
            </p>
          </div>
        </div>

        {/* --- MAIN DISPLAY CARD (Grid Row Framework) --- */}
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-7">
            <div className="program-card">
              
              <div className="program-image-wrapper">
                <img 
                  src={currentProgram.image} 
                  alt={currentProgram.title} 
                  className="program-display-img" 
                />
              </div>

              <div className="program-details-content">
                <h3 className="program-card-title">{currentProgram.title}</h3>
                <p className="program-card-description">{currentProgram.description}</p>
              </div>

            </div>
          </div>
        </div>

        {/* --- SLIDER DOT NAVIGATION SYSTEM --- */}
        <div className="row justify-content-center mt-4 mt-md-5">
          <div className="col-auto">
            <div className="programs-dots-controls">
              {programData.map((_, index) => (
                <button
                  key={index}
                  className={`program-dot-btn ${index === activeIndex ? 'dot-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to program slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* --- NEW ADDED: HAPPY PLACE HERO & HERO CLOUDS AREA --- */}
      <div className="container-fluid happy-hero-wrapper mt-5 pt-5">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12 text-center position-relative">
              
              {/* Empty Sun Image Tag */}
              <img src={sun} alt="" className="happy-sun-img" />

              <h2 className="happy-hero-title fw-bold">
                A Happy Place For Your<br />Child To Learn & Grow
              </h2>

              {/* Graphic Cloud Stack Container */}
<div className="cloud-graphic-area mx-auto position-relative">
  
  {/* Cloud 1 */}
  <div className="happy-cloud-wrapper cloud-1">
    <img src={cloud1} alt="" className="cloud-bg-img" />
    <span className="cloud-inner-text">Interactive Play-Based<br />Learning</span>
  </div>

  {/* Cloud 2 */}
  <div className="happy-cloud-wrapper cloud-2">
    <img src={cloud1} alt="" className="cloud-bg-img" />
    <span className="cloud-inner-text">Safe & Caring<br />Environment</span>
  </div>

  {/* Cloud 3 */}
  <div className="happy-cloud-wrapper cloud-3">
    <img src={cloud1} alt="" className="cloud-bg-img" />
    <span className="cloud-inner-text">Creative Activities</span>
  </div>

  {/* Cloud 4 */}
  <div className="happy-cloud-wrapper cloud-4">
    <img src={cloud1} alt="" className="cloud-bg-img" />
    <span className="cloud-inner-text">Supportive &<br />Friendly Staff</span>
  </div>

  {/* Empty Kids Image Tag */}
  <img src={children} alt="" className="happy-children-img" />

</div>

            </div>
          </div>
        </div>
      </div>

      {/* --- NEW ADDED: FREQUENTLY ASKED QUESTIONS SECTION --- */}
      <div className="container-fluid faq-wrapper-section py-5">
        <div className="container">
          
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="faq-main-heading d-inline-block pb-2">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9">
              <div className="faq-custom-accordion">
                {faqData.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div key={faq.id} className="faq-accordion-item mb-3">
                      <button 
                        className={`faq-accordion-trigger d-flex justify-content-between align-items-center w-100 text-start border-0`}
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question-text">{faq.question}</span>
                        <span className="faq-icon-indicator">{isOpen ? '—' : '+'}</span>
                      </button>
                      
                      <div className={`faq-accordion-collapse ${isOpen ? 'show-content' : ''}`}>
                        <div className="faq-accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}