import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import defaultImgCast from '../../img/petya.jpeg';
import css from './Cast.module.css';

const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    setStatus(pageStatus.LOADING);
    async function getData() {
      try {
        const data = await getMovieCast(id);
        setCast(data);
        setStatus(pageStatus.SUCCESS);
      } catch (error) {
        setStatus(pageStatus.ERROR);
      }
    }
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {status === pageStatus.LOADING && <Loader />}

      {(status === pageStatus.ERROR || cast.length === 0) && (
        <p className={css.Error}>ERROOOOOOR, CAST NOT FOUND</p>
      )}

      {status === pageStatus.SUCCESS && (
        <ul className={css.PhotoList}>
          {cast?.map((item, index) => (
            <li key={index}>
              <img
                className={css.Photo}
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                    : defaultImgCast
                }
                alt=""
              />
              <h3 className={css.Name}>{item.original_name}</h3>
              <p className={css.Role}>
                {item.character ? item.character : 'role'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
