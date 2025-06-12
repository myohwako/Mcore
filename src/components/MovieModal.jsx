// MovieModal.jsx
import React, { useState, useEffect } from 'react';
import LikeButton from './LikeButton';
import '../css/MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
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
<div className="movie-modal-overlay" onClick={onClose}>
  <div className="movie-modal-container" onClick={(e) => e.stopPropagation()}>
    <button className="movie-modal-close" onClick={onClose}>×</button>
    
    <div className="movie-modal-poster">
      <img src={movie.poster} alt={movie.title} />
    </div>

    <div className="movie-modal-footer">
      <h2 className="movie-modal-title">{movie.title}</h2>
      <LikeButton isLiked={liked} onToggle={toggleLike} size={36} />
    </div>
  </div>
</div>

  );
};

export default MovieModal;
