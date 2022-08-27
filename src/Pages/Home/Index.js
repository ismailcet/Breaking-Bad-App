import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../Redux/Slice/charactersSlice";
import CharacterCard from "../../Components/CharacterCard";
import Header from "../../Components/Header";
import LoadingPage from "../Loading/LoadingPage";
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

      {loading ? (
        <LoadingPage />
      ) : (
        <div className="char_cards">
          {currentPageData.map((character) => (
            <Link
              to={`/char/${character.char_id}`}
              style={{ textDecoration: "none", color: "white" }}
              key={character.char_id}
            >
              <CharacterCard character={character} />
            </Link>
          ))}
        </div>
      )}

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
