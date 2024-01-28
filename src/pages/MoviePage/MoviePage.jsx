import { Outlet } from 'react-router-dom';
import { SingleMovie } from '../../components/SingleMovie/SingleMovie';

const MoviePage = () => {
  return (
    <div>
      <SingleMovie />
      <Outlet></Outlet>
    </div>
  );
};

export default MoviePage;
