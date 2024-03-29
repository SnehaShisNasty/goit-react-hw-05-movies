import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getAllMovies } from 'api/movie';

import styles from './HomeMovieList.module.css';

const HomeMovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const serverAllMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getAllMovies();
        setMovies(data.results?.length ? data.results : []);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    serverAllMovies();
  }, []);
  const url = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg = 'https://via.placeholder.com/338x281';
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.title}>Trending Movies</h2>
        {loading && <p>...Loading</p>}
        <ul className={styles.list}>
          {movies.map(({ id, title, name, backdrop_path }) => (
            <li key={id} className={styles.card}>
              <Link to={`/movie/${id}`} state={{ from: location }}>
                <p className={styles.subtitle}> {title || name}</p>
                <img
                  src={backdrop_path ? url + backdrop_path : defaultImg}
                  alt=""
                  className={styles.img}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export { HomeMovieList };
