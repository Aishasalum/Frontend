// LicenseInfoPage.jsx
import React, { useState } from 'react';

import './LicenseForm.css';

const licenses = [
  {
    id: 1,
    type: 'Car License',
    requirements: 'Must be 18 years old, Pass a vision test, Pass a written knowledge test, Pass a road test',
    procedures: 'Complete a driver education course, Schedule and pass a road test, Pay the applicable fee',
  },
  {
    id: 2,
    type: 'Motorcycle License',
    requirements: 'Must be 18 years old, Pass a vision test, Pass a written knowledge test, Pass a motorcycle skills test',
    procedures: 'Complete a motorcycle safety course, Schedule and pass a skills test, Pay the applicable fee',
  },
  {
    id: 3,
    type: 'Commercial Driver License (CDL)',
    requirements: 'Must be 21 years old, Pass a vision test, Pass a written knowledge test, Pass a road test, Meet medical requirements',
    procedures: 'Complete a CDL training program, Schedule and pass a road test, Pay the applicable fee',
  },
  // Add more licenses as needed
];

const faqs = [
  {
    question: 'How do I renew my license?',
    answer: 'You can renew your license online, by mail, or in person at a DMV office. You will need to provide proof of identity, residency, and pay the renewal fee.'
  },
  {
    question: 'What should I do if I lose my license?',
    answer: 'You should apply for a replacement license online or at a DMV office. You will need to provide proof of identity and pay the replacement fee.'
  },
  {
    question: 'Can I drive with an international license?',
    answer: 'Yes, you can drive with an international license for up to one year. After that, you must obtain a local driver’s license.'
  },
  // Add more FAQs as needed
];

const LicenseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    licenseType: '',
    marks: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="license-info-page">
      <h1>Transport License Information</h1>
      
      <section className="license-details">
        <h2>Types of Licenses</h2>
        {licenses.map(license => (
          <div key={license.id} className="license-card">
            <h3>{license.type}</h3>
            <p><strong>Requirements:</strong> {license.requirements}</p>
            <p><strong>Procedures:</strong> {license.procedures}</p>
          </div>
        ))}
      </section>
      
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <p><strong>Q:</strong> {faq.question}</p>
            <p><strong>A:</strong> {faq.answer}</p>
          </div>
        ))}
      </section>
      
      <section className="license-application">
        <h2>License Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input 
              type="number" 
              id="age" 
              name="age" 
              value={formData.age} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="licenseType">License Type:</label>
            <select 
              id="licenseType" 
              name="licenseType" 
              value={formData.licenseType} 
              onChange={handleChange} 
              required
            >
              <option value="">Select a license type</option>
              {licenses.map(license => (
                <option key={license.id} value={license.type}>{license.type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="marks">Marks:</label>
            <input 
              type="text" 
              id="marks" 
              name="marks" 
              value={formData.marks} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default LicenseForm;
