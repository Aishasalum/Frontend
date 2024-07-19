import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Dashboard from './component/Dashboard';
import StudentDashboard from './component/StudentDashboard';
import { AddStudent } from './pages/AddStudent';
import Courses from './pages/Courses';
import DrivingCourseNotes from './pages/DrivingCourseNotes';
import LicenseForm from './pages/LicenseForm';
import Login from './pages/Login';
import Register from './pages/Register';
import { StudentLi } from './pages/StudentList';
import StudentRegistrationForm from './pages/StudentRegistrationForm';



const App = () => {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}/>
        <Route path='studentdash'element={<StudentDashboard/>}/>
        <Route path='register'element={<Register/>}/>
        <Route path='dashboard'element={<Dashboard/>}/>
        <Route path='drivingcoursenotes'element={<DrivingCourseNotes/>}/>
        {/* <Route path='home'element={<Home/>}/> */}
        <Route path='licenseform'element={<LicenseForm/>}/>
        {/* <Route path='studentlist'element={<StudentList/>}/>   */}
        <Route path='courses'element={<Courses/>}/>
        {/* <Route path='instructorpage'element={<Instructor/>}/> */}
        <Route path='studentregistrationform'element={<StudentRegistrationForm/>}/>
        {/* <Route path='studentmarks'element={<StudentMarks/>}/> */}
        <Route path='studentList' element={<StudentLi/>}/>
        {/* <Route path='addstudent' element={<AddStudent/>} /> */}

        
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/updateStudent/:id" element={<AddStudent />} />


       
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
