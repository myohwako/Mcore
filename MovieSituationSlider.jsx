// MovieSituationSlider.jsx
import React, { useRef, useState } from 'react';
import situationMovies from '../data/situationMovies';
import MovieCard from './MovieCard';
import '../css/Movie.css';

const MovieSituationSlider = () => {
  const scrollRefs = useRef([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const scroll = (index, direction) => {
    const container = scrollRefs.current[index];
    if (container) {
      const scrollAmount = 616;
      container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="situation-container">
      {situationMovies.map((section, idx) => (
        <div key={idx} className="situation-section">
          <h3>{section.situation}</h3>
          <div className="slider-wrapper">
            <button className="slider-button left" onClick={() => scroll(idx, -1)}>{'<'}</button>
            <div
              className="situation-slider"
              ref={(el) => (scrollRefs.current[idx] = el)}
            >
              {section.movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)} />
              ))}
            </div>
            <button className="slider-button right" onClick={() => scroll(idx, 1)}>{'>'}</button>
          </div>
        </div>
      ))}

      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedMovie.poster} alt={selectedMovie.title} className="modal-poster" />
            <h2>{selectedMovie.title}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieSituationSlider;