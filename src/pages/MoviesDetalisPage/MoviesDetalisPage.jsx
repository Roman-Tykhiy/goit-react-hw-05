
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getImgUrl, getMovieDetails } from '../../cervise/Api';
import MovieDetailsNavigation from '../../components/MovieDetailsNavigation/MovieDetailsNavigation';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessege/ErrorMessege';
import s from "./MovieDetailsPage.module.css"
const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackUrl = useRef(location.state ?? '/movies');
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(({ data }) => {
        // console.log(data);
        setMovie(data);
      })
      .catch(e => {
        console.error(e);
        if (e.status === 404) {
          navigate('/404', { replace: true });
        }
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const {
    title,
    runtime,
    overview,
    poster_path,
    genres,
    backdrop_path,
    adult,
    release_date,
    video,
    vote_average,
    vote_count,
    production_countries,
    production_companies,
  } = movie ?? {};
  let def; // for default in the function parameters
  if (!movie) return <Loader isLoading={isLoading} />;
  return (
    <div className={s.container}>
      <Link className={s.goBackBtn} to={goBackUrl.current}>
        <span>Go back</span>
      </Link>
      <h1 className={s.Title}>{title}</h1>
      <div className={s.Info}>
        <div className={s.posterItem}>
          <img
            className={s.Poster}
            src={
              getImgUrl(poster_path, def, 'l')
            }
            alt={title}
          />
        </div>
        <ul className={s.infoItem}>
          <li className={s.infoRow}>
            <div className={s.infoTitle}>Year</div>
            <div className={s.valueItem}>
              {new Date(release_date).getFullYear()}
            </div>
          </li>
          <li className={s.infoRow}>
            <div className={s.infoTitle}>Genre</div>
            <div className={s.valueItem}>
              {genres.map(({ name }) => name).join(', ')}
            </div>
          </li>
          <li className={s.infoRow}>
            <div className={s.infoTitle}>Duration</div>
            <div className={s.valueItem}>{runtime} min</div>
          </li>
        </ul>
      </div>

      <hr className={s.horizontalRule} />
      <p className={s.movieOverview}>{overview}</p>
      <hr className={s.horizontalRule} />
      <MovieDetailsNavigation />
      <Outlet />
      {isLoading && <Loader/>}
      {isError && <ErrorMessage />}
    </div>
  );
};
export default MovieDetailsPage;