import { useState } from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

const Header = () => {
 
  return (
    <header className="header">
      <Link to="/">
        <img src={headerLogo} alt="" className="header__logo" />
      </Link>
      

      <Navigation/>
      {/* <MobileNavigation /> */}
    </header>
  );
};

export default Header;
