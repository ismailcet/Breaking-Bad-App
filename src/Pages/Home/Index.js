import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../Redux/Slice/charactersSlice";
import CharacterCard from "../../Components/CharacterCard";
import Header from "../../Components/Header";

import SweetPagination from "sweetpagination";

const Index = () => {
  const characters = useSelector((state) => state.characters.items);
  const loading = useSelector((state) => state.characters.isLoading);
  const [currentPageData, setCurrentPageData] = useState(characters);

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
          currentPageData.map((character) => (
            <CharacterCard character={character} key={character.char_id} />
          ))
        )}
      </div>
      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={12}
        getData={characters}
        navigation={true}
        getStyle={"style-custom"}
        className="pagination"
      />
    </div>
  );
};

export default Index;
