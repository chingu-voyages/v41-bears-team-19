import './Navigation.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { title: 'Find Pets', url: 'search' },
    { title: 'Donate', url: 'donate' },
    { title: 'Sponsor', url: 'sponsor' },
    { title: 'Login', url: 'login' },
  ];

  return (
    <nav className="nav">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`nav__button ${isMenuOpen ? 'nav__button_close' : ''}`}
      ></button>
      <ul className={`nav__links ${isMenuOpen ? 'nav__links_mobile' : ''}`}>
        {navigationLinks.map(({ title, url }) => (
          <li key={title}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link_active' : 'nav__link'
              }
              to={url}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
