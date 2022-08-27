import React from "react";
import LoadingGif from "../../Images/spinner.gif";
const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={LoadingGif} alt="Spinner" style={{ textAlign: "center" }} />
    </div>
  );
};

export default LoadingPage;
