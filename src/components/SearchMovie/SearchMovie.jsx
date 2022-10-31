import { Button } from 'components/Button';
import { MovieItem } from 'components/MovieItem';
import { useEffect, useState } from 'react';
import { getMovieByName } from 'services/api';
import { Error } from 'helpers/Error';
import css from './SearchMovie.module.css';

const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const SearchMovie = ({ value }) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  useEffect(() => {
    if (value) {
      setStatus(pageStatus.LOADING);
      getData();
    }
    async function getData() {
      const newData = await getMovieByName(value);
      setMovies([...newData.results]);
      setStatus(pageStatus.SUCCESS);
    }
  }, [value]);

  useEffect(() => {
    if (page > 1) {
      async function getData() {
        const newPage = await getMovieByName(value, page);
        setMovies(prev => [...prev, ...newPage.results]);
      }
      getData();
    }
    // eslint-disable-next-line
  }, [page]);

  // useEffect(() => {
  //   if (value) {
  //     setStatus(pageStatus.LOADING);
  //     getData();
  //   }

  //   async function getData() {
  //     try {
  //       const data = await getMovieByName(value, page);
  //       setMovies([...data.results]);
  //       setStatus(pageStatus.SUCCESS);
  //     } catch (error) {
  //       setStatus(pageStatus.ERROR);
  //     }
  //   }
  // }, [value, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {status === pageStatus.SUCCESS && movies.length > 0 && (
        <ul className={css.MovieList}>
          {movies?.map(item => {
            return (
              <MovieItem
                key={item.id}
                title={item.original_title}
                url={item.poster_path}
              />
            );
          })}
        </ul>
      )}
      {status === pageStatus.SUCCESS && movies.length === 0 && (
        <Error
          text={`Sorry, but nothing was found for "${value}"! try again!`}
        />
      )}
      {movies.length >= 12 && <Button onClick={handleLoadMore} />}
    </>
  );
};
