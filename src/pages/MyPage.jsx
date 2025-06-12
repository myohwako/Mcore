// MyPage.jsx
import React, { useState, useEffect } from 'react';
import games from '../data/games';
import infoData from '../data/infoData';
import albums from '../data/albums';
import GameModal from '../components/GameModal';
import AlbumModal from '../components/AlbumModal';
import '../css/MyPage.css';

const Mypage = () => {
  const [likedGames, setLikedGames] = useState([]);
  const [likedInfos, setLikedInfos] = useState([]);
  const [likedAlbums, setLikedAlbums] = useState([]);

  const [modalContent, setModalContent] = useState(null); // 게임, 정보용
  const [contentType, setContentType] = useState(null);   // 'game' | 'info'
  const [albumModal, setAlbumModal] = useState(null);     // 앨범 전용

  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    const gameTitles = JSON.parse(localStorage.getItem('likedGames')) || [];
    const infoTitles = JSON.parse(localStorage.getItem('likedInfos')) || [];
    const albumData = JSON.parse(localStorage.getItem('albumData')) || {};

    const filteredGames = games.filter((g) => gameTitles.includes(g.title));
    const filteredInfos = infoData.filter((i) => infoTitles.includes(i.title));
    const filteredAlbums = albums.filter((a) => albumData[a.id]?.liked);

    setLikedGames(filteredGames);
    setLikedInfos(filteredInfos);
    setLikedAlbums(filteredAlbums);
  }, []);

  const handleRandomPick = () => {
    const all = [...games, ...albums, ...infoData];
    const pick = all[Math.floor(Math.random() * all.length)];
    setRandomItem(pick);
  };

  const handleCardClick = (item) => {
    const { title, src } = item;

    if (games.find(g => g.title === title)) {
      setModalContent(item);
      setContentType('game');
    } else if (albums.find(a => a.title === title)) {
      setAlbumModal(item);
    } else if (infoData.find(i => i.title === title)) {
      setModalContent(item);
      setContentType('info');
    }
  };

  return (
    <div className="mypage">
      {/* ===== 게임 섹션 ===== */}
      <h2 className="mypage-section-title">🎮 찜한 게임</h2>
      <div className="mypage-scroll-row">
        {likedGames.map((game, i) => (
          <div
            key={i}
            className="mini-card"
            style={{ backgroundImage: `url(${game.src})` }}
            onClick={() => {
              setModalContent(game);
              setContentType('game');
            }}
          >
            <div className="mini-title">{game.title}</div>
          </div>
        ))}
      </div>

      {/* ===== 정보 섹션 ===== */}
      <h2 className="mypage-section-title">🧠 찜한 정보</h2>
      <div className="mypage-scroll-row">
        {likedInfos.map((info, i) => (
          <div
            key={i}
            className="mini-card"
            style={{ background: '#fedeff', color: '#222' }}
            onClick={() => {
              setModalContent(info);
              setContentType('info');
            }}
          >
            <div className="mini-title">{info.title}</div>
          </div>
        ))}
      </div>

      {/* ===== 음악 섹션 ===== */}
      <h2 className="mypage-section-title">🎧 찜한 음악</h2>
      <div className="mypage-scroll-row">
        {likedAlbums.map((album, i) => (
          <div
            key={i}
            className="mini-card"
            style={{
              backgroundImage: `url(${album.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => {
              setAlbumModal(album);
            }}
          >
            <div className="mini-title">{album.title}</div>
          </div>
        ))}
      </div>

      {/* ===== 오늘의 랜덤 추천 ===== */}
      <div className="random-section">
        <h2 className="random-title">🎲 오늘의 랜덤 추천!</h2>
        <button className="random-btn" onClick={handleRandomPick}>추천 받기</button>
        {randomItem && (
          <div
            className="random-card"
            onClick={() => handleCardClick(randomItem)}
            style={{
              backgroundImage: `url(${randomItem.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="random-overlay">
              <h3>{randomItem.title}</h3>
              {randomItem.description && <p>{randomItem.description.slice(0, 50)}...</p>}
            </div>
          </div>
        )}
      </div>

      {/* ===== 게임 & 정보 모달 ===== */}
      {modalContent && contentType === 'game' && (
        <GameModal
          game={modalContent}
          isLiked={true}
          toggleLike={() => {}}
          onClose={() => setModalContent(null)}
        />
      )}

      {modalContent && contentType === 'info' && (
        <GameModal
          game={modalContent}
          isLiked={true}
          toggleLike={() => {}}
          onClose={() => setModalContent(null)}
        />
      )}

      {/* ===== 앨범 모달 ===== */}
      {albumModal && (
        <AlbumModal
          album={albumModal}
          onClose={() => setAlbumModal(null)}
        />
      )}
    </div>
  );
};

export default Mypage;
