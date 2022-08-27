import React from "react";

const CharDetail = ({ char }) => {
  return (
    <div className="char_detail">
      <img src={char.img} alt={char.name} className="detail_img" />
      <div className="char_info">
        <h3 className="char_Name">
          Name: <br />
          <span>{char.name}</span>
        </h3>
        <h3 className="char_Nickname">
          Nickname: <br />
          <span>{char.nickname}</span>
        </h3>
        <h3 className="char_Occupation">
          Occupation: <br />
          {char.occupation.map((item) => (
            <span>{item}</span>
          ))}
        </h3>
        <h3 className="char_Portrayed">
          Portrayed by: <br />
          <span>{char.portrayed}</span>
        </h3>
        <h3 className="char_Status">
          Status: <br />
          <span>{char.status}</span>
        </h3>
      </div>
    </div>
  );
};

export default CharDetail;
