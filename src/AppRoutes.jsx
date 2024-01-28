import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MovieSearchPage = lazy(() =>
  import('./pages/MovieSearchPage/MovieSearchPage')
);
const MoviePage = lazy(() => import('./pages/MoviePage/MoviePage'));
const SinglePostCommentsPage = lazy(() =>
  import('./pages/SinglePostCommentsPage/SinglePostCommentsPage')
);
const MoviePageReviews = lazy(() =>
  import('./pages/MoviePageReviews/MoviePageReviews')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movie-search" element={<MovieSearchPage />} />
        <Route path="movie/:id" element={<MoviePage />}>
          <Route path="cast" element={<SinglePostCommentsPage />} />
          <Route path="reviews" element={<MoviePageReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export { AppRoutes };
