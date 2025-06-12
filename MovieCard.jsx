// MovieCard.jsx
import React, { useState, useEffect } from 'react';
import LikeButton from './LikeButton';
import '../css/Movie.css';

const MovieCard = ({ movie, onClick }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('likedMovies')) || [];
    setLiked(stored.includes(movie.title));
  }, [movie.title]);

  const toggleLike = () => {
    const stored = JSON.parse(localStorage.getItem('likedMovies')) || [];
    const updated = liked
      ? stored.filter((t) => t !== movie.title)
      : [...stored, movie.title];
    localStorage.setItem('likedMovies', JSON.stringify(updated));
    setLiked(!liked);
  };

  return (
    <div className="movie-card" onClick={onClick}>
      <img src={movie.thumb} alt={movie.title} className="movie-image" />

      <div className="movie-overlay">
        <div className="overlay-top-right">
          <LikeButton isLiked={liked} onToggle={toggleLike} size={32} />
        </div>
        <div className="overlay-bottom-left">
          <div className="movie-title">{movie.title}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;