import { Box } from 'helpers/Box/Box';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetalis } from 'services/api';
import defaultImg from '../../img/default-movie.jpeg';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const activeClassName = ({ isActive }) =>
    isActive ? `${css.active}` : `${css.NavLinkA}`;

  const location = useLocation();

  const [film, setFilm] = useState([]);

  const params = useParams();
  const id = params?.movieId;

  useEffect(() => {
    async function getData() {
      try {
        const data = await getMovieDetalis(id);
        setFilm(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <Link
        to={
          location?.state?.from.pathname + location?.state?.from.search ?? '/'
        }
        className={css.add}
      >
        Back
      </Link>
      <div className={css.InfoBox}>
        <div className={css.ImgBox}>
          <img
            className={css.Img}
            src={
              film?.poster_path
                ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                : defaultImg
            }
            alt=""
          />
        </div>

        <div className={css.InfoText}>
          <h2 className={css.Name}>{film.original_title}</h2>

          <h3 className={css.Title}>Release date</h3>
          <p className={css.Text}>
            {film.release_date ? film.release_date : 'No data available'}
          </p>

          <h3 className={css.Title}>Rating</h3>
          <p className={css.Text}>{film.vote_average}</p>

          <h3 className={css.Title}>Genres</h3>
          <ul className={css.list}>
            {film?.genres?.length === 0 ? (
              <p className={css.Text}>No data available</p>
            ) : (
              film?.genres?.map(item => (
                <li key={item.name}>
                  <p className={css.Text}>{item.name}</p>
                </li>
              ))
            )}
          </ul>

          <h3 className={css.Title}>Overview</h3>
          <p className={css.Text}>
            {film.overview ? film.overview : 'No data available'}
          </p>
        </div>
      </div>
      <div>
        <ul className={css.linkList}>
          <li>
            <NavLink
              to="cast"
              className={activeClassName}
              state={location?.state ?? '/'}
            >
              cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={activeClassName}
              state={location?.state ?? '/'}
            >
              reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};
