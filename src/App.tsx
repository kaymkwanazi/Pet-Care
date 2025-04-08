import React from 'react';
import './index.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;