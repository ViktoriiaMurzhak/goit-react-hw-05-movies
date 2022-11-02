import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import css from './Reviews.module.css';

const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    setStatus(pageStatus.LOADING);
    async function getData() {
      try {
        const data = await getMovieReviews(id);
        setReviews(data);
        setStatus(pageStatus.SUCCESS);
      } catch (error) {
        setStatus(pageStatus.ERROR);
      }
    }
    getData();
    // eslint-disable-next-line
  }, []);

  const getPostDate = date => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timezone: 'UTC',
    };

    return new Date(date).toLocaleString('en', options);
  };

  return (
    <>
      {status === pageStatus.ERROR && (
        <p className={css.Error}>ERROOOOOOR, REVIEWS NOT FOUND</p>
      )}

      {(status === pageStatus.LOADING || status === pageStatus.INIT) && (
        <Loader />
      )}

      {status === pageStatus.SUCCESS && reviews.length === 0 && (
        <p className={css.Error}>REVIEWS NOT FOUND</p>
      )}

      {status === pageStatus.SUCCESS && (
        <ul className={css.List}>
          {reviews?.map(item => (
            <li className={css.Item} key={item.id}>
              <h3 className={css.Name}>{item.author}</h3>
              <p className={css.Text}>{item.content}</p>
              <span className={css.Date}>{getPostDate(item.updated_at)}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
