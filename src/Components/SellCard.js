import React from "react";
import { itemCards } from "../Utils/SellCardData";

function SellCard({ activeLink }) {

  return (
    <div className="SellCard">
      {itemCards.map((item) => (
        activeLink === item.type && <div key={item.id} className="card">
        <img src={item.img}
          alt="err"
        />
        <h2 className="item-name">
          {item.name.length > 13 ? item.name.slice(0, 13) + "..." : item.name}
        </h2>
        <div className="card-item-details">
          <div className="item-price">${item.cost}</div>
          <div className="stock">{`${item.count} ${item.count == 1 || 0 ? "item": "items"}`} </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default SellCard;
