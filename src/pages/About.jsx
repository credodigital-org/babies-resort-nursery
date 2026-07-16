import React from 'react';
import './About.css';
import core1 from '../assets/AboutImage/core1.png';
import core2 from '../assets/AboutImage/core2.png';
import core3 from '../assets/AboutImage/core3.png';
import core4 from '../assets/AboutImage/core4.png';
import corecloud from '../assets/AboutImage/corecloud.png';
import amina from '../assets/AboutImage/amina.png';
import naseera from '../assets/AboutImage/naseera.png';
import rania from '../assets/AboutImage/rania.png';


export default function About() {
  return (
    <div className="about-page-wrapper">
      {/* 
        NAVBAR NOTE: If this page is loaded inside a Router setup (like react-router-dom), 
        your main <Navbar /> component should wrap this view automatically for desktop/tablet.
      */}

      <section className="about-section container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            
            {/* Main Section Decorative Title */}
            <div className="about-title-container mb-2 text-center">
  <h2 className="about-main-title">About Us</h2>
  <div className="about-title-underline"></div>
</div>

            {/* Sub-heading Context */}
            <h3 className="about-sub-title mb-4">
              About Babies Resort Nursery
            </h3>

            {/* Paragraph Blocks */}
            <div className="about-content-body">
              <p className="about-text-paragraph mb-4">
                Welcome To Babies Resort Nursery, A Warm And Nurturing Learning Environment 
                Located In The Heart Of Abu Dhabi. We Are Dedicated To Providing Children With A 
                Safe, Engaging, And Joyful Space Where They Can Learn, Explore, And Grow With 
                Confidence.
              </p>
              
              <p className="about-text-paragraph">
                At Babies Resort Nursery, We Believe Every Child Is Unique And Deserves A Strong 
                Foundation For The Future. Through Creative Activities, Play-Based Learning, And Caring 
                Guidance, We Help Children Develop Socially, Emotionally, And Academically In A 
                Positive And Supportive Atmosphere.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values-section">
  <div className="container text-center">
    
    {/* <!-- Title Header --> */}
    <div className="core-values-title-container mb-4 text-center">
  <h2 className="core-values-title">Our Core Values</h2>
  <div className="core-title-underline"></div>
</div>
    
    <div className="row g-4 justify-content-center">
      
      {/* <!-- Card 1: Care & Compassion --> */}
      <div className="col-12 col-md-6">
        <div className="value-card card-pink text-white h-100">
          <div className="avatar-wrapper">
            {/* <!-- Cartoon Image Space 1 --> */}
            <img src={core1} alt="Care & Compassion" className="avatar-img" />
          </div>
          <h3 className="value-card-title">Care & Compassion</h3>
          <p className="value-card-text">
            Providing Every Child With Love, Care, And Individual Attention In A Safe And Supportive Learning Environment
          </p>
        </div>
      </div>

      {/* <!-- Card 2: Creativity & Exploration --> */}
      <div className="col-12 col-md-6">
        <div className="value-card card-orange text-white h-100">
          <div className="avatar-wrapper">
            {/* <!-- Cartoon Image Space 2 --> */}
            <img src={core2} alt="Creativity & Exploration" className="avatar-img" />
          </div>
          <h3 className="value-card-title">Creativity & Exploration</h3>
          <p className="value-card-text">
            Encouraging Creativity, Curiosity, And Joyful Learning Experiences Through Fun And Engaging Activities.
          </p>
        </div>
      </div>

      {/* <!-- Card 3: Safety & Trust --> */}
      <div className="col-12 col-md-6">
        <div className="value-card card-green text-white h-100">
          <div className="avatar-wrapper">
            {/* <!-- Cartoon Image Space 3 --> */}
            <img src={core3} alt="Safety & Trust" className="avatar-img" />
          </div>
          <h3 className="value-card-title">Safety & Trust</h3>
          <p className="value-card-text">
            Maintaining A Secure And Child-Friendly Environment For All Children.
          </p>
        </div>
      </div>

      {/* <!-- Card 4: Experienced Teachers --> */}
      <div className="col-12 col-md-6">
        <div className="value-card card-blue text-white h-100">
          <div className="avatar-wrapper">
            {/* <!-- Cartoon Image Space 4 --> */}
            <img src={core4} alt="Experienced Teachers" className="avatar-img" />
          </div>
          <h3 className="value-card-title">Experienced Teachers</h3>
          <p className="value-card-text">
            Qualified And Caring Teachers Who Support Every Child's Learning And Growth With Patience And Dedication
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* <!-- Cloud Image Backdrop (Yellow Arrow Indicator) --> */}
  <div className="bottom-cloud-backdrop">
    <img src={corecloud} alt="Decorative Cloud" className="cloud-img" />
  </div>
</section>

{/* Teachers */}
<section className="teachers-section">
  <div className="container text-center">
    
    {/* <!-- Title Header System (Matches Core Values & About layout style exactly) --> */}
    <div className="teachers-title-container mb-3">
      <h2 className="teachers-main-title">Our Dedicated Teachers</h2>
      <div className="teachers-title-underline"></div>
    </div>
    
    {/* <!-- Section Description Paragraph --> */}
    <div className="teachers-content-body mb-5">
      <p className="teachers-text-paragraph">
        Meet Our Caring And Experienced Teachers Who Are Dedicated To Supporting Every Child's Learning, Creativity, And Overall Development.
      </p>
    </div>
    
    {/* <!-- Teachers Grid System --> */}
    <div className="row g-4 justify-content-center">
      
      {/* <!-- Teacher Card 1: Naseera Ali --> */}
      <div className="col-12 col-md-4">
        <div className="teacher-card text-white">
          <div className="teacher-avatar-wrapper">
            <img src={naseera} alt="Naseera Ali" className="teacher-avatar-img" />
          </div>
          <h3 className="teacher-card-name">Naseera Ali</h3>
          <p className="teacher-card-role">Nursery Manager</p>
        </div>
      </div>

      {/* <!-- Teacher Card 2: Amina Rahman --> */}
      <div className="col-12 col-md-4">
        <div className="teacher-card text-white">
          <div className="teacher-avatar-wrapper">
            <img src={amina} alt="Amina Rahman" className="teacher-avatar-img" />
          </div>
          <h3 className="teacher-card-name">Amina Rahman</h3>
          <p className="teacher-card-role">Administrator</p>
        </div>
      </div>

      {/* <!-- Teacher Card 3: Rania Ahmed --> */}
      <div className="col-12 col-md-4">
        <div className="teacher-card text-white">
          <div className="teacher-avatar-wrapper">
            <img src={rania} alt="Rania Ahmed" className="teacher-avatar-img" />
          </div>
          <h3 className="teacher-card-name">Rania Ahmed</h3>
          <p className="teacher-card-role">Activity Coordinator</p>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}