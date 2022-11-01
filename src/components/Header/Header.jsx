import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  const activeClassName = ({ isActive }) =>
    isActive ? `${css.active}` : `${css.NavLinkA}`;
  return (
    <header className={css.Header}>
      <nav>
        <ul className={css.NavList}>
          <li>
            <NavLink to="/" end className={activeClassName}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={activeClassName}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
