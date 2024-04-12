import React from "react";

const BlankPageButton = () => {
  const handleClick = () => {
    window.location.href = "/BlankPage";
  };

  return (
    <button className="page-button" onClick={handleClick}>
      Go to Blank Page
    </button>
  );
};

export default BlankPageButton;
