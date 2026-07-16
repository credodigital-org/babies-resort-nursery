import React from 'react';
import './Contact.css';
import kid from '../assets/ContactImage/kid.png';
import map from '../assets/ContactImage/map.png';
import cloud from '../assets/ContactImage/cloud.png';
import uae from '../assets/ContactImage/uae.png';



export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-page-section py-5">
      <div className="container">
        
        {/* --- PART 1: GET IN TOUCH FORM --- */}
        <div className="text-center mb-5">
          <div className="contact-title-container">
            <h2 className="contact-main-title">Get In Touch</h2>
            <div className="contact-title-underline"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form-wrapper mb-5">
          <div className="row g-4 align-items-stretch">
            
            {/* Left Column: Kid Profile Graphic Area */}
            <div className="col-12 col-md-6">
              <div className="contact-image-frame h-100">
                <img src={kid} alt="Kid Activity Area" className="contact-display-img" />
              </div>
            </div>

            {/* Right Column: Form Fields Entry Area */}
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between gap-3">
              <input 
                type="text" 
                className="form-control contact-input-field" 
                placeholder="Name" 
                required 
              />
              <input 
                type="email" 
                className="form-control contact-input-field" 
                placeholder="Email Id" 
                required 
              />
              
              <div className="input-group contact-phone-group">
                <span className="input-group-text contact-country-addon">
                  <img src={uae} alt="Flag" className="country-flag-icon me-1" />
                  <span className="dropdown-caret">▼</span>
                </span>
                <input 
                  type="tel" 
                  className="form-control contact-input-field border-start-0" 
                  placeholder="+971" 
                  required 
                />
              </div>

              <textarea 
                className="form-control contact-textarea-field flex-grow-1" 
                placeholder="Message" 
                rows="4"
                required 
              ></textarea>
            </div>

          </div>

          <div className="row mt-4">
            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="contact-submit-btn w-25 py-3">
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* --- PART 2: STATS GRID BANNER --- */}
        <div className="contact-stats-bounding-box position-relative mx-auto mb-5">
          <img src={cloud} alt="" className="stats-backdrop-cloud-img" />

          <div className="contact-stats-banner-grid text-center">
            <div className="row align-items-center g-0">
              <div className="col-12 col-md-4 stat-column-node">
                <h3 className="stat-numeric-heading">45+</h3>
                <p className="stat-label-caption mb-0">Qualified Teachers</p>
              </div>

              <div className="col-12 col-md-4 stat-column-node middle-node">
                <h3 className="stat-numeric-heading">20+</h3>
                <p className="stat-label-caption mb-0">Years Of Experience</p>
              </div>

              <div className="col-12 col-md-4 stat-column-node text-node-front">
                <h3 className="stat-numeric-heading">565+</h3>
                <p className="stat-label-caption mb-0">Students Enrolled</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- PART 3: NEW OUR LOCATION SECTION --- */}
        <div className="text-center mt-5 pt-4 mb-4">
          <div className="contact-title-container">
            <h2 className="contact-main-title">Our Location</h2>
            <div className="contact-title-underline"></div>
          </div>
        </div>

        {/* Map Container Area */}
        <div className="location-map-wrapper mx-auto text-center">
          <div className="map-image-frame">
            <img src={map} alt="Map Location" className="map-display-img" />
          </div>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="open-map-link d-inline-block mt-3"
          >
            Open Google Map
          </a>
        </div>

      </div>
    </section>
  );
}