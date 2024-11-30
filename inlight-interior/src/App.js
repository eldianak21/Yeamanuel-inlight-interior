import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/Header/Home/Home';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                
            
                
            </Routes>
        </Router>
    );
};

export default App;