import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={headerLogo} alt="" className="header__logo" />
    </header>
  );
};

export default Header;
