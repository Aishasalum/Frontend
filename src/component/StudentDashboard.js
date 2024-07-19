/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faIdCard, faCog } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

import './Dashboard.css';

function StudentDashboard({chilndren}) {
  return (
    <div className="dashboard">
      <nav className="sidebar">
        <ul className="sidebar-nav">
          <li>
            <a href="#home" className="sidebar-nav-link">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="courses" className="sidebar-nav-link">
              <FontAwesomeIcon icon={faBook} />
              <span>Courses</span>
            </a>
          </li>
          <li>
            <a href="licenseform" className="sidebar-nav-link">
              <FontAwesomeIcon icon={faIdCard} />
              <span>License Form</span>
            </a>
          </li>
          <li>
            <a href="instructor" className="sidebar-nav-link">
              <FontAwesomeIcon icon={faCog} />
              <span>Instructor</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <marquee> <h1>Welcome to drivers and transport license</h1></marquee>
        <section id="home" className="section">
         
          <img src="image/d.jpg" alt="Transport License" className="section-image" />
          <div className="section-content">
            <h2>Learn to Drive</h2>
            <p>Join our comprehensive driving courses designed to make you a confident and skilled driver.</p>
          </div>
        </section>
        <section id="courses" className="section">
          <img src="image/aisha.jpg" alt="Transport License" className="section-image" />
          <img src="image/program-2.jpg" alt="Transport License" className="section-image" />
          <div className="section-content">
            <h2>Get Your License</h2>
            <p>Obtain your transport license with our expert guidance and support.</p>
          </div>
        </section>
        <section id="courses" className="section">
          <img src="image/c.jpg" alt="Transport License" className="section-image" />
          <div className="section-content">
            <h2>About us</h2>
            <p>Obtain your transport license with our expert guidance and support.</p>
          </div>
        </section>
        {/* Add other sections as needed */}
      </div>
      
    </div>
  );
}

export default StudentDashboard;
