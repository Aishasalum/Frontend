/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

import './Dashboard.css';

function Dashboard({chilndren}) {
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
            <a href="addstudent" className="sidebar-nav-link">
              <FontAwesomeIcon icon={faUserGraduate} />
              <span>Addstudent</span>
            </a>
          </li>
          <li>
            <a href="studentList" className="sidebar-nav-link">
              <FontAwesomeIcon icon={faUserGraduate} />
              <span>StudentList</span>
            </a>
          </li>
        </ul>
      </nav>
      

    </div>
  );
}

export default Dashboard;
