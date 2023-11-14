import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/Dashboard';
import Category from './scenes/Category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category" element={<Category/>} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
