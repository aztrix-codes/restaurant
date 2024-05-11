import React, { useState } from "react";
import { filterMenu } from "../Utils/uidata";

function Filter() {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <div className="Filter">
      {filterMenu.map((item) => (
        <div key={item.id}
          className={`filter-item ${activeLink === item.id ? "filter-active" : ""}`}
          onClick={() => setActiveLink(item.id)}
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
