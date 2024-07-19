// CoursesPage.jsx
import React from 'react';

import { Link } from 'react-router-dom';

import './Courses.css';

const courses = [
  {
    id: 1,
    title: 'Basic Driving Course',
    duration: '4 weeks',
    cost: '$200',
    syllabus: 'Introduction to driving, Traffic rules, Basic maneuvers',
    prerequisites: 'None'
  },
  {
    id: 2,
    title: 'Advanced Driving Course',
    duration: '6 weeks',
    cost: '$400',
    syllabus: 'Advanced driving techniques, Night driving, Highway driving',
    prerequisites: 'Basic Driving Course'
  },
  {
    id: 2,
    title: 'Defensive Driving Techniques',
    duration: '6 weeks',
    cost: '$400',
    syllabus: 'Advanced driving techniques, Night driving, Highway driving',
    prerequisites: 'Basic Driving Course'
  },
  {
    id: 2,
    title: 'Driving in Hazardous Conditions',
    duration: '6 weeks',
    cost: '$400',
    syllabus: 'Advanced driving techniques, Night driving, Highway driving',
    prerequisites: 'Basic Driving Course'
  },
  // Add more courses as needed
];

const Courses = () => {
  return (
    <div className="courses-page">
      <h1>Available Driving Courses</h1>
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Cost:</strong> {course.cost}</p>
            <p><strong>Syllabus:</strong> {course.syllabus}</p>
            <p><strong>Prerequisites:</strong> {course.prerequisites}</p>
            <button className="enroll-button"> <Link to="drivingcoursenotes">Enroll</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
