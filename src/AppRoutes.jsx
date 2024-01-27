import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './components/SharedLayout/SharedLayout';

import { HomePage } from 'pages/HomePage/HomePage';
import { MoviePage } from 'pages/MoviePage/MoviePage';
import { MovieSearchPage } from 'pages/MovieSearchPage/MovieSearchPage';
import { SinglePostCommentsPage } from 'pages/SinglePostCommentsPage/SinglePostCommentsPage';
import { MoviePageReviews } from 'pages/MoviePageReviews/MoviePageReviews';

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
      </Route>
    </Routes>
  );
};

export { AppRoutes };
