import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <HiOutlineSearch className="search-icon" size="1.5em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};
export default Search;
