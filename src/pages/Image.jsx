// Image.jsx
import React, { useState, useEffect } from 'react';
import imageData from '../data/imageData';
import LikeButton from '../components/LikeButton';
import '../css/Image.css';

const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const Image = () => {
  const [images, setImages] = useState(() => shuffleArray(imageData));
  const [selected, setSelected] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    if (selected) {
      const stored = JSON.parse(localStorage.getItem('imageComments')) || {};
      const comments = stored[selected.id]?.comments || [];
      setCommentList(comments);
    }
  }, [selected]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const found = imageData.find((img) => img.id === hash);
      if (found) {
        setSelected(found);
        setIsVisible(true);
      }
    }
  }, []);

  const handleShuffle = () => {
    setImages(shuffleArray(imageData));
    setSelected(null);
    setIsVisible(false);
  };

  const handleSelect = (img) => {
    setSelected(img);
    setIsVisible(true);
    window.location.hash = img.id;
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setSelected(null), 300);
    window.location.hash = '';
  };

  const saveComment = () => {
    if (!comment.trim()) return;
    const stored = JSON.parse(localStorage.getItem('imageComments')) || {};
    const current = stored[selected.id]?.comments || [];
    const updated = [...current, comment.trim()];
    stored[selected.id] = { comments: updated };
    localStorage.setItem('imageComments', JSON.stringify(stored));
    setCommentList(updated);
    setComment('');
  };

  const toggleLike = (imgId) => {
    const stored = JSON.parse(localStorage.getItem('likedImages')) || [];
    const updated = stored.includes(imgId)
      ? stored.filter((id) => id !== imgId)
      : [...stored, imgId];
    localStorage.setItem('likedImages', JSON.stringify(updated));
  };

  return (
    <div className="image-page">
      <button className="shuffle-btn" onClick={handleShuffle}>↻</button>

      <div className={`image-grid ${isVisible ? 'shrink' : ''}`}>
        {images.map((img) => (
          <div
            key={img.id}
            className="grid-item"
            onClick={() => handleSelect(img)}
          >
            <img src={img.src} alt={`img-${img.id}`} />
            <div
              className="like-overlay"
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(img.id);
                setImages([...images]);
              }}
            >
              <LikeButton
                isLiked={(JSON.parse(localStorage.getItem('likedImages')) || []).includes(img.id)}
                onToggle={() => {}}
                size={28}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={`image-detail-wrapper ${selected ? (isVisible ? 'show' : 'hide') : ''}`}>
        {selected && (
          <div className="image-detail slide-in">
            <button className="close-btn" onClick={handleClose}>×</button>
            <img src={selected.src} alt="" className="detail-img" />
            <p className="desc">{selected.description}</p>
            <textarea
              className="comment-box"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="코멘트"
            />
            <button className="save-comment-btn" onClick={saveComment}>저장</button>
            <div className="comment-list">
              {commentList.map((cmt, idx) => (
                <div key={idx} className="comment-block">{cmt}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;