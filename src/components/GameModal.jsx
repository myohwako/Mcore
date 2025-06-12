import React from 'react';
import LikeButton from './LikeButton';
import '../css/GameModal.css';

const GameModal = ({ game, onClose, isLiked, toggleLike }) => {
  if (!game) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        style={{ backgroundImage: `url(${game.src})` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>×</button>

        <h2 className="modal-title">{game.title}</h2>

        <div className="modal-desc-box">
          <p>{game.description}</p>
          <p><strong>카테고리:</strong> {game.categories?.join(', ')}</p>
          <div className="modal-like">
            <LikeButton isLiked={isLiked} onToggle={toggleLike} size={36} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
