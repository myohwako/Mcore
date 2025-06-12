// Home.jsx
import React from 'react';
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="main-content">
        <p className='core'><span className='sigma-span'>∑</span><span className='c'>Core</span></p>
        <p className='web-des'>
            ∑Core는 내가 좋아하는 정적인 취미들을 모아두고, 방문자에게 테마별로 큐레이션 형태로 제공하며, 랜덤 추천해 주는 웹사이트 입니다.
        </p>
      </div>
    </div>
  );
};

export default Home;