import React from 'react';
import './index.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Components/Services';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path='contact' element= {<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;