import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { stockDecrement, stockIncrement } from "./Features/Store";

function Stock() {
  const theme = useContext(ThemeContext);
  const [searchText, setSearchText] = useState("");
  
  const dispatch = useDispatch();

  const items = useSelector((state) => state.Orders);

  return (
    <div className="Stock-item right-side">
      <div className="scrolly">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => (
            <div
              key={item.id}
              className="stock-card"
              style={{
                background:
                  theme === "dark" ? "rgba(0,0,0,.7)" : "rgba(255,255,255,.7)",
                color: theme === "dark" ? "white" : "black",
              }}
            >
              <div className="stock-card-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="stock-card-name">
                <h1>{item.name}</h1>
              </div>
              <div className="stock-card-stock-count-btn">
                <button
                  onClick={() => dispatch(stockDecrement(item.id))}
                >
                  <h1>-</h1>
                </button>
                <p>{item.count}</p>
                <button
                  onClick={() => dispatch(stockIncrement(item.id))}
                >
                  <h1>+</h1>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Stock;
