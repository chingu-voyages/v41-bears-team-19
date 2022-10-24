import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Login from '../Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
