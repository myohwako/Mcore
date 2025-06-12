import React from 'react';

const InfoCard = ({ image, title }) => {
  return (
    <div className="info-card">
      <img src={image} alt={title} />
    </div>
  );
};

export default InfoCard;