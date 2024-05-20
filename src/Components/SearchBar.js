import React, { useContext } from "react";
import { ThemeContext } from '../App';

function SearchBar({ searchText, setSearchText }) {
  const theme = useContext(ThemeContext);
  
  return (
    <div className="SearchBar">
      <div className="res-name">
        <h1 style={{ color: theme === 'dark' ? "white" : "black" }}>Hakuna Matata</h1>
        <p>
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="search-section" style={{ position: 'relative' }}>
        <input 
          type="text" 
          placeholder="Search" 
          className="search-input" 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
          style={{ 
            background: theme === "dark" ? 'rgba(0,0,0,.7)' : 'rgba(255,255,255,.7)', 
            color: theme === 'dark' ? "white" : "black",
          }}
        />
        <h1 style={{ position: 'absolute', top: "45%", left: '2%', transform: 'translateY(-50%)', fontSize: '2vw' }}>🔍</h1>
      </div>
    </div>
  );
}

export default SearchBar;
