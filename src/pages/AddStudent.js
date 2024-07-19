import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

export const AddStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stFName, setStFName] = useState('');
  const [stLName, setStLName] = useState('');
  const [stEmail, setStEmail] = useState('');
  const [stMarks, setStMarks] = useState(0);
  const [stAddress, setStAddress] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/v1/student/${id}`)
        .then((response) => {
          const student = response.data;
          setStFName(student.stFName);
          setStLName(student.stLName);
          setStEmail(student.stEmail);
          setStMarks(student.stMarks);
          setStAddress(student.stAddress);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const student = {
      stFName,
      stLName,
      stEmail,
      stMarks,
      stAddress,
    };
    if (id) {
      // Update student
      axios.put(`http://localhost:8080/api/v1/student/${id}`, student)
        .then((response) => {
          console.log(response);
          console.log(response.data);
          alert("Updated Successfully");
          navigate('/studentList');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Add new student
      axios.post('http://localhost:8080/api/v1/student/add', student)
        .then((response) => {
          console.log(response);
          console.log(response.data);
          alert("Inserted Successfully");
          navigate('/studentList');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'stFName':
        setStFName(value);
        break;
      case 'stLName':
        setStLName(value);
        break;
      case 'stEmail':
        setStEmail(value);
        break;
      case 'stMarks':
        setStMarks(value);
        break;
      case 'stAddress':
        setStAddress(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="add-student-container">
      <h2 className="title">{id ? 'Update Student' : 'Add Student'}</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="stFName" value={stFName} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="stLName" value={stLName} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="stEmail" value={stEmail} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Marks:</label>
          <input type="number" name="stMarks" value={stMarks} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="stAddress" value={stAddress} onChange={handleInputChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update Student' : 'Add Student'}</button>
      </form>
    </div>

    )
}