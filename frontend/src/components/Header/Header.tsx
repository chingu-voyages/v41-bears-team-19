import {useState} from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/">
        <img src={headerLogo} alt="" className="header__logo" />
      </Link>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`header__button ${isMenuOpen? 'nav__button_visible':''}`}
      ></button>

      <Navigation isMenuOpen={isMenuOpen}/>
    </header>
  );
};

export default Header;
