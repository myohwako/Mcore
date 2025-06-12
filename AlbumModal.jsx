// AlbumModal.jsx
import React, { useState, useEffect } from 'react';
import LikeButton from './LikeButton';
import '../css/AlbumModal.css';

const AlbumModal = ({ album, onClose }) => {
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('albumData')) || {};
    if (stored[album.id]) {
      setComment(stored[album.id].comment || '');
      setLiked(stored[album.id].liked || false);
    }
  }, [album]);

  const saveToLocal = () => {
    const stored = JSON.parse(localStorage.getItem('albumData')) || {};
    stored[album.id] = { comment, liked };
    localStorage.setItem('albumData', JSON.stringify(stored));
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-left">
          <img src={album.src} alt={album.title} />
        </div>
        <div className="modal-right">
          <div className="album-like-wrapper">
            <LikeButton isLiked={liked} onToggle={() => setLiked(!liked)} size={40} />
          </div>
          <h2>{album.title}</h2>
          <p>{album.description}</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="코멘트를 입력하세요"
          />
          <button onClick={saveToLocal}>저장</button>
        </div>
      </div>
    </div>
  );
};

export default AlbumModal;