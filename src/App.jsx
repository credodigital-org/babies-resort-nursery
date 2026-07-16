import * as React from 'react'; 
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Import components & pages
import Navbar from './components/Navbar'; 
import Hero from './pages/Hero';     
import About from './pages/About';   
import Programs from './pages/Programs'; 
import Testimonials from './components/Testimonials'; 
import Gallery from './pages/Gallery';   
import Contact from './pages/Contact';   
import Footer from './components/Footer';   


// Custom hook to detect if the viewport is Desktop (>= 992px)
function useIsDesktop() {
  // Fixed: explicitly prefixed hooks with React.
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 992);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
}

// Handles smooth scrolling ONLY on Mobile & Tablet
function ScrollToSection({ isDesktop }) {
  const { pathname } = useLocation();

  // Fixed: explicitly prefixed hooks with React.
  React.useEffect(() => {
    if (isDesktop) return; 

    let targetId = 'hero';
    if (pathname === '/about') targetId = 'about';
    else if (pathname === '/programs') targetId = 'programs';
    else if (pathname === '/testimonials') targetId = 'testimonials'; 
    else if (pathname === '/gallery') targetId = 'gallery';
    else if (pathname === '/contact') targetId = 'contact';

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [pathname, isDesktop]);

  return null;
}

// 1. MOBILE & TABLET LAYOUT (One single page layout containing all sections)
function MobileTabletLayout() {
  return (
    <div className="single-page-scroll-layout">
      <div id="hero">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="programs">
        <Programs />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

// 2. MAIN APP ROUTER CORE
export default function App() {
  const isDesktop = useIsDesktop();

  return (
    <Router>
      <div className="app-container">
        {/* Navbar stays permanently fixed/visible at the top across all device types */}
        <Navbar /> 

        {/* Scroll helper active only for Mobile/Tablet sizes */}
        <ScrollToSection isDesktop={isDesktop} />

        {isDesktop ? (
          /* ================= DESKTOP ROUTES (Isolated Pages) ================= */
          <Routes>
            <Route path="/" element={<><Hero /><About /><Testimonials /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirect any missing paths back home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : (
          /* ================= MOBILE & TABLET (All-in-One Scroll) ============= */
          <Routes>
            {/* Any route matches the base layout, ScrollToSection handles the scrolling focus */}
            <Route path="*" element={<MobileTabletLayout />} />
          </Routes>
        )}
        <Footer />
      </div>
    </Router>
  );
}