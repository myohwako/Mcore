// MovieHighlightSlider.jsx
import React, { useState } from 'react';
import directorMovies from '../data/directorMovies';
import '../css/Movie.css';

const MovieHighlightSlider = () => {
  const [index, setIndex] = useState(0);
  const total = directorMovies.length;

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  const current = directorMovies[index];

  return (
    <div className="highlight-slider">
      <div className="highlight-card">
        <img src={current.image} alt={current.name} className="highlight-image" />
        <div className="highlight-text">
          <h2 className='mov-name'>{current.name}</h2>
          <p>{current.description}</p>
        </div>
      </div>
      <button className="nav left" onClick={prev}>{'<'}</button>
      <button className="nav right" onClick={next}>{'>'}</button>
    </div>
  );
};

export default MovieHighlightSlider;