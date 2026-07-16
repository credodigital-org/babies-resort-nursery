import React, { useState } from 'react';
import logo from '../assets/NavbarImage/LOGO.png';
import './Navbar.css'; // 1. Imported the separate CSS file
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-4 py-3 custom-navbar">
      <div className="container-fluid navbar-inner-container d-flex justify-content-between align-items-center">
        
        {/* LEFT SIDE BALANCER (Disappears automatically on desktop via CSS) */}
        <div className="d-lg-none nav-spacer"></div>

        {/* THE BRAND LOGO */}
        <a className="custom-navbar-brand" href="#home">
          <img 
            src={logo}
            alt="Babies Resort Nursery Logo" 
            className="logo-graphic" 
          />
        </a>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-toggler border-0 shadow-none text-warning d-lg-none custom-toggler" 
          type="button"
          aria-label="Toggle navigation"
        >
          <svg className="bi bi-list" width="36" height="36" fill="#fb923c" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>

        {/* DESKTOP LINKS LAYOUT */}
        <div className="collapse navbar-collapse fw-bold justify-content-center" id="navbarNav">
          <div className="navbar-nav ms-auto gap-4">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/gallery">Gallery</Link>
          <Link className="nav-link" to="/programs">Programs</Link>
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </div>
        </div>
      </div>

      {/* MOBILE & TABLET EXPANDABLE DROPDOWN */}
      {menuOpen && (
        <div className="mobile-nav-drawer d-flex flex-column align-items-center d-lg-none">
          <a className="nav-link py-2 fw-semibold text-warning" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a className="nav-link py-2 fw-semibold text-secondary" href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a className="nav-link py-2 fw-semibold text-secondary" href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
          <a className="nav-link py-2 fw-semibold text-secondary" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}