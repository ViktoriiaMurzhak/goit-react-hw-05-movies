// import { Button } from 'components/Button';
import { MovieItem } from 'components/MovieItem';
import { Error } from 'helpers/Error';
import { useLocation } from 'react-router-dom';
import css from './SearchMovie.module.css';

const Status = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const SearchMovie = ({ value, status, movies }) => {
  const location = useLocation();
  return (
    <>
      {status === Status.SUCCESS && movies.length > 0 && (
        <ul className={css.MovieList}>
          {movies?.map(item => {
            return (
              <MovieItem
                location={location}
                key={item.id}
                title={item.original_title}
                url={item.poster_path}
                activeId={item.id}
              />
            );
          })}
        </ul>
      )}
      {status === Status.SUCCESS && movies.length === 0 && (
        <Error
          text={`Sorry, but nothing was found for "${value}"! try again!`}
        />
      )}
      {/* {movies.length >= 12 && <Button onClick={handleChangePage} />} */}
    </>
  );
};
