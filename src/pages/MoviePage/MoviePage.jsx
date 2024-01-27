import { Outlet } from 'react-router-dom';
import { SingleMovie } from '../../components/SingleMovie/SingleMovie';

import styles from './MoviePage.module.css';

const MoviePage = () => {
  return (
    <div>
      <SingleMovie />
      <Outlet></Outlet>
    </div>
  );
};

export { MoviePage };
