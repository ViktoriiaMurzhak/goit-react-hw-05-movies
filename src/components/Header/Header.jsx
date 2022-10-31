import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.Header}>
      <nav>
        <ul className={css.NavList}>
          <li>
            <NavLink to="/" end className={css.NavLinkA}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.NavLinkA}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
