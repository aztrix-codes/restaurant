import React, { useContext } from "react";
// import { itemCards } from "../Utils/SellCardData";
import { ThemeContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./Features/Store";

function SellCard({ activeLink, searchText }) {
  const theme = useContext(ThemeContext);
  const items = useSelector((state) => state.Orders)

  const dispatch = useDispatch();

  return (
    <div className="SellCard scrolly">
      {items.map(
        (item) =>
          activeLink === item.type &&
          (searchText === "" ||
            item.name.toLowerCase().includes(searchText.toLowerCase())) && (
            <div
              key={item.id}
              className="card"
              style={{
                background:
                  theme === "dark" ? "rgba(0,0,0,.7)" : "rgba(255,255,255,.7)",
                color: theme === "dark" ? "white" : "black",
              }}
              onClick={() => dispatch(increment(item.id))}
            >
              <img src={item.img} alt="err" />
              <h2 className="item-name">
                {item.name.length > 13
                  ? item.name.slice(0, 13) + "..."
                  : item.name}
              </h2>
              <div className="card-item-details">
                <div className="item-price">${item.cost}</div>
                <div className="stock">
                  {`${item.count} ${item.count === 1 || 0 ? "item" : "items"}`}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default SellCard;
