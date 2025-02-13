import s from "./MovieDetailsNavigation.module.css"
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsNavigation = ({ state }) => {
  return (
    <ul className={s.movieDetailsNavigation}>
      <li>
        <NavLink className={buildLinkClass} to="cast">
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};
export default MovieDetailsNavigation;
