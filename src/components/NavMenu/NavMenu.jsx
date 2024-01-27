import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.css';

const NavMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink className={styles.link} to="/">
          Home page
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/movie-search">
          Movie
        </NavLink>
      </li>
    </ul>
  );
};

export { NavMenu };
