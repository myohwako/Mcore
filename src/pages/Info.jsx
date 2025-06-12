// Info.jsx
import React, { useState, useEffect } from 'react';
import infoData from '../data/infoData';
import InfoCard from '../components/InfoCard';
import InfoDetail from '../components/InfoDetail';
// import LikeButton from '../components/LikeButton';
import '../css/Info.css';

const Info = () => {
  const [index, setIndex] = useState(0);
  const [likes, setLikes] = useState(() => new Set());
  const [isGridView, setIsGridView] = useState(false);

  const current = infoData[index];

  const handleRandom = () => {
    const rand = Math.floor(Math.random() * infoData.length);
    setIndex(rand);
  };

  const toggleLike = () => {
    const newLikes = new Set(likes);
    const key = current.title;
    if (newLikes.has(key)) newLikes.delete(key);
    else newLikes.add(key);
    setLikes(newLikes);
  };

  const isLiked = likes.has(current.title);

  useEffect(() => {
    const saved = localStorage.getItem('likedInfos');
    if (saved) setLikes(new Set(JSON.parse(saved)));
  }, []);

  useEffect(() => {
    localStorage.setItem('likedInfos', JSON.stringify(Array.from(likes)));
  }, [likes]);

  return (
    <div className="info">
      <div className="info-page">
        <button className="grid-toggle-btn" onClick={() => setIsGridView(!isGridView)}>
          {isGridView ? '돌아가기' : '전체 보기'}
        </button>

        {isGridView ? (
          <div className="info-grid-view">
            {infoData.map((item, i) => (
              <div
                key={i}
                className="postit-card"
                onClick={() => {
                  setIndex(i);
                  setIsGridView(false);
                }}
              >
                <div className="postit-number">{i + 1}</div>
                <div className="postit-title">{item.title}</div>
                <div className="postit-desc">{item.description.slice(0, 200)}...</div>
                {likes.has(item.title) && <div className="postit-like">❤️</div>}
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="info-left">
              <div className="info-grid">
                {current.images.map((img, idx) => (
                  <InfoCard key={idx} image={img} />
                ))}
              </div>
              <div key={index} className="info-left-title slidee-up">
                {current.title}
              </div>
            </div>

            <div className="info-right">
              <h1 className="background-rave">（• ˕ •マ</h1>
              <div key={index} className="slidee-up">
                <InfoDetail style={{ whiteSpace: 'pre-line' }} text={current.description} />
              </div>
              <div className="info-buttons">
                <button className="random-btn" onClick={handleRandom}>RANDOM</button>
                <button
                  className={`likee-btn ${isLiked ? 'liked' : ''}`}
                  onClick={toggleLike}
                >
                  {isLiked ? (
                    <img src="https://www.pngarts.com/files/3/Pink-Heart-PNG-Download-Image.png" alt="찜됨" />
                  ) : (
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25424.png" alt="찜 안됨" />
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Info;
