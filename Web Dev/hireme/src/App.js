import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import AboutUsPage from './pages/Landing/AboutUsPage';
import LoginPage from './pages/Login/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page at root path */}
        <Route path="/" element={<LandingPage />} />
        {/* About Us page at /about */}
        <Route path="/about" element={<AboutUsPage />} />
        {/* Login page at /login */}
        <Route path="/login" element={<LoginPage />} />
        {/* Add more routes here as your app grows */}
      </Routes>
    </Router>
  );
}

export default App;
