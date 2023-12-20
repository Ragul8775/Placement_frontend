import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/Dashboard';
import Category from './scenes/Category';
import StudentDetails from './scenes/StudentDetails';
import LoginForm from './scenes/LoginForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<Category/>} />
        <Route path="/student-details/:year/:section" element={<StudentDetails />} />
       
        
      </Routes>
    </Router>
  );
}

export default App;
