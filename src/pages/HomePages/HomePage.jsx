
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../cervise/Api';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessege/ErrorMessege';
import Loader from '../../components/Loader/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import s from "./HomePage.module.css"
const firstPage = 1;

const HomePage = () => {
  const [page, setPage] = useState(firstPage);
  const [movies, setMovies] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLoadMore = () => {
    setIsError(false);
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getTrendingMovies('day', page)
      .then(({ data }) => {
        const { results, total_pages } = data;
        
        
        if (page === total_pages) {
          setIsLastPage(true);
        }
        if (movies === results) {
          setMovies(movies)
          return
        } else { setMovies([...movies, ...results]) }
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
  }, [page]);
  return (
    <div className={s.HPContainer}>
      <h1 >Trending today</h1>
      <MovieList movies={movies} state={location} />
      {!!movies.length && !isLastPage && (
        <LoadMoreBtn onLoadMore={handleLoadMore} isLoading={isLoading} />
      )}
      {isLoading && <Loader/>}
      {isError && <ErrorMessage />}
    </div>
  );
};
export default HomePage;