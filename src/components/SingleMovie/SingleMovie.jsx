import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { getMovieById } from 'api/movie';

import styles from './single-movie.module.css';

const SingleMovie = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();

  const from = location.state?.from || '/';

  const navigate = useNavigate();

  useEffect(() => {
    const serverMovie = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieById(id);

        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    serverMovie();
  }, []);

  const goBack = () => navigate(from);
  const url = 'https://image.tmdb.org/t/p/original/';
  return (
    <section className="section">
      {loading && <p>...Loading</p>}
      <button onClick={goBack} type="button" className={styles.button}>
        Go back
      </button>

      {movie && (
        <div>
          <div
            style={{ backgroundImage: `url(${url + movie.backdrop_path})` }}
            className={styles.movieContainer}
          ></div>
          <div className={styles.flex}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Vote:{movie.vote_average}</p>
            <div className={styles.link__box}>
              <Link to="cast" state={{ from }} className={styles.link}>
                Cast
              </Link>
              <Link to="reviews " state={{ from }} className={styles.link}>
                Reviews
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { SingleMovie };
