import React from 'react';

import './DrivingCourseNotes.css';

const notes = [
  {
    title: 'Introduction to Driving',
    content: 'This module covers the basics of driving, including vehicle controls, starting and stopping the car, and basic road signs.'
  },
  {
    title: 'Traffic Rules and Regulations',
    content: 'Learn the essential traffic rules and regulations that every driver must follow to ensure safety on the road.'
  },
  {
    title: 'Defensive Driving Techniques',
    content: 'Understand the principles of defensive driving and how to anticipate and respond to potential hazards.'
  },
  {
    title: 'Parking and Maneuvering',
    content: 'This section covers different parking techniques, including parallel parking, and how to maneuver your vehicle in tight spaces.'
  },
  {
    title: 'Highway and City Driving',
    content: 'Learn the differences between highway and city driving, including how to merge onto highways, change lanes, and navigate through city traffic.'
  },
];

const DrivingCourseNotes = () => {
  return (
    <div className="notes-container">
      <h1>Driving Course Notes</h1>
      {notes.map((note, index) => (
        <div key={index} className="note">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default DrivingCourseNotes;
