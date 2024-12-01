import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/Header/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';

const App = () => {
    return (
      <Router>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
         
      </Routes>
  </Router>
    );
};

export default App;