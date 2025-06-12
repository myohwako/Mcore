// Movie.jsx
import React from 'react';
import MovieHighlightSlider from '../components/MovieHighlightSlider';
import MovieSituationSlider from '../components/MovieSituationSlider';
import '../css/Movie.css';

const Movie = () => {
  return (
    <div className="movie-page">
      <MovieHighlightSlider />
      <MovieSituationSlider />
    </div>
  );
};

export default Movie;