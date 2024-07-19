import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const StudentLi = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/student/all')
      .then((response) => {
        setData(response.data);
      })
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/v1/student/${id}`)
      .then((response) => {
        setData(data.filter((item) => item.stId !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = (id) => {
    navigate(`/updateStudent/${id}`);
  };

  return (
    <div className="StudentList">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.stId}</td>
              <td>{item.stFName}</td>
              <td>{item.stLName}</td>
              <td>{item.stEmail}</td>
              <td>{item.stAddress}</td>
              <td>{item.stMarks}</td>
              <td>
                <button type="button" style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleUpdate(item.stId)}>Update</button>
                <button type="button" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleDelete(item.stId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};