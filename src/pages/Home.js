/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faBook, faCarAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

import './Home.css';

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <h1 className="title">Drivers Learning School and Transport License</h1>
        
      </header>

      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h2>Learn to Drive with Confidence</h2>
            <p>Get your driver's license and transport license with our expert instructors.</p>
            <button className="cta-btn">Get Started</button>
          </div>
          <div className="hero-image">
            <img src="hero-image.jpg" alt="Driving Lesson" />
          </div>
        </section>

        <section className="features">
          <div className="feature-item">
            <FontAwesomeIcon icon={faUserGraduate} className="feature-icon" />
            <h3>Expert Instructors</h3>
            <p>Our team of experienced instructors will guide you every step of the way.</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faBook} className="feature-icon" />
            <h3>Comprehensive Curriculum</h3>
            <p>Our courses cover all the essential skills and knowledge for safe driving.</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faCarAlt} className="feature-icon" />
            <h3>Modern Vehicles</h3>
            <p>We use the latest, well-maintained vehicles for your driving lessons.</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUserCheck} className="feature-icon" />
            <h3>High Pass Rates</h3>
            <p>Our students consistently achieve high pass rates on their driving tests.</p>
          </div>
        </section>

        <section className="testimonials">
          <h2>What Our Students Say</h2>
          <div className="testimonial-container">
            <div className="testimonial-card">
              <img src="testimonial-image-1.jpg" alt="Testimonial 1" className="testimonial-image" />
              <h3 className="testimonial-name">John Doe</h3>
              <p className="testimonial-text">"I had a great experience with the Drivers Learning School. The instructors were patient and helpful, and I passed my test on the first try!"</p>
            </div>
            <div className="testimonial-card">
              <img src="testimonial-image-2.jpg" alt="Testimonial 2" className="testimonial-image" />
              <h3 className="testimonial-name">Jane Smith</h3>
              <p className="testimonial-text">"The transport license course was very comprehensive, and the school's resources really helped me prepare for the exam. I'm so glad I chose this school."</p>
            </div>
            <div className="testimonial-card">
              <img src="testimonial-image-3.jpg" alt="Testimonial 3" className="testimonial-image" />
              <h3 className="testimonial-name">Michael Johnson</h3>
              <p className="testimonial-text">"I was nervous about learning to drive, but the instructors at this school made the process stress-free. I highly recommend them to anyone looking to get their license."</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Drivers Learning School and Transport License. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;