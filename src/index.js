// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Music from './pages/Music';
import Movie from './pages/Movie';
import Info from './pages/Info';
import Image from './pages/Image';
import MyPage from './pages/MyPage';

import './index.css'; // 전역 스타일

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/music" element={<Music />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/info" element={<Info />} />
        <Route path="/image" element={<Image />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

