import { getMovieCredits } from "../../cervise/Api";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CastList from '../CastList/CastList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessege/ErrorMessege';
import s from "./MovieCast.module.css"
const MovieCast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getMovieCredits(movieId)
      .then(({ data: { cast } }) => {
        setCastList(cast);
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
  return (
    <div className={s.content}>
      <h2 className={s.castTitle}>Cast</h2>
      <CastList cast={castList} />
      {isLoading &&<Loader/>}
      {isError && <ErrorMessage />}
    </div>
  );
};
export default MovieCast;
