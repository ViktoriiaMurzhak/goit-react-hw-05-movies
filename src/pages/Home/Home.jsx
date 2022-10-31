import css from './Home.module.css';
import { MovieList } from 'components/MovieList';
import { Box } from 'helpers/Box/Box';

export const Home = () => {
  return (
    <Box>
      <h1 className={css.Title}>Trending movies of the week</h1>
      <MovieList />
    </Box>
  );
};
