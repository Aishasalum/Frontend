// import React, { useEffect, useState } from 'react';

// import axios from 'axios';

// import { useNavigate } from 'react-router-dom';

// import './StudentMarks.css.css';

// const StudentMarks= () => {
//   const [student, setStudent] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchStudent();
//   }, []);

//   const fetchStudent = () => {
//     setIsLoading(true);
//     axios.get('http://localhost:8080/api/v1/student')
//       .then(response => {
//         setStudent(response.data);
//         console.log(response.data)
//         setIsLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching student data:', error);
//         setIsLoading(false);
//       });
//   };

//   const handleAddStudent = () => {
//     navigate('/Main/upload_student');
//   };

//   const handleUpdateStudent = (id) => {
//     navigate(/upload_student/${id});
//   };

//   const handleDeleteStudent = (id) => {
//     axios.delete(http://localhost:8080/api/v1/student/${id})
//       .then(response => {
//         setStudent(student.filter(student => stId.id !== id));
//       })
//       .catch(error => {
//         console.error('Error deleting student:', error);
//       });
//   };

//   return (
//     <div className="student-table-container">
//       <h2>Student List</h2>
//       <button className="add-event" onClick={handleAddEvent}>Upload student</button>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="event-table">
//           <thead>
//             <tr>
//               <th>stId</th>
//               <th>stFName</th>
//               <th>stLName</th>
//               <th>stEmail</th>
//               <th>stMarks</th>
//               <th>stAddress</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map(student => (
//               <tr key={student.id}>
//                 <td>{st.Id}</td>
//                 <td>{student.FName}</td>
//                 <td>{student.LName}</td>
//                 <td>{student.Email}</td>
//                 <td>{student.Marks}</td>
//                 <td>{student.Address}</td>
//                 <td>
//                   <button onClick={() => handleUpdateStudent(student.id)}>Update</button>
//                   <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default StudentMarks;