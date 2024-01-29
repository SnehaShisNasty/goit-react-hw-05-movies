import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';

import { getMovieById } from 'api/movie';

import styles from './single-movie.module.css';

const SingleMovie = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);

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
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    serverMovie();
  }, [id]);

  const goBack = () => navigate(from);
  const url = 'https://image.tmdb.org/t/p/original/';
  const defaultUrl = 'https://via.placeholder.com/1900x500';
  console.log(movie);
  // console.log(movie.backdrop_path);
  return (
    <section className="section">
      {loading && <p>...Loading</p>}
      <button onClick={goBack} type="button" className={styles.button}>
        Go back
      </button>

      {movie && (
        <div>
          <div
            style={{
              backgroundImage: `url(${
                movie.backdrop_path !== null
                  ? url + movie.backdrop_path
                  : defaultUrl
              })`,
            }}
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
