import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="char_card">
      <img src={character.img} alt={character.name} className="char_img" />
      <h3 className="char_name">{character.name}</h3>
    </div>
  );
};

export default CharacterCard;
