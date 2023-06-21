import Header from './assets/components/Header'
import React, { useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Train from './assets/pages/Train';
import Book from './assets/pages/Book';
import Cancel from './assets/pages/Cancel';
import Login from './assets/pages/Login';
import WelcomePage from './assets/pages/WelcomePage';

  
const App = () => {

  const [, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
    
   
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/trains" element={<Train/>} />
          <Route path="/book" element={<Book/>} />
          <Route path="/cancel" element={<Cancel/>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/WelcomePage" element={<WelcomePage handleLogout={handleLogout} />} />
        </Routes>
      </div>
    
      </BrowserRouter>
   
    </>
  )
}

export default App
