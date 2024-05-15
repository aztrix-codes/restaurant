import React, { useContext } from "react";
import { filterMenu } from "../Utils/uidata";
import { ThemeContext } from "../App";

function Filter({ setActiveLink, activeLink}) {
  const theme = useContext(ThemeContext);
  return (
    <div className="Filter">
      {filterMenu.map((item) => (
        <div
          key={item.id}
          className={`filter-item ${activeLink === item.id ? "filter-active" : ""}`}
          onClick={() => setActiveLink(item.id)}
          style={{background: theme === "dark" ? 'rgba(0,0,0,.7)' : 'rgba(255,255,255,.7', color: theme === 'dark' ? "white" : "black"}}
        >
          <div className="filter-img-container">
            <img src={item.img} alt="err" />
          </div>
          <div className="filter-name">
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filter;