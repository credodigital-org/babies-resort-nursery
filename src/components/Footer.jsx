import React from 'react';
import './Footer.css';
import logo from '../assets/NavbarImage/LOGO.png';

// --- Icon Image Assets Imports (Update these paths to match your project folder structure) ---
import phoneIcon from '../assets/FooterIcons/call.png';
import emailIcon from '../assets/FooterIcons/mail.png';
import locationIcon from '../assets/FooterIcons/loc.png';
import linkedinIcon from '../assets/FooterIcons/linkedin.png';
import facebookIcon from '../assets/FooterIcons/facebook.png';
import instagramIcon from '../assets/FooterIcons/instagram.png';
import xIcon from '../assets/FooterIcons/x.png';
import whatsappIcon from '../assets/FooterIcons/whatsapp.png';

export default function Footer() {
  return (
    <footer className="main-footer-wrapper py-5">
      <div className="container">
        
        {/* --- Top Segment: Brand Identity System --- */}
        <div className="text-center mb-5">
          <div className="footer-brand-logo-box mx-auto mb-3">
            <img src={logo} alt="Babies Resort Nursery Logo" className="footer-logo-img" />
          </div>
          <h4 className="footer-brand-title-en">Babies Resort Nursery</h4>
          <h4 className="footer-brand-title-ar" dir="rtl">حضانة بيبيز ريزورت</h4>
          
          <p className="footer-vision-text mx-auto mt-3">
            Providing A Safe, Caring, And Engaging Environment Where<br className="d-none d-md-block" />
            Children Learn, Play, And Grow With Confidence
          </p>
        </div>

        {/* --- Middle Segment: Interactive Contact Section --- */}
        <div className="text-center mb-4">
          <div className="footer-section-title-box">
            <h3 className="footer-section-title">Contact Info</h3>
          </div>
        </div>

        {/* Responsive Dual Column Layering (Contact details on left, Social platforms on right) */}
        <div className="row justify-content-center align-items-center g-4 footer-interactive-row mx-auto">
          
          {/* Left Block: Communication Nodes */}
          <div className="col-12 col-md-6 d-flex flex-column gap-3 contact-links-column">
            
            <a href="tel:+971501234567" className="contact-item-link d-flex align-items-center gap-3">
              <div className="contact-icon-wrapper">
                <img src={phoneIcon} alt="Phone" className="footer-custom-icon" />
              </div>
              <span className="contact-item-text">+971 50 123 4567</span>
            </a>

            <a href="mailto:info@babiesresortnursery.com" className="contact-item-link d-flex align-items-center gap-3">
              <div className="contact-icon-wrapper">
                <img src={emailIcon} alt="Email" className="footer-custom-icon" />
              </div>
              <span className="contact-item-text">info@babiesresortnursery.com</span>
            </a>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item-link d-flex align-items-center gap-3"
            >
              <div className="contact-icon-wrapper">
                <img src={locationIcon} alt="Location" className="footer-custom-icon" />
              </div>
              <span className="contact-item-text">Abu Dhabi, United Arab Emirates</span>
            </a>

          </div>

          {/* Right Block: Social Engagement Profiles */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center gap-4 social-links-column">
            
            {/* Upper Social Cluster Row */}
            <div className="d-flex align-items-center gap-4 standard-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-action-anchor">
                <img src={linkedinIcon} alt="LinkedIn" className="footer-custom-social-icon" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-action-anchor">
                <img src={facebookIcon} alt="Facebook" className="footer-custom-social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-action-anchor">
                <img src={instagramIcon} alt="Instagram" className="footer-custom-social-icon" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-action-anchor">
                <img src={xIcon} alt="X Twitter" className="footer-custom-social-icon" />
              </a>
            </div>

            {/* Floating Highlight Chat Asset (WhatsApp Badge layout) */}
            <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="whatsapp-floating-badge">
              <img src={whatsappIcon} alt="WhatsApp" className="footer-custom-whatsapp" />
            </a>

          </div>

        </div>

        {/* --- Bottom Segment: Legal Matrix Line --- */}
        <div className="footer-copyright-row text-center mt-5 pt-4">
          <p className="copyright-text mb-0">© 2026 Babies Resort Nursery. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}