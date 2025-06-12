import React from 'react';
import '../css/CategoryBar.css';

const CategoryBar = ({ selectedCategory, onSelectCategory, categories }) => {
  return (
    <div className="category-bar">
      <button
        key="all"
        className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
        onClick={() => onSelectCategory('all')}
      >
        all
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
