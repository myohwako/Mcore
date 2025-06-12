// MusicList.jsx
import React, { useState, useRef, useEffect } from 'react';
import albums from '../data/albums';
import AlbumModal from './AlbumModal';
import '../css/MusicList.css'; 

  const MusicList = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredTitle, setHoveredTitle] = useState('');
    const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, text: '' });
    const [selectedAlbum, setSelectedAlbum] = useState(null); // 모달 상태
  
    useEffect(() => {
      document.body.classList.add('no-scroll');
      return () => document.body.classList.remove('no-scroll');
    }, []);
  
    const scrollToIndex = (index) => {
      const container = scrollRef.current;
      const children = container?.querySelectorAll('.album-card-large');
      const target = children?.[index];
      if (target && container) {
        const containerWidth = container.offsetWidth;
        const scrollLeft = target.offsetLeft - (containerWidth / 2 - target.offsetWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        setActiveIndex(index);
      }
    };
  
    useEffect(() => {
      scrollToIndex(activeIndex);
    }, []);
  
    useEffect(() => {
      const container = scrollRef.current;
      if (!container) return;
  
      const handleWheel = (e) => {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextIndex = (activeIndex + direction + albums.length) % albums.length;
        scrollToIndex(nextIndex);
      };
  
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }, [activeIndex]);
  
    const handleMouseEnter = (e, album) => {
      setHoveredTitle(album.title);
      setTooltip({
        show: true,
        x: e.clientX + 15,
        y: e.clientY - 30,
        text: album.description,
      });
    };
  
    const handleMouseMove = (e) => {
      setTooltip((prev) => ({ ...prev, x: e.clientX + 15, y: e.clientY - 30 }));
    };
  
    const handleMouseLeave = () => {
      setHoveredTitle('');
      setTooltip({ show: false, x: 0, y: 0, text: '' });
    };
  
    return (
      <div className="music-container">
        <h2 className="album-header">MUSICS</h2>
        <p className="hover-title">{hoveredTitle}</p>
  
        <div className="album-scroll-wrapper">
          <div className="album-scroll" ref={scrollRef}>
            <div className="album-list-static">
              {albums.map((album, index) => (
                <div
                  key={album.id}
                  className="album-card-large"
                  onMouseEnter={(e) => handleMouseEnter(e, album)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => setSelectedAlbum(album)} // 클릭 시 모달 오픈
                >
                  <img src={album.src} alt={album.title} className="album-img-large" />
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="scroll-indicator-bar under-album">
          {albums.map((_, index) => (
            <div
              key={index}
              className={`scroll-indicator-dot ${index === activeIndex ? 'active' : ''}`}
              style={{ flex: 1 }}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
  
        {tooltip.show && (
          <div className="tooltip" style={{ top: tooltip.y, left: tooltip.x }}>
            <div className="tooltip-arrow" />
            {tooltip.text}
          </div>
        )}
  
        {selectedAlbum && (
          <AlbumModal album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />
        )}
      </div>
    );
  };
  
  export default MusicList;
  