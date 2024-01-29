import { Link, useLocation } from 'react-router-dom';

import styles from './posts-search-list.module.css';

const PostsSearchList = ({ items }) => {
  const location = useLocation();
  const url = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg = 'https://via.placeholder.com/338x281';
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {items.map(({ id, title, name, backdrop_path }) => (
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
  );
};

export default PostsSearchList;
