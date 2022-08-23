import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../Redux/Slice/charactersSlice";
import CharacterCard from "../../Components/CharacterCard";
import Header from "../../Components/Header";
const Index = () => {
  const characters = useSelector((state) => state.characters.items);
  const loading = useSelector((state) => state.characters.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  return (
    <div className="home_page">
      <Header />

      <div className="char_cards">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          characters.map((character) => (
            <CharacterCard character={character} key={character.char_id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Index;
