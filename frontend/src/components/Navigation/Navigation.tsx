import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const navigationLinks = [
    { title: 'Find Pets', url: 'find-pets' },
    { title: 'Donate', url: 'donate' },
    { title: 'Sponsor', url: 'sponsor' },
    { title: 'Login', url: 'login' },
  ];

  return (
    <nav className="nav">
      <ul className="nav__links">
        {navigationLinks.map(({ title, url }) => (
          <li>
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
