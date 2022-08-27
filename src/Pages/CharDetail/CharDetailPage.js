import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CharDetail from "../../Components/CharDetail";
import LoadingPage from "../Loading/LoadingPage";
const CharDetailPage = () => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div className="char_detail_main">
      <h2 className="char_title">Character Details</h2>
      {loading === true ? <LoadingPage /> : <CharDetail char={char[0]} />}
      <div className="underline"></div>
      <Link to="/home">
        <button className="btn-back">Go back</button>
      </Link>
    </div>
  );
};

export default CharDetailPage;
