import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/Header/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import SignUp from './Components/Authentication/SignUp';
import ForgotPassword from './Components/Authentication/ForgetPassword';
import Login from './Components/Authentication/Login';
import Footer from './Components/Footer/Footer';
import Project from './Components/Projects/Project';


const App = () => {
    return (
      <Router>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/project" element={<Project/>} />
      </Routes>
      <Footer/>
  </Router>
    );
};

export default App;