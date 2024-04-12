import React from "react";

const SearchInput = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
