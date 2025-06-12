// InfoDetail.jsx
import React from 'react';

const InfoDetail = ({ text, style }) => {
  return (
    <div className="info-detail-box" style={style}>
      {text}
    </div>
  );
};

export default InfoDetail;
