import { MovieItem } from '../MovieItem';
import { useState, useEffect } from 'react';
import { Loader } from '../Loader';
import { getHomeMovies } from 'services/api';
import css from './MovieList.module.css';
import { useLocation } from 'react-router-dom';

const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  const location = useLocation();

  useEffect(() => {
    setStatus(pageStatus.LOADING);

    async function getData() {
      try {
        const data = await getHomeMovies();
        setMovies(data);
        setStatus(pageStatus.SUCCESS);
      } catch {
        setStatus(pageStatus.ERROR);
      }
    }
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {status === pageStatus.ERROR && <p>ERROOOOOOR</p>}

      {(status === pageStatus.LOADING || status === pageStatus.INIT) && (
        <Loader />
      )}

      {status === pageStatus.SUCCESS && (
        <ul className={css.MovieList}>
          {movies?.map(item => {
            return (
              <MovieItem
                location={location}
                key={item.original_title}
                title={item.original_title}
                url={item.poster_path}
                activeId={item.id}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};
