import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.scss";
import { Star, StarFilled } from "../../assets/icons";
import { useFavorites } from "../../context/FavoritesContext";
import CharacterImage from "../../components/CharacterImage";

const CharacterCard = ({ char }) => {
  // after just properties that are necessary not full object
  const { addFavorite, removeFavorite, handleAlert } = useFavorites();

  const handleAdd = (char) => {
    char.clicked = !char.clicked;
    if (char.clicked) {
      addFavorite(char);
      handleAlert({ type: "success", text: "Character added to favorites" });
    } else {
      removeFavorite(char);
      handleAlert({ type: "danger", text: "Character removed from favorites" });
    }
  };

  return (
    <div className="character-container">
      <h1>{char.name}</h1>
      <CharacterImage path={char.thumbnail.path} />
      <Button>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          key={char.id}
          to={`/characters/${char.id}/details`}
        >
          More details{" "}
        </Link>
      </Button>
      <div className="star-container">
        {!char.clicked ? (
          <Star onClick={() => handleAdd(char)} />
        ) : (
          <StarFilled onClick={() => handleAdd(char)} />
        )}
      </div>
      <h3>Events...</h3>
    </div>
  );
};

export default CharacterCard;
