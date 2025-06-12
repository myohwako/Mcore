import React, { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import "../css/GameCard.css";

const GameCard = ({ game, onClick }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedGames")) || [];
    setLiked(stored.includes(game.title));
  }, [game.title]);

  const toggleLike = () => {
    const stored = JSON.parse(localStorage.getItem("likedGames")) || [];
    const updated = liked
      ? stored.filter((t) => t !== game.title)
      : [...stored, game.title];
    localStorage.setItem("likedGames", JSON.stringify(updated));
    setLiked(!liked);
  };

  return (
    <div
      className="custom-card"
      style={{ backgroundImage: `url(${game.src})` }}
      onClick={() => onClick(game)}
    >
      <div className="heart-button" onClick={(e) => e.stopPropagation()}>
        <LikeButton isLiked={liked} onToggle={toggleLike} size={30} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{game.title}</h3>
        <p className="card-body">{game.price}</p>
      </div>
    </div>
  );
};

export default GameCard;
