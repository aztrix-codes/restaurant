import React from "react";
import searchdark from "../Assets/searchdark.png";

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="res-name">
        <h1>Hakuna Matata</h1>
        <p>
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="search-section">
        <input type="text" placeholder="Search" className="search-input" />
        {/* <img src={searchdark} className="search-icon" /> */}
      </div>
    </div>
  );
}

export default SearchBar;
