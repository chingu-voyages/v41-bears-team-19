import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import './App.css';
import Search from '../Search/Search';
import Register from '../Register/Register';
import UserProfile from '../UserProfile/UserProfile';
import AdoptPage from '../AdoptPage/AdoptPage';
import Pet from '../Pet/Pet';
import Shelter from '../Shelter/Shelter'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        {/* Pet and shelter are placeholder routes to facilitate access during review. They should be deleted when search and adopt page are fully functional */}
        <Route path="/pet" element={<Pet />} />
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
