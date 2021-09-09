import React from "react";
import "./Search.css";

const Search = ({ value, onSearch }) => {
  return (
    <center>
      <form className=" mt-2 mb-2 search-bar align-items-center">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onSearch={(event) => this.onSearchChange(event)}
          onChange={(event) => onSearch(event)}
          value={value}
        />
      </form>
    </center>
  );
};

export default Search;
