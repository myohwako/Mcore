// LikeButton.jsx
import React from 'react';
import '../css/LikeButton.css';

const LikeButton = ({ isLiked, onToggle, size = 40 }) => {
  return (
    <button
      className={`likee-btn ${isLiked ? 'liked' : ''}`}
      onClick={onToggle}
      style={{
        width: size,
        height: size,
        backgroundColor: 'transparent', // ✅ 핑크 배경 제거
        border: 'none',                // ✅ 불필요한 테두리도 제거
        padding: 0,                    // ✅ 여백 제거로 정렬 안정화
      }}
    >
      <img
        src={
          isLiked
            ? 'https://www.pngarts.com/files/3/Pink-Heart-PNG-Download-Image.png'
            : 'https://cdn-icons-png.flaticon.com/512/25/25424.png'
        }
        alt={isLiked ? '찜됨' : '찜 안됨'}
        style={{ width: '100%', height: '100%' }} // ✅ 이미지 크기 버튼에 맞춤
      />
    </button>
  );
};

export default LikeButton;
