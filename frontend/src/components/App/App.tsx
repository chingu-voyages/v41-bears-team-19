<<<<<<< HEAD
import React, { useEffect, useState} from 'react';
=======
import React from 'react';
>>>>>>> development
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import './App.css';
import Search from '../Search/Search';
import Register from '../Register/Register';
<<<<<<< HEAD
=======
import AdoptPage from '../AdoptPage/AdoptPage';
>>>>>>> development

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
=======
        <Route path="/adopt" element={<AdoptPage />} />

>>>>>>> development
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
