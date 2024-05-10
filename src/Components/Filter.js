import React from "react";
import burgerfilter from "../Assets/burgerfilter.png";
import noodlefilter from "../Assets/noodlefilter.png";
import desertfilter from "../Assets/desertfilter.png";
import drinkfilter from "../Assets/drinkfilter.png";

function Filter() {
  return (
    <div className="Filter">
      <div className="filter-item">
        <div className="filter-img-container">
          <img src={burgerfilter} alt="err" />
        </div>
        <div className="filter-name">
          <p>Burgers</p>
        </div>
      </div>
      <div className="filter-item">
        <div className="filter-img-container">
          <img src={noodlefilter} alt="err" />
        </div>
        <div className="filter-name">
          <p>Noodles</p>
        </div>
      </div>
      <div className="filter-item">
        <div className="filter-img-container">
          <img src={desertfilter} alt="err" />
        </div>
        <div className="filter-name">
          <p>Deserts</p>
        </div>
      </div>
      <div className="filter-item">
        <div className="filter-img-container">
          <img src={drinkfilter} alt="err" />
        </div>
        <div className="filter-name">
          <p>Drinks</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
