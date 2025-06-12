// Game.jsx
import React, { useState, useMemo } from "react";
import CategoryBar from "../components/CategoryBar";
import GameList from "../components/GameList";
import GameModal from "../components/GameModal";
import games from "../data/games";

const Game = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalGame, setModalGame] = useState(null);
  const [likedTitles, setLikedTitles] = useState(() =>
    JSON.parse(localStorage.getItem("likedGames")) || []
  );

  const allCategories = useMemo(() => {
    const categorySet = new Set();
    games.forEach((game) => game.categories.forEach((c) => categorySet.add(c)));
    return Array.from(categorySet);
  }, []);

  const isLiked = (title) => likedTitles.includes(title);
  const toggleLike = (title) => {
    const updated = isLiked(title)
      ? likedTitles.filter((t) => t !== title)
      : [...likedTitles, title];
    setLikedTitles(updated);
    localStorage.setItem("likedGames", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categories={allCategories}
        />
        <div style={{ flexGrow: 1, paddingLeft: "2rem" }}>
          <GameList
            selectedCategory={selectedCategory}
            onCardClick={(game) => setModalGame(game)}
          />
        </div>
      </div>
      {modalGame && (
        <GameModal
          game={modalGame}
          onClose={() => setModalGame(null)}
          isLiked={isLiked(modalGame.title)}
          toggleLike={() => toggleLike(modalGame.title)}
        />
      )}
    </div>
  );
};

export default Game;
