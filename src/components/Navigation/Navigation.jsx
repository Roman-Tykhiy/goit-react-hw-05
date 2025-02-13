import clsx from 'clsx';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink className={buildLinkClass} to="/">
           Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink className={buildLinkClass} to="/movies">
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;