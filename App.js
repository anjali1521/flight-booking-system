import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing_page } from './pages/Landing_page'; // Adjust the import path as needed
import { AboutPage } from './pages/AboutPage';
import { FlightBookingPage } from './pages/FlightBookingPage';
import { ContactPage } from './pages/ContactPage';
import { HeaderNavComp } from './components/HeaderNavComp';

function App() {
  return (
    <Router>
      <HeaderNavComp />
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<FlightBookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
