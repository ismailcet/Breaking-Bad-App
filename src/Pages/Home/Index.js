import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../Redux/Slice/charactersSlice";

const Index = () => {
  const characters = useSelector((state) => state.characters.items);
  const loading = useSelector((state) => state.characters.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  return (
    <div>
      <h1>Characters</h1>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        characters.map((character) => (
          <div key={character.char_id}>
            <img src={character.img} alt={character.name} />
          </div>
        ))
      )}
    </div>
  );
};

export default Index;
