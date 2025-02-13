// import MovieItem from '../MovieItem/MovieItem';
import { Link, useLocation } from 'react-router-dom';
import s from "./MovieList.module.css"

const MovieList = ({ movies, state }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(({ id, title }) => {
       
        
        return (
          <li key={id} className={s.listItem}>
            <Link to={`/movies/${id}`} state={state} className={s.link}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;



























