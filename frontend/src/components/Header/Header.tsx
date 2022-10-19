import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className="header">
      <img src={headerLogo} alt="" className="header__logo" />
      <Navigation />
    </header>
  );
};

export default Header;
